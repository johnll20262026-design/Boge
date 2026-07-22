import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "首页", href: "#home", external: false },
  { label: "关于Happy波", href: "#about", external: false },
  { label: "精选作品", href: "#works", external: false },
  { label: "服务内容", href: "#services", external: false },
  { label: "联系合作", href: "#contact", external: false },
  { label: "技术支持", href: "https://ai-tools-guide-ar8.pages.dev/", external: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, external: boolean) => {
    setIsMobileMenuOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home", false);
          }}
          className={`font-serif font-bold text-2xl transition-colors duration-300 ${
            isScrolled ? "text-gold-800" : "text-white"
          }`}
        >
          Happy波
        </a>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href, link.external);
              }}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`text-sm font-medium transition-all duration-300 hover:scale-105 inline-flex items-center ${
                isScrolled
                  ? "text-gray-700 hover:text-gold-600"
                  : "text-white/90 hover:text-gold-300"
              } ${link.external ? "text-gold-600" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? "text-gold-800" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-50 shadow-xl mt-2 mx-4 rounded-xl overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href, link.external);
              }}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-gold-50 hover:text-gold-700 transition-colors border-b border-gold-100 last:border-0"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
