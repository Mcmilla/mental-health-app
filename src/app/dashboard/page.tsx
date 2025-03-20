import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header showLogin={false} />
      <main className="flex-grow py-20 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-10 text-center">
          Welcome to Your Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* Emotion Analysis Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Emotion Analysis</h3>
            <p className="text-gray-600 mb-6">Analyze your recorded speech to understand emotional patterns.</p>
            <Link href="/analysis" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Start Analysis
            </Link>
          </div>

          {/* Reports Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reports</h3>
            <p className="text-gray-600 mb-6">View detailed reports on your emotional health trends.</p>
            <Link href="/reports" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              View Reports
            </Link>
          </div>

          {/* Settings Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Settings</h3>
            <p className="text-gray-600 mb-6">Customize your preferences and account details.</p>
            <Link href="/settings" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Go to Settings
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
