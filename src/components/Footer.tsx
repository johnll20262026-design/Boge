import { Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gold-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            {personalInfo.name}
            <span className="text-gold-300">（{personalInfo.nickname}）</span>
          </h3>
          <p className="text-gold-200 mb-4 sm:mb-6 text-sm sm:text-base px-2">{personalInfo.title}</p>
          <p className="text-gold-300/70 text-xs sm:text-sm max-w-lg mx-auto mb-6 sm:mb-8 px-2">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gold-200 hover:text-white transition-colors cursor-pointer py-1"
            >
              首页
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gold-200 hover:text-white transition-colors cursor-pointer py-1"
            >
              关于Happy波
            </a>
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gold-200 hover:text-white transition-colors cursor-pointer py-1"
            >
              精选作品
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gold-200 hover:text-white transition-colors cursor-pointer py-1"
            >
              服务内容
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gold-200 hover:text-white transition-colors cursor-pointer py-1"
            >
              联系合作
            </a>
            <a
              href="https://ai-tools-guide-ar8.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-200 hover:text-white transition-colors py-1"
            >
              技术支持
            </a>
          </div>

          <div className="border-t border-gold-800 pt-6 sm:pt-8">
            <p className="text-gold-400/60 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
              © {new Date().getFullYear()} {personalInfo.name}（{personalInfo.nickname}）
              <span className="mx-1 hidden sm:inline">·</span>
              用
              <Heart size={12} className="text-rose-400 mx-1" fill="currentColor" />
              讲述武汉故事
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 sm:bottom-8 left-4 sm:left-8 w-10 sm:w-12 h-10 sm:h-12 bg-gold-600 hover:bg-gold-500 text-white rounded-full shadow-gold flex items-center justify-center transition-all hover:scale-110 hover:shadow-gold-lg z-40"
        aria-label="回到顶部"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
