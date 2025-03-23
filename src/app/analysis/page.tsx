"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setPrediction(null); // Reset previous prediction
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setPrediction(null);

    if (!file) {
      setError("Please select an audio file.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("audio_file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setPrediction(data.emotion);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🎙️ Audio Emotion Prediction</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">Upload Audio File:</span>
          <input
            type="file"
            accept="audio/*"
            className="mt-2 w-full p-2 border rounded-md"
            onChange={handleFileChange}
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Submit"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">❌ Error: {error}</p>}
      {prediction && <p className="text-green-600 mt-4 text-xl">🎯 Predicted Emotion: {prediction}</p>}
    </div>
  );
}
