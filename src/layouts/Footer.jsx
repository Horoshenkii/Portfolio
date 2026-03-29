const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

const socialLinks = [
  { icon: "Github", href: "https://github.com/Horoshenkii" },
  {
    icon: "Linkedin",
    href: "https://www.linkedin.com/in/владимир-ivaniuc-2b464b3a0",
  },
];

export const Footer = () => {
  return (
    <footer className="glass">
      <div className="container mx-auto grid justify-center gap-12 px-6 py-16 md:grid-cols-3 md:justify-between md:gap-0 md:py-8">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <a
            href="#"
            className="hover:text-primary text-xl font-bold tracking-tight"
          >
            VI<span className="text-primary">.</span>
          </a>
          <p className="text-slightly-muted text-center text-sm md:text-start">
            © 2026 Vladimir Ivaniuc. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-slightly-muted hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 md:justify-end">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              target="_blank"
              href={link.href}
              className="hover:text-primary glass-strong hover:bg-primary/20 rounded-full p-2.5 duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
