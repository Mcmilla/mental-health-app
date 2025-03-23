from flask import Flask, request, jsonify
import os
import librosa
import numpy as np
import pickle
from tensorflow.keras.models import model_from_json, Sequential

app = Flask(__name__)

# Step 1: Load the model structure from JSON
model_json_path = r'D:\downloads\CNN_model.json'  # Use raw string to avoid issues with paths
try:
    with open(model_json_path, 'r') as json_file:
        loaded_model_json = json_file.read()
    print("Model structure loaded successfully.")
except Exception as e:
    print(f"Error loading model structure: {e}")
    loaded_model_json = None

# Step 2: Load the model from JSON
if loaded_model_json:
    try:
        loaded_model = model_from_json(
            loaded_model_json,
            custom_objects={'Sequential': Sequential}
        )
        print("Model loaded successfully.")
    except Exception as e:
        print(f"Error loading model: {e}")
        loaded_model = None
else:
    loaded_model = None

# Step 3: Load model weights
if loaded_model:
    weights_path = r'D:\downloads\best_model1_weights.h5'  # Raw string for file path
    try:
        loaded_model.load_weights(weights_path)
        print("Weights loaded successfully.")
    except Exception as e:
        print(f"Error loading weights: {e}")
else:
    print("Model not loaded, skipping weights loading.")

# Step 4: Compile the model (only if the model is loaded)
if loaded_model:
    try:
        loaded_model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
        print("Model compiled successfully.")
    except Exception as e:
        print(f"Error compiling the model: {e}")
else:
    print("Model is not available for compilation.")

with open(r'D:\downloads\scaler2.pickle', 'rb') as f:
    scaler2 = pickle.load(f)

with open(r'D:\downloads\encoder2.pickle', 'rb') as f:
    encoder2 = pickle.load(f)


def zcr(data, frame_length, hop_length):
    zcr_val = librosa.feature.zero_crossing_rate(data, frame_length=frame_length, hop_length=hop_length)
    return np.squeeze(zcr_val)

def rmse(data, frame_length=2048, hop_length=512):
    # Pass the audio data using the keyword argument 'y'
    rmse_val = librosa.feature.rms(y=data, frame_length=frame_length, hop_length=hop_length)
    return np.squeeze(rmse_val)

def mfcc(data, sr, frame_length=2048, hop_length=512, flatten: bool=True):
    mfcc_val = librosa.feature.mfcc(y=data, sr=sr)
    # If flatten is False, return the transposed mfcc squeezed; otherwise, return a flattened array
    return np.squeeze(mfcc_val.T) if not flatten else np.ravel(mfcc_val.T)

def extract_features(data, sr=22050, frame_length=2048, hop_length=512):
    result = np.array([])
    
    result = np.hstack((
        result,
        zcr(data, frame_length, hop_length),
        rmse(data, frame_length, hop_length),
        mfcc(data, sr, frame_length, hop_length)
    ))
    return result
def get_predict_feat(path):
    d, s_rate = librosa.load(path, duration=2.5, offset=0.6)
    res = extract_features(d)
    result = np.array(res)
    result = np.reshape(result, newshape=(1, 2376))
    # Assuming scaler2 is already defined and loaded elsewhere
    i_result = scaler2.transform(result)
    final_result = np.expand_dims(i_result, axis=2)
    
    return final_result

res=get_predict_feat(r"D:\downloads\Compressed\Ravdess\Actor_24\03-01-06-01-01-02-24.wav")
print(res.shape)

emotions1={1:'Neutral', 2:'Calm', 3:'Happy', 4:'Sad', 5:'Angry', 6:'Fear', 7:'Disgust',8:'Surprise'}

# Function to handle prediction
def prediction(path1):
    res = get_predict_feat(path1)
    predictions = loaded_model.predict(res)
    y_pred = encoder2.inverse_transform(predictions)
    
    # Print result in terminal
    print(f"Prediction for {path1}: {y_pred[0][0]}")
    
    return y_pred[0][0]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        audio_path = data.get("audio_path")

        if not audio_path:
            return jsonify({"error": "No audio path provided"}), 400

        # Call the prediction function
        result = prediction(audio_path)

        return jsonify({"emotion": result})

    except Exception as e:
        print(f"Error: {str(e)}")  # Print error in terminal
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
