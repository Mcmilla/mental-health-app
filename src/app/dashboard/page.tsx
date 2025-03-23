"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-30 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">
          Welcome to Your Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* Emotion Analysis Card */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Emotion Analysis
            </h3>
            <p className="text-gray-300 mb-6">
              Analyze your recorded speech to understand emotional patterns.
            </p>
            <Link
              href="/analysis"
              className="inline-block px-6 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Start Analysis
            </Link>
          </div>

          {/* Reports Card */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Reports
            </h3>
            <p className="text-gray-300 mb-6">
              View detailed reports on your emotional health trends.
            </p>
            <Link
              href="/reports"
              className="inline-block px-6 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              View Reports
            </Link>
          </div>

          {/* Settings Card */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Settings
            </h3>
            <p className="text-gray-300 mb-6">
              Customize your preferences and account details.
            </p>
            <Link
              href="/settings"
              className="inline-block px-6 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Go to Settings
            </Link>
          </div>

          {/* Notifications Center */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Notifications
            </h3>
            <p className="text-gray-300 mb-6">
              Stay updated with the latest alerts and messages.
            </p>
            <Link
              href="/notifications"
              className="inline-block px-6 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              View Notifications
            </Link>
          </div>

          {/* Task Management */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Tasks
            </h3>
            <p className="text-gray-300 mb-6">
              Manage and track your tasks efficiently.
            </p>
            <Link
              href="/tasks"
              className="inline-block px-6 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Manage Tasks
            </Link>
          </div>

          {/* User Profile */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Profile
            </h3>
            <p className="text-gray-300 mb-6">
              View and edit your personal information.
            </p>
            <Link
              href="/profile"
              className="inline-block px-6 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              View Profile
            </Link>
          </div>

          {/* Help Center */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Help Center
            </h3>
            <p className="text-gray-300 mb-6">
              Get assistance and find resources to help you navigate the platform.
            </p>
            <Link
              href="/help"
              className="inline-block px-6 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
