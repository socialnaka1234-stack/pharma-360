'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Pharma 360</div>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link href="/signup" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Pharma 360</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your direct connection platform for pharmaceutical careers and professional networking
        </p>
        <div className="space-x-4">
          <Link href="/jobs" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
            Explore Jobs
          </Link>
          <Link href="/professionals" className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700">
            Find Professionals
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 text-4xl">💼</div>
              <h3 className="text-xl font-bold mb-2">Job Marketplace</h3>
              <p className="text-gray-600">Find and post pharmaceutical jobs</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🤝</div>
              <h3 className="text-xl font-bold mb-2">Professional Network</h3>
              <p className="text-gray-600">Connect with industry professionals</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">📱</div>
              <h3 className="text-xl font-bold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">Access on any device</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
