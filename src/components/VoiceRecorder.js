"use client";

import React, { useState, useRef } from "react";

const VoiceRecorder = ({ onSave }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Try to use "audio/wav" MIME type, but fallback to default if not supported.
      let options = { mimeType: "audio/wav" };
      try {
        mediaRecorderRef.current = new MediaRecorder(stream, options);
      } catch (e) {
        console.warn("audio/wav not supported, using default MIME type", e);
        mediaRecorderRef.current = new MediaRecorder(stream);
      }
      // Capture the actual MIME type
      const actualMimeType = mediaRecorderRef.current.mimeType;

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: actualMimeType });
        chunksRef.current = [];
        // Convert blob to data URL and store in localStorage
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result;
          localStorage.setItem("recordedAudio", dataUrl);
          setAudioUrl(dataUrl);
          if (onSave) onSave(blob);
        };
        reader.readAsDataURL(blob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!isRecording && (
        <button
          onClick={startRecording}
          className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg shadow transition hover:bg-cyan-300"
        >
          Start Recording
        </button>
      )}
      {isRecording && (
        <button
          onClick={stopRecording}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow transition hover:bg-red-400"
        >
          Stop Recording
        </button>
      )}
      {audioUrl && (
        <div>
          <p className="text-gray-300">Preview:</p>
          <audio src={audioUrl} controls className="mt-2" />
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
