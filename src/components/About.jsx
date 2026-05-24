import myImg from '../assets/img.jpg';

function About() {
  return (
    <section className="py-32 px-6 lg:px-20 relative">

      {/* SECTION TITLE */}
      <div className="text-center mb-20">

        <p className="text-sm tracking-[6px] text-gray-500 uppercase">
          About Me
        </p>

        <h2 className="text-5xl md:text-6xl font-black mt-4">
          Who I Am
        </h2>

      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* ========================= */}
        {/* LEFT IMAGE SIDE */}
        {/* ========================= */}

        <div className="relative flex justify-center">

          {/* GLOW */}
          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>

          {/* IMAGE CARD */}
          <div className="hero-image-card">

            {/* 🔴 YOUR IMAGE HERE */}
            <img
              src={myImg}
              alt="about"
            />

          </div>

        </div>

        {/* ========================= */}
        {/* RIGHT CONTENT */}
        {/* ========================= */}

        <div>

          <h3 className="text-3xl font-bold">
            Passionate Full Stack Developer
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            I specialize in building modern web applications using
            React, Node.js, Prisma, and PostgreSQL.
            My focus is on creating clean UI systems, scalable backend
            architecture, and real-world applications.
          </p>

          {/* ========================= */}
          {/* STATS CARDS */}
          {/* ========================= */}

          <div className="grid grid-cols-3 gap-5 mt-10">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl text-center">
              <h3 className="text-3xl font-black text-purple-400">3+</h3>
              <p className="text-gray-500 text-sm mt-2">Projects</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl text-center">
              <h3 className="text-3xl font-black text-pink-400">1+</h3>
              <p className="text-gray-500 text-sm mt-2">Year Learning</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl text-center">
              <h3 className="text-3xl font-black text-blue-400">Full</h3>
              <p className="text-gray-500 text-sm mt-2">Stack Dev</p>
            </div>

          </div>

          {/* ========================= */}
          {/* SKILLS TAGS */}
          {/* ========================= */}

          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "React",
              "Node.js",
              "Express",
              "Prisma",
              "PostgreSQL",
              "Tailwind",
              "JavaScript"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full hover:border-purple-500 transition"
              >
                {skill}
              </span>
            ))}

          </div>

          {/* ========================= */}
          {/* HIGHLIGHT PROJECT */}
          {/* ========================= */}

          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10">

            <p className="text-xs tracking-[4px] text-gray-500 uppercase">
              Featured Project
            </p>

            <h4 className="text-2xl font-bold mt-3">
              School Management System
            </h4>

            <p className="text-gray-400 mt-3 leading-relaxed">
              A full-stack system built with React, Node.js, Prisma,
              and PostgreSQL to manage students, classes, and school operations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;