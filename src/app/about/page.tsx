import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - TechnoArc",
  description: "Learn about TechnoArc's mission, vision, and team of expert developers",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900 min-h-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About TechnoArc</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We are a team of passionate technology innovators dedicated to building solutions that transform businesses and improve lives.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl border border-purple-500/30">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses worldwide by delivering innovative, scalable, and cost-effective technology solutions that drive growth, streamline operations, and create lasting competitive advantages in the digital economy.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-pink-900/50 to-slate-900/50 rounded-xl border border-pink-500/30">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become a globally recognized leader in technology innovation, known for our exceptional expertise, unwavering commitment to quality, and ability to transform complex challenges into elegant digital solutions that shape the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "We continuously push boundaries and explore new technologies to deliver cutting-edge solutions."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "We work closely with our clients to understand their needs and deliver solutions that exceed expectations."
              },
              {
                icon: "✅",
                title: "Quality",
                description: "Excellence is non-negotiable. We maintain the highest standards in every project we undertake."
              },
              {
                icon: "🌱",
                title: "Growth",
                description: "We invest in continuous learning and development to stay ahead of industry trends."
              },
              {
                icon: "🔒",
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical practices in all our business dealings."
              },
              {
                icon: "🌟",
                title: "Excellence",
                description: "We strive for perfection in every aspect of our work and client interactions."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-purple-900/40 to-slate-900/40 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Raj Kumar", role: "CEO & Founder", emoji: "👨‍💼" },
              { name: "Priya Singh", role: "CTO", emoji: "👩‍💻" },
              { name: "Amit Patel", role: "Lead Developer", emoji: "👨‍🔧" },
              { name: "Neha Sharma", role: "Design Lead", emoji: "👩‍🎨" },
              { name: "Vikram Reddy", role: "DevOps Engineer", emoji: "👨‍🏭" },
              { name: "Sarah Morgan", role: "Product Manager", emoji: "👩‍💼" },
              { name: "James Wilson", role: "Backend Developer", emoji: "👨‍💻" },
              { name: "Lisa Chen", role: "QA Lead", emoji: "👩‍🔬" }
            ].map((member, index) => (
              <div
                key={index}
                className="p-6 text-center bg-gradient-to-br from-purple-900/30 to-slate-900/30 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all group"
              >
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "30+", label: "Happy Clients" },
              { number: "10+", label: "Years in Business" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
