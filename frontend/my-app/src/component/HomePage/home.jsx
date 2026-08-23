import { useState, useRef } from "react";

const menu = [
  {
    label: "Coding Platforms",
    items: ["LeetCode", "Codeforces", "HackerRank", "CodeChef","CSES","Atcoder"],
  },
  {
    label: "Online Resources",
    items: [
      "MDN Web Docs",
      "freeCodeCamp",
      "GeeksforGeeks",
      "The Odin Project",
    ],
  },
  {
    label: "Books",
    items: [
      "Introduction to Algorithms",
      "Clean Code",
      "Cracking the Coding Interview",
      "Structure and Interpretation of Computer Programs",
    ],
  },
];

function ResourceNav() {
  const [open, setOpen] = useState(null);
  const closeTimer = useRef(null);

  const handleEnter = (index) => {
    clearTimeout(closeTimer.current);
    setOpen(index);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(null);
    }, 120);
  };

  return (
    <nav
      className="
        bg-[#1C2B39]
        dark:bg-[#0F1923]
        border border-[#D9C08C]/30
        rounded-sm
        px-10 py-5
        relative
      "
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
      }}
    >
      <ol className="flex items-center">
        {menu.map((section, i) => (
          <li
            key={section.label}
            className="flex items-center relative"
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={handleLeave}
          >
            {i > 0 && (
              <span className="mx-6 text-[#8C7A54] text-xs select-none">
                &#10022;
              </span>
            )}

            <button
              type="button"
              className="
                relative
                pb-1
                text-[15px]
                tracking-[0.14em]
                uppercase
                transition-colors
                duration-300
                flex
                items-center
                gap-2
              "
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: open === i ? "#D9C08C" : "#E8E2D4",
              }}
            >
              {section.label}

              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                className="transition-transform duration-300"
                style={{
                  transform:
                    open === i ? "rotate(180deg)" : "rotate(0deg)",
                  fill: open === i ? "#D9C08C" : "#8C7A54",
                }}
              >
                <path d="M0 2 L4.5 7 L9 2 Z" />
              </svg>

              <span
                className="
                  absolute
                  left-0
                  bottom-0
                  h-[1px]
                  transition-all
                  duration-300
                "
                style={{
                  width: open === i ? "100%" : "0%",
                  backgroundColor: "#D9C08C",
                }}
              />
            </button>

            <div
              className="
                absolute
                left-1/2
                top-full
                pt-3
                transition-all
                duration-200
                z-50
              "
              style={{
                transform: `translateX(-50%) translateY(${
                  open === i ? "0px" : "-6px"
                })`,
                opacity: open === i ? 1 : 0,
                pointerEvents: open === i ? "auto" : "none",
                minWidth: "240px",
              }}
            >
              <div
                className="
                  bg-[#FBF8F1]
                  dark:bg-[#16222E]
                  border
                  border-[#D9C08C]/40
                  rounded-sm
                  py-2
                "
                style={{
                  boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                }}
              >
                {section.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      block
                      px-6
                      py-2.5
                      text-[13.5px]
                      tracking-[0.03em]
                      text-[#1C2B39]
                      dark:text-[#E8E2D4]
                      hover:text-[#8C7A54]
                      dark:hover:text-[#D9C08C]
                      hover:bg-[#1C2B39]/[0.04]
                      dark:hover:bg-white/[0.04]
                      transition-colors
                      duration-150
                    "
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Homepage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`
          min-h-screen
          transition-colors
          duration-300
          ${
            darkMode
              ? "bg-[#0B121A] text-white"
              : "bg-[#FBF8F1] text-slate-900"
          }
        `}
      >
        <header
          className={`
            w-full
            flex
            items-center
            justify-between
            px-8
            py-5
            border-b
            transition-colors
            duration-300
            ${
              darkMode
                ? "border-white/10"
                : "border-[#1C2B39]/10"
            }
          `}
        >
          <div className="flex-1">
            <h1
              className="text-2xl font-bold tracking-[0.12em] uppercase"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              MYLOGO
            </h1>
          </div>

          <div className="flex items-center justify-center flex-1">
            <form
              className="
                flex
                items-center
                border
                rounded-full
                overflow-hidden
                w-[280px]
                transition-colors
              "
              style={{
                borderColor: darkMode
                  ? "rgba(217,192,140,0.4)"
                  : "rgba(28,43,57,0.25)",
              }}
            >
              <input
                type="search"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none px-4 py-2 text-sm"
              />

              <button
                type="submit"
                className="
                  px-4
                  py-2
                  text-[#8C7A54]
                  hover:text-[#D9C08C]
                  transition-colors
                "
                aria-label="Search"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line
                    x1="16.65"
                    y1="16.65"
                    x2="21"
                    y2="21"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className="flex-1 flex justify-end">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                text-sm
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                borderColor: darkMode
                  ? "rgba(217,192,140,0.4)"
                  : "rgba(28,43,57,0.25)",
              }}
            >
              {darkMode ? (
                <>
                  <span>☀</span>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <span>☾</span>
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </header>

        <main>
          <div className="w-full flex justify-center px-4 pt-6">
            <ResourceNav />
          </div>

          <section className="max-w-5xl mx-auto px-6 py-20 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8C7A54] mb-4">
              Developer Resources
            </p>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Learn. Code. Build.
            </h2>

            <p
              className={`max-w-2xl mx-auto leading-7 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Explore coding platforms, online resources, and recommended
              books to improve your programming skills.
            </p>
          </section>

          <section className="max-w-5xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {menu.map((section) => (
                <div
                  key={section.label}
                  className={`
                    p-6
                    rounded-lg
                    border
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    ${
                      darkMode
                        ? "bg-[#16222E] border-white/10"
                        : "bg-white border-[#1C2B39]/10"
                    }
                  `}
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3
                    className="text-xl font-semibold mb-4 text-[#8C7A54]"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {section.label}
                  </h3>

                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm hover:text-[#D9C08C] transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer
          className={`
            border-t
            px-8
            py-6
            text-center
            text-sm
            ${
              darkMode
                ? "border-white/10 text-slate-400"
                : "border-[#1C2B39]/10 text-slate-500"
            }
          `}
        >
          © 2026 MYLOGO. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Homepage;