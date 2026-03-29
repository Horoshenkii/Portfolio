import { Sprout, SquareTerminal, Zap, ServerCrash } from "lucide-react";

const highLights = [
  {
    icon: SquareTerminal,
    title: "Clean Code",
    description:
      "Writing simple, readable code with focus on clarity and maintainability.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Always looking for ways to optimize UI and improve user experience.",
  },
  {
    icon: ServerCrash,
    title: "Problem Solving",
    description:
      "Enjoy finding practical and efficient solutions to real problems.",
  },
  {
    icon: Sprout,
    title: "Growth",
    description: "Continuously learning and improving through real projects.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-3">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary/85 text-sm font-semibold tracking-wider">
                ABOUT ME
              </span>
            </div>
            <h2 className="animate-fade-in animation-delay-100 text-secondary/85 text-4xl leading-tight font-bold md:text-5xl">
              Thinking through problems.
              <span className="text-basic font-serif font-normal italic">
                {" "}
                Not just writing code.
              </span>
            </h2>
            <div className="text-muted animate-fade-in space-y-4 delay-200">
              <p>
                I'm a frontend developer focused on building clean and
                responsive web applications. I started with curiosity about how
                things work in the browser, and over time it grew into a solid
                foundation in React and modern frontend tools.
              </p>

              <p>
                I pay close attention to code readability, structure, and
                performance. I enjoy refining my projects, improving existing
                solutions, and understanding how to make things work better
                rather than just making them work.
              </p>

              <p>
                Currently, I'm looking for opportunities to gain real-world
                experience, contribute to meaningful projects, and continue
                growing as a developer step by step.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highLights.map((item, idx) => (
              <div className="bg-surface space-y-2 rounded-xl p-4" key={idx}>
                <div
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    animationDelay: `${(idx + 1) * 100}ms`,
                  }}
                >
                  <item.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-slightly-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
