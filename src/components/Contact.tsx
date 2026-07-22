import { useState } from "react";
import { Phone, MapPin, MessageCircle, Check } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { personalInfo } from "../data/content";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-cream-50 relative">
      {copiedText && (
        <div className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 bg-gold-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-gold-lg flex items-center gap-2 animate-fade-in-down text-sm sm:text-base">
          <Check size={18} />
          <span className="font-medium">{copiedText}已复制！</span>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
        >
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-gold-600 font-medium text-sm tracking-wider uppercase">
              Contact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              联系<span className="text-gradient-gold">Happy波</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              如果您是武汉本地商家，希望通过Happy波的影响力推广品牌，欢迎直接联系
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-gold rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-gold-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 text-center">
                  让我们一起讲好<span className="text-gold-200">武汉故事</span>
                </h3>
                <p className="text-white/80 text-center mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2">
                  无论是新店开业、品牌推广、活动主持，还是美食探店，Happy波都能用专业的媒体素养和本地影响力，为您的品牌赋能。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div
                    onClick={() => copyToClipboard(personalInfo.phone, "手机号")}
                    className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:bg-white/20 transition-all cursor-pointer group"
                  >
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Phone size={22} className="text-white" />
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm mb-1">联系电话</div>
                    <div className="text-white text-lg sm:text-xl font-bold">{personalInfo.phone}</div>
                    <div className="text-gold-200 text-xs mt-2">点击复制</div>
                  </div>

                  <div
                    onClick={() => copyToClipboard(personalInfo.wechatId, "微信号")}
                    className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:bg-white/20 transition-all cursor-pointer group"
                  >
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle size={22} className="text-white" />
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm mb-1">微信昵称</div>
                    <div className="text-white text-lg sm:text-xl font-bold">{personalInfo.wechatNickname}</div>
                    <div className="text-gold-200 text-xs mt-1">微信号：{personalInfo.wechatId}</div>
                    <div className="text-gold-200 text-xs">点击复制微信号</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center sm:col-span-2 md:col-span-1">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm mb-1">所在地区</div>
                    <div className="text-white text-lg sm:text-xl font-bold">{personalInfo.location}</div>
                    <div className="text-gold-200 text-xs mt-2">抖音：{personalInfo.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
