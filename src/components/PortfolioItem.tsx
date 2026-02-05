interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

export default function PortfolioItem({ image, title, category, description }: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
      {/* Image placeholder with gradient */}
      <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-6xl overflow-hidden relative">
        {image}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-purple-300 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>

        {/* Hover effect button */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}
