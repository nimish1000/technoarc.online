import { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services - TechnoArc",
  description: "Explore our comprehensive range of technology and software development services",
};

export default function Services() {
  const serviceDetails = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with latest technologies",
      features: [
        "React & Next.js Development",
        "Full-Stack Solutions",
        "Progressive Web Apps (PWA)",
        "Responsive Design",
        "E-commerce Platforms",
        "Web Performance Optimization"
      ]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "iOS App Development",
        "Android App Development",
        "React Native Solutions",
        "App UI/UX Design",
        "App Store Optimization",
        "Maintenance & Support"
      ]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
      features: [
        "AWS Services",
        "Google Cloud Platform",
        "Microsoft Azure",
        "DevOps Implementation",
        "Serverless Architecture",
        "Cloud Migration Services"
      ]
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Machine learning and artificial intelligence integration solutions",
      features: [
        "Machine Learning Models",
        "Data Analytics & Insights",
        "Process Automation",
        "Predictive Systems",
        "Natural Language Processing",
        "Computer Vision Solutions"
      ]
    },
    {
      icon: "🔒",
      title: "Security Solutions",
      description: "Enterprise-grade security and compliance solutions",
      features: [
        "Cybersecurity Consulting",
        "Data Protection",
        "Compliance Management",
        "Security Audits",
        "Penetration Testing",
        "Incident Response"
      ]
    },
    {
      icon: "⚙️",
      title: "DevOps & Infrastructure",
      description: "Continuous integration and deployment pipelines",
      features: [
        "CI/CD Implementation",
        "Docker & Kubernetes",
        "Infrastructure Automation",
        "Monitoring & Logging",
        "Container Orchestration",
        "Infrastructure as Code"
      ]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface and experience design",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Design Systems",
        "Usability Testing"
      ]
    },
    {
      icon: "🧪",
      title: "QA & Testing",
      description: "Comprehensive quality assurance and testing services",
      features: [
        "Manual Testing",
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "User Acceptance Testing",
        "Test Automation Frameworks"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900 min-h-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive technology solutions designed to transform your business and accelerate growth in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Why Our Services Stand Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Expert Team",
                description: "Our team consists of certified professionals with extensive industry experience and proven track records."
              },
              {
                title: "Agile Methodology",
                description: "We follow agile practices to ensure flexibility, faster delivery, and continuous improvement throughout the project."
              },
              {
                title: "Latest Technologies",
                description: "We stay updated with cutting-edge technologies and best practices to deliver modern, efficient solutions."
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and QA processes ensure your solution is bug-free and performs optimally."
              },
              {
                title: "24/7 Support",
                description: "Our dedicated support team is available round-the-clock to address any issues and provide assistance."
              },
              {
                title: "Transparent Communication",
                description: "Regular updates, clear documentation, and open communication keep you informed every step of the way."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss which services best fit your project needs and goals.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 text-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
