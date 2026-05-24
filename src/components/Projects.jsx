import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "School Management System",
    desc: "Full-stack platform for managing students, teachers and exams.",
    tech: ["React", "Node", "Prisma"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "E-Commerce UI",
    desc: "Modern UI with product filtering and cart system.",
    tech: ["React", "Tailwind"],
    category: "frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "REST API System",
    desc: "Backend API with authentication and database design.",
    tech: ["Node", "Express", "PostgreSQL"],
    category: "backend",
    github: "#",
    demo: "#",
  },
];

function Projects() {

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);

  return (

    <section className="
    relative
    py-32
    px-6
    flex
    flex-col
    items-center
    justify-center">

      {/* ========================= */}
      {/* TITLE (CENTERED) */}
      {/* ========================= */}

      <div className="text-center mb-14 max-w-2xl">

        <p className="text-xs tracking-[6px] text-gray-500 uppercase">
          My Work
        </p>

        <h2 className="text-5xl font-black mt-4">
          Projects
        </h2>

        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
          A collection of full-stack and frontend projects built with modern technologies.
        </p>

      </div>

      {/* ========================= */}
      {/* FILTERS (CENTERED) */}
      {/* ========================= */}

      <div className="flex flex-wrap justify-center gap-4 mb-16">

        {["all", "frontend", "backend", "fullstack"].map((cat) => (

          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              px-6 py-2 rounded-full text-sm
              border transition duration-300
              ${
                filter === cat
                  ? "bg-purple-500 border-purple-500 text-white"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-purple-500"
              }
            `}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* ========================= */}
      {/* GRID (PERFECT CENTER) */}
      {/* ========================= */}

      <div className="
      w-full
      max-w-6xl
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-10
      place-items-center">

        {filtered.map((project) => (

          <div
            key={project.id}
            className="
            group
            relative
            w-full
            max-w-sm
            p-6
            rounded-3xl
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            transition-all duration-500
            hover:scale-[1.04]
            hover:-translate-y-2
            hover:border-purple-500
            overflow-hidden"
          >

            {/* GLOW */}
            <div className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition
            bg-gradient-to-r
            from-purple-500/10
            to-blue-500/10">
            </div>

            {/* CONTENT */}
            <div className="relative z-10 text-center">

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">

                {project.tech.map((t) => (

                  <span
                    key={t}
                    className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-white/5
                    border border-white/10"
                  >
                    {t}
                  </span>

                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex justify-center gap-4 mt-6">

                <a
                  href={project.github}
                  className="
                  px-4 py-2 text-sm
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="
                  px-4 py-2 text-sm
                  rounded-full
                  bg-purple-500
                  hover:bg-purple-600
                  transition"
                >
                  Live
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;