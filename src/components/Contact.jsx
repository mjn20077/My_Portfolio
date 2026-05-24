function Contact() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center justify-center">

      {/* ========================= */}
      {/* TITLE */}
      {/* ========================= */}

      <div className="text-center max-w-2xl mb-16">

        <p className="text-xs tracking-[6px] text-gray-500 uppercase">
          Contact
        </p>

        <h2 className="text-5xl font-black mt-4">
          Let’s Build Something
        </h2>

        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
          Have an idea, project, or opportunity? Send a message and I’ll respond quickly.
        </p>

      </div>

      {/* ========================= */}
      {/* MAIN CARD */}
      {/* ========================= */}

      <div className="
      w-full max-w-6xl
      grid lg:grid-cols-2
      gap-10
      bg-white/5
      border border-white/10
      backdrop-blur-2xl
      rounded-3xl
      p-10
      relative
      overflow-hidden">

        {/* ========================= */}
        {/* BACKGROUND GLOW (LOCAL ONLY) */}
        {/* ========================= */}

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>

        {/* ========================= */}
        {/* LEFT SIDE - FORM */}
        {/* ========================= */}

        <div className="relative z-10">

          <h3 className="text-2xl font-bold mb-6">
            Send Message
          </h3>

          <div className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="
              p-4
              rounded-xl
              bg-black/40
              border border-white/10
              outline-none
              focus:border-purple-500
              transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
              p-4
              rounded-xl
              bg-black/40
              border border-white/10
              outline-none
              focus:border-purple-500
              transition"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="
              p-4
              rounded-xl
              bg-black/40
              border border-white/10
              outline-none
              focus:border-purple-500
              transition resize-none"
            />

            <button className="
            py-4
            rounded-xl
            bg-purple-500
            font-semibold
            hover:bg-purple-600
            hover:scale-[1.02]
            transition">
              Send Message
            </button>

          </div>

        </div>

        {/* ========================= */}
        {/* RIGHT SIDE - INFO */}
        {/* ========================= */}

        <div className="relative z-10 flex flex-col justify-between">

          {/* INFO BOX */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
                📧 Email: yourmail@example.com
              </div>

              <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
                📍 Location: Rwanda
              </div>

              <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
                ⚡ Status: Available for Freelance
              </div>

            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10">

            <h4 className="text-sm tracking-[4px] text-gray-500 uppercase mb-4">
              Connect
            </h4>

            <div className="flex gap-4 flex-wrap">

              <a href="#"
                className="
                px-4 py-2
                rounded-full
                bg-white/10
                border border-white/10
                hover:border-purple-500
                transition">
                GitHub
              </a>

              <a href="#"
                className="
                px-4 py-2
                rounded-full
                bg-white/10
                border border-white/10
                hover:border-blue-500
                transition">
                LinkedIn
              </a>

              <a href="#"
                className="
                px-4 py-2
                rounded-full
                bg-white/10
                border border-white/10
                hover:border-pink-500
                transition">
                Email
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;