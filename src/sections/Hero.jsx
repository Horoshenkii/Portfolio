import { Download } from "lucide-react";
import { DownloadButton } from "../components/DownloadButton";
import { useMemo } from "react";

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Responsive Design",

  "React",
  "Next.js",
  "React Router",
  "Hooks",
  "Custom Hooks",

  "Tailwind CSS",

  "API Integration",
  "JSON",
  "URL Params",

  "LocalStorage",

  "Git",
  "GitHub",

  "Vite",

  "UI/UX",
  "Animations",
];

const links = [
  { icon: "Github", href: "https://github.com/Horoshenkii" },
  {
    icon: "LinkedIn",
    href: "https://www.linkedin.com/in/владимир-ivaniuc-2b464b3a0",
  },
];

export const Hero = () => {
  // Dots randomizing
  const dots = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: 15 + Math.random() * 20,
      animationDelay: Math.random() * 2,
    }));
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="h-full w-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="from-background/20 to-background via-background/80 absolute inset-0 bg-linear-to-b" />
      </div>

      {/* Green Dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {dots.map((dot, i) => (
          <div
            className="absolute h-1.5 w-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "oklch(60.9% 0.126 221.723)",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `moving ${dot.animationDuration}s ease-in-out infinite`,
              animationDelay: `${dot.animationDelay}s`,
            }}
            key={i}
          />
        ))}
      </div>
      {/* Main information and links */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="glass text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                Frontend Developer • React
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="animate-fade-in animation-delay-100 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
                Building{" "}
                <span className="text-primary text-glow font-semibold">
                  performant
                </span>
                <br />
                and <span className="font-semibold">polished </span>
                web products
              </h1>
              <p className="text-slightly-muted animation-delay-200 animate-fade-in max-w-lg text-lg">
                Hi, I'm Vladimir Ivaniuc — a frontend developer specializing in
                React. I create performant, scalable web applications with clean
                code and thoughtful design.
              </p>
            </div>
            <div className="animate-fade-in animation-delay-300 flex flex-col gap-3 md:flex-row">
              <DownloadButton>
                <Download /> Download CV
              </DownloadButton>
              <div className="animate-fade-in animation-delay-400 flex items-center gap-4">
                <span className="text-slightly-muted text-sm">Follow me: </span>
                {links.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className="glass hover:bg-primary/10 hover:text-primary rounded-full p-2 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="animate-fade-in animation-delay-300 relative">
            <div className="relative mx-auto max-w-md">
              <div className="shadow-primary/10 absolute inset-0 animate-pulse rounded-3xl shadow-2xl" />
              <div className="glass glow-border relative rounded-3xl p-2">
                {/* Profile image */}
                <img
                  src="/profile-img.jpg"
                  alt="Vladimir Ivaniuc"
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="glass -r animate-floating-element absolute -right-2 -bottom-2 flex items-center gap-2 rounded-full px-3 py-1.5">
                  <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                  Open to work
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 items-center">
          <p className="text-slightly-muted mb-2 text-center font-semibold">
            Tech Stack
          </p>
          <div className="relative overflow-hidden">
            <div className="from-background absolute top-0 bottom-0 left-0 z-10 w-32 bg-linear-to-r to-transparent" />
            <div className="from-background absolute top-0 right-0 bottom-0 z-10 w-32 bg-linear-to-l to-transparent" />
            <div className="animate-running-line flex w-max">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-muted hover:text-slightly-muted text-xl">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
