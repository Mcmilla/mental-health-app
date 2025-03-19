import Button from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-white">Unlock the Power of AI-Driven Emotional Insights</h2>
        <p className="text-lg mb-6 text-gray-300">Analyze emotions, track mood patterns, and improve mental well-being with EmotionAI.</p>
        <Link href="/Signup">
          <Button variant="default" size="lg">Get Started</Button>
        </Link>
      </div>
    </section>
  );
}
