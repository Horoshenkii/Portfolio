const journey = [
  {
    period: "2025 — Present",
    title: "Self-Driven Learning",
    organization: "Documentation, YouTube, and project practice",
    description:
      "Improved my frontend skills by building personal projects, studying documentation, and solving real UI and state management challenges.",
    tags: ["Projects", "Docs", "UI", "Problem Solving"],
    link: "#projects",
    textContent: "Check projects",
  },
  {
    period: "2025",
    title: "JavaScript / React",
    organization: "Udemy",
    description:
      "Completed an extended online course focused on modern JavaScript, React fundamentals, and broader web development concepts.",
    tags: ["JavaScript", "React", "Web Development"],
    link: "https://www.udemy.com/certificate/UC-b2009ec7-c227-48d8-9fa9-e8292a791207/",
    textContent: "Verify certificate",
  },
  {
    period: "2025",
    title: "Front-End Web Development",
    organization: "Step IT Academy",
    description:
      "Built a strong foundation in HTML, CSS, JavaScript, and React through structured coursework and practical assignments.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://fs3.itstep.org/api/v1/files/hHrgIx5FkIR4YiYjXavwv0YFoE-nYAb8?inline",
    textContent: "Verify certificate",
  },
];

export const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden py-32">
      {/* bg effect  */}
      <div className="bg-primary/5 absolute top-1/12 right-1/12 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-secondary/5 absolute bottom-1/12 left-1/12 h-64 w-64 rounded-full blur-3xl" />
      {/* bg effect  */}

      <div className="relative container mx-auto space-y-12 px-6">
        <div className="animate-fade-in animation-delay-100">
          <p className="text-primary text-sm">MY JOURNEY</p>
          <p className="text-primary mt-3 mb-2 text-3xl font-semibold">
            Learning through building,{" "}
            <span className="text-basic font-normal italic">
              not just theory.
            </span>
          </p>
          <p className="text-slightly-muted text-sm">
            Developing frontend skills by creating real projects, exploring
            documentation, and improving step by step.
          </p>
        </div>
        <div className="relative space-y-8">
          <div className="from-primary/70 timeline-glow via-primary/50 absolute top-0 bottom-0 left-0 w-0.5 rounded-full bg-linear-to-b to-transparent md:left-1/2" />
          {journey.map((item, idx) => (
            <div
              className={`animate-fade-in grid md:grid-cols-2`}
              style={{
                animationDelay: `${(idx + 1) * 150}ms`,
              }}
              key={idx}
            >
              <div
                className={`pl-6 md:pl-0 ${idx % 2 === 0 ? "md:col-start-2 md:pl-10" : "md:pr-10"}`}
              >
                {/* timeline dots */}
                <div className="bg-primary border-background absolute left-0 h-5 w-5 -translate-x-3/7 rounded-full border-4 md:left-1/2" />
                {/* timeline dots */}
                {/* card content */}
                <div className="glass grid gap-4 rounded-2xl p-4">
                  <h2 className="text-primary font-semibold">{item.title}</h2>
                  <p className="text-muted text-xs">{item.period}</p>
                  <p className="mt-2">{item.organization}</p>
                  <p className="text-slightly-muted text-sm">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.tags.map((tag, idx) => (
                      <span
                        className="glass text-slightly-muted hover:text-basic rounded-lg px-2 py-1 text-xs"
                        key={idx}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    target="_blank"
                    href={item.link}
                    className="bg-primary/20 hover:text-primary mt-4 rounded-lg px-4 py-1.5 text-center text-sm"
                  >
                    {item.textContent}
                  </a>
                </div>
                {/* card content */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
