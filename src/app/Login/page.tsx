import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Login() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Header showLogin={false} />
      <main className="flex-grow py-16">
        <div className="container mx-auto max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">Log in to Your Account</h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-cyan-400 focus:border-cyan-400"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-cyan-400 focus:border-cyan-400"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-cyan-300 transition hover:scale-105"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-center text-gray-400 mt-4">
            Don't have an account?{" "}
            <a href="/Signup" className="text-cyan-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
