import profile from '../assets/profile.png';

function Hero() {
  return (
    <section className="hero-section">

      {/* ========================= */}
      {/* LEFT CONTENT */}
      {/* ========================= */}

      <div className="hero-container">

        {/* TEXT SIDE */}
        <div>

          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <p className="text-xs tracking-[3px] uppercase text-gray-300">
              Available for Work
            </p>
          </div>

          {/* TITLE */}
          <h1 className="hero-title">
            Full
            <span className="block gradient-text">
              Stack
            </span>
            Developer
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description">
            I build modern web applications using React, Node.js,
            Prisma, and PostgreSQL. Focused on clean UI, scalable
            backend systems, and high-performance digital products.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Download CV
            </button>

          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-black text-purple-400">3+</h3>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-pink-400">React</h3>
              <p className="text-gray-500 text-sm">Frontend</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-blue-400">Node</h3>
              <p className="text-gray-500 text-sm">Backend</p>
            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* RIGHT IMAGE SECTION */}
        {/* ========================= */}

        <div className="hero-image-wrapper">

          {/* OUTER GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

          {/* ROTATING BORDER EFFECT */}
          <div className="absolute w-[420px] h-[420px] border border-white/10 rounded-full animate-spin [animation-duration:20s]"></div>

          <div className="absolute w-[520px] h-[520px] border border-blue-500/10 rounded-full animate-spin [animation-duration:30s]"></div>

          {/* ========================= */}
          {/* IMAGE CARD (UPLOAD PLACE) */}
          {/* ========================= */}

          <div className="hero-image-card">

            {/* 🔴 YOUR IMAGE GOES HERE */}
            <img
              src={profile}
              alt="Your Profile"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* FLOATING INFO CARD */}
            <div className="absolute bottom-5 left-5 right-5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4">

              <p className="text-xs text-gray-400 tracking-[3px] uppercase">
                Current Focus
              </p>

              <h3 className="text-lg font-bold mt-2">
                School Management System
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                React • Node • Prisma • PostgreSQL
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;