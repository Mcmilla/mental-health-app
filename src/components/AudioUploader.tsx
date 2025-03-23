"use client";

import React, { useState, useRef } from "react";

interface AudioUploaderProps {
  onFileSelect: (file: File) => void;
}

const AudioUploader: React.FC<AudioUploaderProps> = ({ onFileSelect }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      onFileSelect(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="mb-4 px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow transition hover:bg-cyan-300"
      >
        Upload WAV File
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="audio/wav"
        onChange={handleChange}
        className="hidden"
        title="Upload a WAV audio file"
      />
      {fileName && (
        <p className="mb-2 text-gray-300">
          Selected file: <span className="font-medium">{fileName}</span>
        </p>
      )}
      {audioUrl && (
        <div className="mt-2 w-full max-w-md">
          <audio src={audioUrl} controls className="w-full" />
        </div>
      )}
    </div>
  );
};

export default AudioUploader;
