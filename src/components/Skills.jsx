const skills = [
  { name: "React", level: "90%" },
  { name: "Node.js", level: "85%" },
  { name: "Express", level: "80%" },
  { name: "Prisma", level: "75%" },
  { name: "PostgreSQL", level: "70%" },
  { name: "Tailwind CSS", level: "90%" },
  { name: "JavaScript", level: "95%" },
];

function Skills() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center justify-center">

      {/* TITLE */}
      <div className="text-center max-w-2xl mb-16">

        <p className="text-xs tracking-[6px] text-gray-500 uppercase">
          My Skills
        </p>

        <h2 className="text-5xl font-black mt-4">
          Technical Expertise
        </h2>

        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
          Technologies I use to build scalable full-stack applications.
        </p>

      </div>

      {/* SKILLS GRID */}
      <div className="w-full max-w-4xl grid gap-6">

        {skills.map((skill) => (

          <div
            key={skill.name}
            className="
            group
            relative
            p-6
            rounded-2xl
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            hover:border-purple-500
            transition
            overflow-hidden"
          >

            {/* GLOW EFFECT */}
            <div className="
            absolute inset-0
            bg-gradient-to-r
            from-purple-500/10
            to-blue-500/10
            opacity-0 group-hover:opacity-100
            transition">
            </div>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* HEADER */}
              <div className="flex justify-between mb-3">

                <span className="font-semibold">
                  {skill.name}
                </span>

                <span className="text-sm text-gray-400">
                  {skill.level}
                </span>

              </div>

              {/* PROGRESS BAR BACKGROUND */}
              <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">

                {/* PROGRESS */}
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-700"
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;