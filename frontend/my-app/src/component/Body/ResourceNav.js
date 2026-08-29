import { useState, useRef } from "react";
import { codingPlatforms } from "../Platforms/index";

export const menu = [
  {
    label: "Coding Platforms",
    items: codingPlatforms,
  },
  {
    label: "Online Resources",
    items: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org" },
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" },
      { name: "The Odin Project", url: "https://www.theodinproject.com" },
    ],
  },
  {
    label: "Books",
    items: [
      { name: "Introduction to Algorithms", url: "#" },
      { name: "Clean Code", url: "#" },
      { name: "Cracking the Coding Interview", url: "#" },
      { name: "Structure and Interpretation of Computer Programs", url: "#" },
    ],
  },
];

export function ResourceNav() {
  const [open, setOpen] = useState(null);
  const closeTimer = useRef(null);

  const handleEnter = (index) => {
    clearTimeout(closeTimer.current);
    setOpen(index);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(function () {
      setOpen(null);
    }, 120);
  };

  return (
    <nav className="bg-[#1C2B39] dark:bg-[#0F1923] border border-[#D9C08C]/30 rounded-sm px-10 py-5 relative" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }}>
      <ol className="flex items-center">
        {menu.map(function (section, i) {
          return (
            <li key={section.label} className="flex items-center relative" onMouseEnter={function () { handleEnter(i); }} onMouseLeave={handleLeave}>
              {i > 0 ? (
                <span className="mx-6 text-[#8C7A54] text-xs select-none">
                  {"\u2726"}
                </span>
              ) : null}

              <button type="button" className="relative pb-1 text-[15px] tracking-[0.14em] uppercase transition-colors duration-300 flex items-center gap-2" style={{ fontFamily: "Georgia, serif", color: open === i ? "#D9C08C" : "#E8E2D4" }}>
                {section.label}

                <svg width="9" height="9" viewBox="0 0 9 9" className="transition-transform duration-300" style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", fill: open === i ? "#D9C08C" : "#8C7A54" }}>
                  <path d="M0 2 L4.5 7 L9 2 Z" />
                </svg>

                <span className="absolute left-0 bottom-0 h-[1px] transition-all duration-300" style={{ width: open === i ? "100%" : "0%", backgroundColor: "#D9C08C" }} />
              </button>

              <div className="absolute left-1/2 top-full pt-3 transition-all duration-200 z-50" style={{ transform: "translateX(-50%) translateY(" + (open === i ? "0px" : "-6px") + ")", opacity: open === i ? 1 : 0, pointerEvents: open === i ? "auto" : "none", minWidth: "240px" }}>
                <div className="bg-[#FBF8F1] dark:bg-[#16222E] border border-[#D9C08C]/40 rounded-sm py-2" style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.18)" }}>
                  {section.items.map(function (item) {
                     return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-2.5 text-[13.5px] tracking-[0.03em] text-[#1C2B39] dark:text-[#E8E2D4] hover:text-[#8C7A54] dark:hover:text-[#D9C08C] hover:bg-[#1C2B39]/[0.04] dark:hover:bg-white/[0.04] transition-colors duration-150"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}