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
    <section id="contact" className="py-24 bg-cream-50 relative">
      {copiedText && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gold-600 text-white px-6 py-3 rounded-full shadow-gold-lg flex items-center gap-2 animate-fade-in-down">
          <Check size={20} />
          <span className="font-medium">{copiedText}已复制！</span>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
        >
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium text-sm tracking-wider uppercase">
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              联系<span className="text-gradient-gold">Happy波</span>
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              如果您是武汉本地商家，希望通过Happy波的影响力推广品牌，欢迎直接联系
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-gold rounded-3xl p-8 md:p-12 shadow-gold-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 text-center">
                  让我们一起讲好<span className="text-gold-200">武汉故事</span>
                </h3>
                <p className="text-white/80 text-center mb-10 max-w-xl mx-auto leading-relaxed">
                  无论是新店开业、品牌推广、活动主持，还是美食探店，Happy波都能用专业的媒体素养和本地影响力，为您的品牌赋能。
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div
                    onClick={() => copyToClipboard(personalInfo.phone, "手机号")}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Phone size={26} className="text-white" />
                    </div>
                    <div className="text-white/60 text-sm mb-1">联系电话</div>
                    <div className="text-white text-xl font-bold">{personalInfo.phone}</div>
                    <div className="text-gold-200 text-xs mt-2">点击复制</div>
                  </div>

                  <div
                    onClick={() => copyToClipboard(personalInfo.wechatId, "微信号")}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle size={26} className="text-white" />
                    </div>
                    <div className="text-white/60 text-sm mb-1">微信昵称</div>
                    <div className="text-white text-xl font-bold">{personalInfo.wechatNickname}</div>
                    <div className="text-gold-200 text-xs mt-1">微信号：{personalInfo.wechatId}</div>
                    <div className="text-gold-200 text-xs">点击复制微信号</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin size={26} className="text-white" />
                    </div>
                    <div className="text-white/60 text-sm mb-1">所在地区</div>
                    <div className="text-white text-xl font-bold">{personalInfo.location}</div>
                    <div className="text-gold-200 text-xs mt-2">抖音：车站路波波</div>
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
