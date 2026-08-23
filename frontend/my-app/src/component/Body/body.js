import { ResourceNav, menu } from "./ResourceNav";

export function Body(props) {
  const darkMode = props.darkMode;

  return (
    <main>
      <div className="w-full flex justify-center px-4 pt-6">
        <ResourceNav />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8C7A54] mb-4">
          Developer Resources
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>
          Learn. Code. Build.
        </h2>

        <p className={"max-w-2xl mx-auto leading-7 " + (darkMode ? "text-slate-300" : "text-slate-600")}>
          Explore coding platforms, online resources, and recommended books to improve your programming skills.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menu.map(function (section) {
            const cardClass = "p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1 " + (darkMode ? "bg-[#16222E] border-white/10" : "bg-white border-[#1C2B39]/10");
            return (
              <div key={section.label} className={cardClass} style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                <h3 className="text-xl font-semibold mb-4 text-[#8C7A54]" style={{ fontFamily: "Georgia, serif" }}>
                  {section.label}
                </h3>

                <ul className="space-y-2">
                  {section.items.map(function (item) {
                    return (
                      <li key={item}>
                        <a href="#" className="text-sm hover:text-[#D9C08C] transition-colors">
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}