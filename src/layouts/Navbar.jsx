import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledEnough(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 ${isScrolledEnough ? `glass-strong` : `bg-transparent`} pt-4 transition-all duration-800 md:py-4`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          className="hover:text-primary text-xl font-bold tracking-tight"
        >
          VI<span className="text-primary">.</span>
        </a>

        {/* desktop navigation: */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className="text-slightly-muted hover:text-basic hover:bg-surface rounded-full px-4 py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="glass hidden rounded-full px-5 py-2 md:block">
          <a
            className="hover:text-primary text-slightly-muted font-semibold"
            href="tel:+37367753508"
          >
            +373 67 753 508
          </a>
        </div>

        {/* Mobile menu button */}

        <button
          className="p-2 hover:cursor-pointer md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu: */}

      {isMobileMenuOpen && (
        <div className="glass-strong animate-fade-in md:hidden">
          <div className="container mx-auto flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slightly-muted hover:text-basic py-2 text-lg"
              >
                {link.label}
              </a>
            ))}

            <div className="glass rounded-full px-5 py-2 text-center">
              <a
                className="hover:text-primary text-slightly-muted font-semibold"
                href="tel:+37367753508"
              >
                +373 67 753 508
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
