export function Header({ darkMode, setDarkMode }) {
  return (
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
        ${darkMode ? "border-white/10" : "border-[#1C2B39]/10"}
      `}
    >
      <div className="flex-1">
        <h1
          className="text-2xl font-bold tracking-[0.12em] uppercase"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
            className="px-4 py-2 text-[#8C7A54] hover:text-[#D9C08C] transition-colors"
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
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
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
  );
}