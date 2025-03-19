export default function Features() {
  return (
    <section className="py-20" id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:rotate-1">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">🎙️ Emotion Analysis</h3>
            <p className="text-gray-300">Use AI-powered speech analysis to detect emotions.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:rotate-1">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">📊 Mood Tracking</h3>
            <p className="text-gray-300">Track emotional patterns over time with interactive reports.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:rotate-1">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">🤖 AI Chatbot</h3>
            <p className="text-gray-300">Chat with an AI that understands and responds to your emotions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
