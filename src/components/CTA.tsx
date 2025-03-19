import Button from './ui/button';
export default function CTA() {
  return (
    <section className="bg-gray-800 py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Explore Your Emotions?</h2>
        <Button href="/Signup" variant="default" size="lg">Sign Up</Button>
      </div>
    </section>
  );
}