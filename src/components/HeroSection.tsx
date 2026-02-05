'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                We build innovative technology solutions that empower businesses to grow, innovate, and succeed in the digital world.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-purple-700">
              <div>
                <p className="text-3xl font-bold text-purple-400">50+</p>
                <p className="text-gray-400">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">30+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">10+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative w-full max-w-sm">
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-white text-xl font-semibold">Innovation & Excellence</p>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute bottom-8 left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
