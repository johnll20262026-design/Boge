import { ChevronDown } from "lucide-react";
import { personalInfo } from "../data/content";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuhan%20city%20skyline%20at%20night%20with%20Yangtze%20River%20bridge%2C%20lights%20reflection%2C%20panoramic%20view%2C%20cinematic%20photography%2C%20wide%20angle&image_size=landscape_16_9")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gold-900/50"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 opacity-0 animate-fade-in-down" style={{ animationDelay: "200ms" }}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold-300/30 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
            <span className="text-gold-200 text-sm">抖音号: {personalInfo.douyinId}</span>
          </div>
        </div>

        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 opacity-0-init animate-fade-in-up"
          style={{ animationDelay: "400ms", textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
        >
          {personalInfo.name}
          <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-gold-200 mt-2">
            （{personalInfo.nickname}）
          </span>
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8 opacity-0-init animate-fade-in" style={{ animationDelay: "600ms" }}></div>

        <p
          className="text-xl md:text-2xl text-gold-100 mb-4 font-light opacity-0-init animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          {personalInfo.title}
        </p>

        <p
          className="text-lg text-white/80 max-w-2xl mx-auto mb-12 opacity-0-init animate-fade-in-up"
          style={{ animationDelay: "1000ms" }}
        >
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0-init animate-fade-in-up" style={{ animationDelay: "1200ms" }}>
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-gold-lg"
          >
            查看精选作品
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
          >
            商务合作
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce-slow"
      >
        <ChevronDown size={36} />
      </button>
    </section>
  );
}
