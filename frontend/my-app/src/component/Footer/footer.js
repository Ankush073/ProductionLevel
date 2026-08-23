export function Footer({ darkMode }) {
  return (
    <footer
      className={`
        border-t
        px-8
        py-6
        text-center
        text-sm
        ${darkMode ? "border-white/10 text-slate-400" : "border-[#1C2B39]/10 text-slate-500"}
      `}
    >
      © 2026 MYLOGO. All rights reserved.
    </footer>
  );
}