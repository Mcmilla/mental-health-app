export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>Contact us: <a href="mailto:support@emotionai.com" className="underline text-cyan-300">support@emotionai.com</a></p>
        <p>&copy; {new Date().getFullYear()} EmotionAI. All rights reserved.</p>
      </div>
    </footer>
  );
}