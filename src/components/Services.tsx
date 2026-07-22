import { Mic2, Store, Video, Star, UtensilsCrossed } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { services, Service } from "../data/content";

const iconMap: Record<Service["icon"], React.ReactNode> = {
  Mic2: <Mic2 size={28} />,
  UtensilsCrossed: <UtensilsCrossed size={28} />,
  Store: <Store size={28} />,
  Video: <Video size={28} />,
  Star: <Star size={28} />,
};

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
        >
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-gold-600 font-medium text-sm tracking-wider uppercase">
              Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              服务<span className="text-gradient-gold">内容</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              依托数十年媒体经验与本地影响力，为武汉本地商家提供全方位品牌推广服务
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 border border-gold-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                  {iconMap[service.icon]}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <span className="text-gold-600 text-sm font-medium group-hover:underline cursor-pointer inline-flex items-center gap-1">
                    了解更多
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
