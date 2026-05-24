import { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  Search,
} from "lucide-react";

function Navbar() {

  const [active, setActive] = useState("home");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // ================= NAV LINKS =================
  const links = useMemo(() => ([
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]), []);

  // ================= SEARCH DATA =================
  const dataMap = useMemo(() => ([
    {
      id: "home",
      label: "Home Section",
      desc: "Main landing hero section",
    },
    {
      id: "about",
      label: "About Me",
      desc: "Developer background and journey",
    },
    {
      id: "skills",
      label: "Skills & Tech Stack",
      desc: "Frontend, backend and tools",
    },
    {
      id: "projects",
      label: "Projects Portfolio",
      desc: "Real world project showcase",
    },
    {
      id: "contact",
      label: "Contact & Hire Me",
      desc: "Connect and collaborate",
    },
  ]), []);

  // ================= ACTIVE SECTION =================
  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }

        });

      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();

  }, []);

  // ================= SEARCH =================
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

  // ================= SCROLL =================
  const scrollTo = (id) => {

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
    setQuery("");
    setResults([]);

  };

  return (

    <header className="sticky top-0 z-50 w-full">

      {/* ================= NAVBAR ================= */}
      <div
        className="
          bg-black/60
          backdrop-blur-[30px]
          border-b border-white/10
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >

        {/* ================= TOP SECTION ================= */}
        <div
          className="
            max-w-[1600px]
            mx-auto

            px-5
            md:px-10
            lg:px-20

            py-5

            flex
            items-center
            justify-between

            gap-6
          "
        >

          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-4 group cursor-pointer">

            {/* LOGO */}
            <div
              className="
                relative

                w-16 h-16
                md:w-20 md:h-20

                flex items-center justify-center

                rounded-[24px]

                bg-gradient-to-br
                from-purple-500
                via-blue-500
                to-indigo-600

                text-white
                font-black

                text-2xl

                shadow-[0_10px_40px_rgba(139,92,246,0.35)]

                transition-all duration-500

                group-hover:scale-105

                overflow-hidden
              "
            >

              <div
                className="
                  absolute inset-0
                  bg-white/10
                  blur-2xl
                "
              ></div>

              <span className="relative z-10 tracking-wider">
                MJN
              </span>

            </div>

            {/* TEXT */}
            <div className="hidden sm:block">

              <h1
                className="
                  text-xl
                  md:text-2xl
                  font-black
                  tracking-wide
                "
              >
                Developer Portfolio
              </h1>

              <p className="text-sm text-gray-400 mt-1">
                Full Stack Engineer
              </p>

            </div>

          </div>

          {/* ================= ADVANCED SEARCH BOX ================= */}
          <div className="relative hidden md:block w-full max-w-4xl group">

            {/* GLOW EFFECT */}
            <div
              className="
                absolute
                -inset-[2px]

                rounded-[30px]

                bg-gradient-to-r
                from-purple-500/30
                via-blue-500/20
                to-indigo-500/30

                blur-xl

                opacity-0

                group-focus-within:opacity-100

                transition-all duration-500
              "
            ></div>

            {/* MAIN SEARCH */}
            <div
              className="
                relative

                flex items-center

                rounded-[28px]

                border border-white/10

                bg-white/[0.06]

                backdrop-blur-[40px]

                overflow-hidden

                shadow-[0_10px_60px_rgba(0,0,0,0.35)]

                transition-all duration-500

                hover:border-white/20

                focus-within:border-purple-500/40
                focus-within:shadow-[0_0_50px_rgba(139,92,246,0.25)]
              "
            >

              {/* SEARCH ICON */}
              <div
                className="
                  pl-6
                  text-gray-400

                  transition-all duration-300

                  group-focus-within:text-purple-300
                "
              >

                <Search className="w-6 h-6" />

              </div>

              {/* INPUT */}
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, skills, technologies..."
                className="
                  w-full

                  bg-transparent

                  px-5
                  py-6

                  text-lg

                  text-white

                  placeholder:text-gray-500

                  outline-none
                "
              />

              {/* RIGHT SIDE */}
              <div className="hidden lg:flex items-center gap-3 pr-5">

                {/* STATUS */}
                <div
                  className="
                    flex items-center gap-2

                    px-4 py-2

                    rounded-xl

                    bg-white/[0.04]

                    border border-white/10
                  "
                >

                  <div
                    className="
                      w-2 h-2

                      rounded-full

                      bg-green-400

                      animate-pulse
                    "
                  ></div>

                  <span className="text-sm text-gray-400">
                    Active
                  </span>

                </div>

                {/* SHORTCUT */}
                <div className="flex items-center gap-2">

                  <span
                    className="
                      px-3 py-1.5

                      rounded-lg

                      text-xs

                      bg-white/[0.04]

                      border border-white/10

                      text-gray-400
                    "
                  >
                    CTRL
                  </span>

                  <span
                    className="
                      px-3 py-1.5

                      rounded-lg

                      text-xs

                      bg-white/[0.04]

                      border border-white/10

                      text-gray-400
                    "
                  >
                    K
                  </span>

                </div>

              </div>

              {/* BOTTOM LIGHT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  h-[2px]

                  w-0

                  bg-gradient-to-r
                  from-purple-500
                  via-blue-500
                  to-indigo-500

                  group-focus-within:w-full

                  transition-all duration-700
                "
              ></div>

            </div>

            {/* ================= SEARCH RESULTS ================= */}
            {results.length > 0 && (

              <div
                className="
                  absolute
                  top-[92px]
                  left-0

                  w-full

                  overflow-hidden

                  rounded-[28px]

                  border border-white/10

                  bg-black/80

                  backdrop-blur-[40px]

                  shadow-[0_20px_100px_rgba(0,0,0,0.45)]

                  z-50
                "
              >

                {results.map((item) => (

                  <div
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="
                      group

                      flex items-center justify-between

                      px-7 py-5

                      border-b border-white/5
                      last:border-none

                      hover:bg-white/[0.04]

                      transition-all duration-300

                      cursor-pointer
                    "
                  >

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                      {/* ICON */}
                      <div
                        className="
                          w-12 h-12

                          flex items-center justify-center

                          rounded-2xl

                          bg-gradient-to-br
                          from-purple-500/20
                          to-blue-500/20

                          border border-white/10

                          text-purple-300
                        "
                      >
                        ✦
                      </div>

                      {/* TEXT */}
                      <div>

                        <h3
                          className="
                            text-base
                            font-semibold
                            text-white

                            group-hover:text-purple-300

                            transition
                          "
                        >
                          {item.label}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                    {/* RIGHT */}
                    <div
                      className="
                        w-10 h-10

                        flex items-center justify-center

                        rounded-xl

                        bg-white/[0.04]

                        border border-white/10

                        text-gray-400

                        group-hover:bg-purple-500/20
                        group-hover:text-purple-300

                        transition-all duration-300
                      "
                    >
                      →
                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-4">

            {/* HIRE BUTTON */}
            <button
              onClick={() => scrollTo("contact")}
              className="
                hidden md:flex

                relative
                overflow-hidden

                px-7 py-4

                rounded-[18px]

                text-base
                font-semibold
                text-white

                bg-gradient-to-r
                from-purple-500
                via-blue-500
                to-indigo-600

                shadow-[0_10px_40px_rgba(139,92,246,0.35)]

                hover:scale-105

                transition-all duration-500
              "
            >

              <div
                className="
                  absolute inset-0

                  bg-white/10

                  translate-x-[-100%]
                  hover:translate-x-[100%]

                  transition-transform duration-1000
                "
              ></div>

              <span className="relative z-10">
                Hire Me
              </span>

            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden

                w-14 h-14

                flex items-center justify-center

                rounded-2xl

                bg-white/[0.05]

                border border-white/10

                text-white

                transition-all duration-300

                hover:bg-white/[0.08]
              "
            >

              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}

            </button>

          </div>

        </div>

        {/* ================= ADVANCED DESKTOP LINKS ================= */}
        <div
          className="
            hidden md:flex

            justify-center

            gap-14

            pb-7

            text-base
          "
        >

          {links.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="
                relative

                group

                px-2 py-2
              "
            >

              {/* TEXT */}
              <span
                className={`
                  relative

                  text-[15px]
                  font-semibold
                  tracking-wide

                  transition-all duration-300

                  ${
                    active === item.id
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }
                `}
              >
                {item.label}
              </span>

              {/* ACTIVE LINE */}
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1

                  h-[3px]

                  rounded-full

                  bg-gradient-to-r
                  from-purple-500
                  via-blue-500
                  to-indigo-500

                  transition-all duration-500

                  ${
                    active === item.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }
                `}
              ></span>

              {/* GLOW */}
              <span
                className={`
                  absolute
                  inset-0

                  rounded-xl

                  bg-purple-500/10

                  blur-xl

                  transition-all duration-500

                  ${
                    active === item.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }
                `}
              ></span>

            </button>

          ))}

        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (

          <div
            className="
              md:hidden

              px-5
              pb-6
            "
          >

            <div
              className="
                rounded-[28px]

                border border-white/10

                bg-black/60

                backdrop-blur-[30px]

                overflow-hidden
              "
            >

              {/* MOBILE LINKS */}
              <div className="flex flex-col p-3">

                {links.map((item) => (

                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`
                      flex items-center justify-between

                      px-5 py-4

                      rounded-2xl

                      transition-all duration-300

                      ${
                        active === item.id
                          ? "bg-purple-500/20 text-purple-300"
                          : "text-gray-300 hover:bg-white/[0.04]"
                      }
                    `}
                  >

                    <span className="font-medium">
                      {item.label}
                    </span>

                    <span>→</span>

                  </button>

                ))}

              </div>

            </div>

          </div>

        )}

      </div>

    </header>

  );
}

export default Navbar;