import { Metadata } from "next";
import PortfolioItem from "@/components/PortfolioItem";

export const metadata: Metadata = {
  title: "Portfolio - TechnoArc",
  description: "View our latest projects and successful client case studies",
};

export default function Portfolio() {
  const projects = [
    {
      image: "🏢",
      title: "Enterprise SaaS Platform",
      category: "Web Development",
      description: "A comprehensive SaaS platform for business management with real-time analytics"
    },
    {
      image: "🛒",
      title: "E-commerce Platform",
      category: "Full Stack",
      description: "High-performance e-commerce solution with AI-powered recommendations"
    },
    {
      image: "📱",
      title: "Fitness Mobile App",
      category: "Mobile Development",
      description: "Cross-platform fitness app with real-time tracking and social features"
    },
    {
      image: "☁️",
      title: "Cloud Migration",
      category: "Cloud Services",
      description: "Successful migration of legacy systems to AWS with zero downtime"
    },
    {
      image: "💰",
      title: "Fintech Application",
      category: "Web Development",
      description: "Secure fintech platform with blockchain integration and multi-currency support"
    },
    {
      image: "🤖",
      title: "AI Analytics Platform",
      category: "AI/ML",
      description: "Advanced analytics platform powered by machine learning algorithms"
    },
    {
      image: "🎓",
      title: "EdTech Platform",
      category: "Web Development",
      description: "Interactive online learning platform with video streaming and gamification"
    },
    {
      image: "🏥",
      title: "Healthcare Management System",
      category: "Full Stack",
      description: "HIPAA-compliant healthcare management system with patient portal"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900 min-h-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Showcase of our successful projects and the innovative solutions we've built for clients across various industries.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <PortfolioItem key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Featured Case Studies
          </h2>

          <div className="space-y-12">
            {[
              {
                title: "Enterprise SaaS Platform",
                industry: "B2B SaaS",
                challenge: "Client needed a scalable platform to manage enterprise operations",
                solution: "Built a cloud-native SaaS platform using Next.js and AWS",
                results: "40% increase in operational efficiency, 10,000+ active users"
              },
              {
                title: "E-commerce Transformation",
                industry: "Retail",
                challenge: "Legacy system couldn't handle peak traffic during sales",
                solution: "Migrated to modern tech stack with serverless architecture",
                results: "300% improvement in page load time, 50% cost reduction"
              },
              {
                title: "Mobile App Launch",
                industry: "Fitness",
                challenge: "Need to reach users on both iOS and Android platforms quickly",
                solution: "Developed React Native app with real-time sync capabilities",
                results: "100,000+ downloads, 4.8 star rating on app stores"
              }
            ].map((study, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-purple-900/40 to-slate-900/40 rounded-xl border border-purple-500/30"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-purple-300 text-sm mb-4">{study.industry}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 flex flex-col justify-center">
                    <h4 className="text-white font-semibold mb-4">Results</h4>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {study.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Your Success Story
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your project vision to life? Let's discuss how we can help.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 text-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}
