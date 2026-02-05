import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      features: ["React/Next.js", "Full-Stack Development", "PWA Solutions", "Responsive Design"]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Development", "React Native", "App Optimization"]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      features: ["AWS/GCP/Azure", "DevOps Services", "Serverless Architecture", "Cloud Migration"]
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Machine learning and artificial intelligence solutions",
      features: ["ML Models", "Data Analytics", "Automation", "Predictive Systems"]
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Enterprise-grade security solutions",
      features: ["Cybersecurity", "Data Protection", "Compliance", "Security Audits"]
    },
    {
      icon: "⚙️",
      title: "DevOps",
      description: "Continuous integration and deployment pipelines",
      features: ["CI/CD", "Docker/Kubernetes", "Infrastructure Automation", "Monitoring"]
    }
  ];

  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose TechnoArc?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Team", description: "Highly skilled developers and architects" },
              { title: "Latest Tech", description: "Always using cutting-edge technologies" },
              { title: "Agile Approach", description: "Flexible and adaptive to your needs" },
              { title: "24/7 Support", description: "Round-the-clock customer support" },
              { title: "Quality First", description: "Rigorous testing and QA processes" },
              { title: "Scalable Solutions", description: "Grow with our infrastructure" },
              { title: "Cost Effective", description: "Transparent pricing models" },
              { title: "Security Focus", description: "Enterprise security standards" }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business grow with innovative technology solutions
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 text-lg"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>
    </>
  );
}
