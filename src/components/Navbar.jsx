import { useEffect, useState, useMemo } from "react";

function Navbar() {

  const [active, setActive] = useState("home");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const links = useMemo(() => ([
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]), []);

  const dataMap = useMemo(() => ([
    { id: "home", label: "Home Section" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills & Tech Stack" },
    { id: "projects", label: "Project Showcase" },
    { id: "contact", label: "Contact & Hire Me" },
  ]), []);

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();

  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setQuery("");
    setResults([]);
  };

  useEffect(() => {

    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = dataMap.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);

  }, [query, dataMap]);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ================= BIGGER HEADER ================= */}
      <div className="
        bg-black/50
        backdrop-blur-3xl
        border-b border-white/10
      ">

        {/* ================= TOP ROW (SIZED UP) ================= */}
        <div className="
          max-w-7xl mx-auto
          px-8 md:px-14 lg:px-24
          py-8 md:py-10
          flex items-center justify-between
          gap-10
        ">

          {/* ================= LOGO (BIGGER + PREMIUM) ================= */}
          <div className="flex items-center gap-5 group">

            <div className="
              relative
              w-20 h-20 md:w-24 md:h-24
              flex items-center justify-center
              rounded-3xl
              bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600
              text-white
              font-black
              text-2xl md:text-3xl
              shadow-2xl shadow-purple-500/40
              transition-all duration-300
              group-hover:scale-110
              group-hover:rotate-2
            ">
              MJN

              <div className="absolute inset-0 bg-purple-400/20 blur-2xl"></div>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-wide">
                Developer Portfolio
              </h1>
              <p className="text-sm text-gray-400">
                Full Stack Engineer • UI/UX Focused
              </p>
            </div>

          </div>

          {/* ================= SEARCH ================= */}
          <div className="relative w-full max-w-lg">

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search portfolio (skills, projects, contact...)"
              className="
                w-full
                px-5 py-4
                text-base
                bg-white/5
                border border-white/10
                rounded-full
                text-white
                placeholder-gray-400
                outline-none
                focus:border-purple-500
                transition
              "
            />

            {results.length > 0 && (
              <div className="
                absolute top-16 left-0 w-full
                bg-black/80
                backdrop-blur-2xl
                border border-white/10
                rounded-2xl
                overflow-hidden
              ">

                {results.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="
                      px-5 py-4
                      text-sm
                      text-gray-300
                      hover:bg-purple-500/20
                      cursor-pointer
                      transition
                    "
                  >
                    {item.label}
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* ================= CTA (BIGGER + STRONGER) ================= */}
          <button
            onClick={() => scrollTo("contact")}
            className="
              px-9 py-4
              text-base font-semibold
              rounded-full
              bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600
              shadow-xl shadow-purple-500/30
              hover:scale-110
              hover:shadow-purple-500/50
              transition-all duration-300
              whitespace-nowrap
            "
          >
            Hire Me
          </button>

        </div>

        {/* ================= NAV LINKS (BIGGER + SPACED) ================= */}
        <div className="
          max-w-7xl mx-auto
          px-8 md:px-14 lg:px-24
          py-6 md:py-8
          flex justify-center flex-wrap
          gap-10 md:gap-16
          text-base
        ">

          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative group"
            >

              <span className={`
                transition font-medium
                ${active === item.id
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"}
              `}>
                {item.label}
              </span>

              <span className={`
                absolute left-0 -bottom-1
                h-[2px]
                bg-purple-500
                transition-all duration-300
                ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}
              `}></span>

            </button>
          ))}

        </div>

      </div>

    </header>
  );
}

export default Navbar;