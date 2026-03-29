import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce application with product filtering, search, and shopping cart functionality. Focused on clean UI and state management.",
    image: "/projects/e-commerce.png",
    tags: ["React", "React Query", "Context API", "Tailwind"],
    link: "https://e-commerce-swart-five-60.vercel.app/",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills. Includes animated UI, responsive layout, and modern design with Tailwind CSS.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind", "Vite"],
    link: "#",
    github: "https://github.com/Horoshenkii/Portfolio",
  },
  {
    title: "Next.js Learning Project",
    description:
      "Practice project built to explore Next.js features such as App Router, server/client rendering, API data fetching, and loading/error states.",
    image: "/projects/blog.png",
    tags: ["Next.js", "App Router", "SSR", "API"],
    link: "#",
    github: "https://github.com/Horoshenkii/E-commerce",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-32">
      <div className="bg-primary/15 absolute top-1/12 left-1/12 h-96 w-96 rounded-full shadow-2xl blur-3xl" />
      <div className="bg-secondary/15 absolute right-1/12 bottom-1/12 h-96 w-96 rounded-full blur-3xl" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-secondary animate-fade-in font-medium tracking-wider">
            My Work
          </span>
          <h2 className="text-secondary animate-fade-in animation-delay-100 mt-4 mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Projects that reflect
            <span className="text-basic font-serif font-normal italic">
              {" "}
              my growth
            </span>
          </h2>
          <p className="text-slightly-muted animate-fade-in animation-delay-200">
            A selection of my recent work, focused on building clean interfaces,
            improving user experience, and learning modern web technologies.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass animate-fade-in md overflow-hidden rounded-2xl"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/hero-bg.jpg"
                  loading="lazy"
                  alt={project.title}
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="transition-300 absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    target="_blank"
                    href={project.link}
                    className="glass hover:bg-primary hover:text-surface rounded-full p-3 transition-all"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a
                    target="_blank"
                    href={project.github}
                    className="glass hover:bg-primary hover:text-surface rounded-full p-3 transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex justify-between">
                  <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-slightly-muted group-hover:text-primary h-5 w-5 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-slightly-muted text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      className="bg-surface border-border text-muted hover:border-primary/50 hover:text-primary rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-300"
                      key={tagIdx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
