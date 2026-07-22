import { Quote, MapPin, Calendar, Award } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { personalInfo } from "../data/content";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-cream-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
        >
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              关于<span className="text-gradient-gold">Happy波</span>
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-gold-lg border-4 border-gold-200 bg-gradient-to-br from-gold-900 to-gold-700">
                <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-800/80 to-gold-900/90"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-28 h-28 bg-gold-400 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-gold-300">
                      <span className="text-gold-900 font-serif text-5xl font-bold">波</span>
                    </div>
                    <h3 className="font-serif text-3xl text-white font-bold mb-2">车站路波波</h3>
                    <p className="text-gold-200 text-lg mb-6">Happy波</p>
                    <div className="flex items-center gap-3 text-gold-100 text-sm">
                      <span className="px-3 py-1 bg-gold-700/60 rounded-full">电台主持</span>
                      <span className="px-3 py-1 bg-gold-700/60 rounded-full">美食探店</span>
                      <span className="px-3 py-1 bg-gold-700/60 rounded-full">武汉演员</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-2xl shadow-gold">
                <div className="text-2xl font-bold font-serif">资深</div>
                <div className="text-gold-100 text-sm">媒体人</div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-gold-300 rounded-2xl -z-10"></div>
            </div>

            <div>
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-2 text-gold-200" size={48} />
                <p className="text-lg text-gray-700 leading-relaxed pl-8 text-gray-600">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="flex items-center gap-4 mb-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold-600" size={20} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="w-px h-5 bg-gold-200"></div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-gold-600" size={20} />
                  <span>深耕媒体数十年</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Award className="text-gold-600" size={24} />
                  个人标签
                </h3>
                <div className="grid gap-3">
                  {personalInfo.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gold-100"
                    >
                      <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center text-gold-700 font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
