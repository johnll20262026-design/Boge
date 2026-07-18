import { Wrench } from "lucide-react";

export default function TechSupport() {
  return (
    <a
      href="https://ai-tools-guide-ar8.pages.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="技术支持"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-400 rounded-xl blur opacity-60 group-hover:opacity-100 animate-shimmer"></div>
        <div className="relative flex items-center gap-2 bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:via-amber-400 hover:to-gold-500 text-white px-5 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 group-hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <Wrench size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative z-10 text-sm font-medium">技术支持</span>
        </div>
      </div>
    </a>
  );
}
