interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-purple-300 flex items-center gap-2">
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
