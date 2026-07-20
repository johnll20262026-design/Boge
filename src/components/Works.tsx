import { useState } from "react";
import { Play, Heart, ExternalLink, Loader2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { works, Work } from "../data/content";

const categories = ["全部", "美食探店"] as const;

export default function Works() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>("全部");
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const filteredWorks =
    activeCategory === "全部"
      ? works
      : works.filter((w) => w.category === activeCategory);

  const getCategoryColor = (category: Work["category"]) => {
    switch (category) {
      case "心灵鸡汤":
        return "bg-amber-100 text-amber-700";
      case "武汉故事":
        return "bg-rose-100 text-rose-700";
      case "美食探店":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleImageLoad = (workId: number) => {
    setLoadedImages((prev) => new Set(prev).add(workId));
    setImageErrors((prev) => {
      const next = new Set(prev);
      next.delete(workId);
      return next;
    });
  };

  const handleImageError = (workId: number) => {
    setImageErrors((prev) => new Set(prev).add(workId));
  };

  return (
    <section id="works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
        >
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium text-sm tracking-wider uppercase">
              Featured Works
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              精选<span className="text-gradient-gold">作品</span>
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              波哥用镜头记录武汉的烟火人间，用声音温暖每一个清晨，用真诚讲述这座城市的故事
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gold-500 text-white shadow-gold"
                      : "bg-gray-100 text-gray-600 hover:bg-gold-50 hover:text-gold-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredWorks.map((work, index) => {
              const CardWrapper = work.link ? "a" : "div";
              const cardProps = work.link
                ? { href: work.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              const hasError = imageErrors.has(work.id);
              const isLoaded = loadedImages.has(work.id);
              return (
              <CardWrapper
                key={work.id}
                {...cardProps}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2 block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gold-100 to-gold-200">
                  {!isLoaded && !hasError && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="flex flex-col items-center gap-2 text-gold-600">
                        <Loader2 size={32} className="animate-spin" />
                        <span className="text-sm">美食图片加载中...</span>
                      </div>
                    </div>
                  )}
                  {hasError ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gold-50 to-amber-100">
                      <div className="text-gold-700 text-center px-6">
                        <div className="text-4xl mb-2">🍜</div>
                        <div className="font-serif text-xl font-bold">{work.title}</div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={work.image}
                      alt={work.title}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(work.id)}
                      onError={() => handleImageError(work.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="text-gold-600 ml-1" size={28} fill="currentColor" />
                    </div>
                  </div>
                  {work.link && !hasError && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                        <ExternalLink className="text-gold-600" size={14} />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        work.category
                      )}`}
                    >
                      {work.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors flex items-center gap-2">
                    {work.title}
                    {work.link && <ExternalLink size={14} className="text-gold-500" />}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {work.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Heart size={16} className="text-rose-400" />
                      热门推荐
                    </span>
                    <span className="text-gold-600 font-medium group-hover:underline cursor-pointer inline-flex items-center gap-1">
                      {work.link ? "观看视频" : "查看详情"} {work.link ? <ExternalLink size={12} /> : "→"}
                    </span>
                  </div>
                </div>
              </CardWrapper>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
