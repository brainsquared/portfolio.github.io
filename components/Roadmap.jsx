"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mle-roadmap-progress";

export default function Roadmap({ phases, pivots }) {
  const [checked, setChecked] = useState({});
  const [open, setOpen] = useState({ [phases.find((p) => p.current)?.id]: true });

  useEffect(() => {
    try {
      setChecked(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"));
    } catch {}
  }, []);

  const toggle = (key) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const totalItems = phases.reduce(
    (n, p) =>
      n + p.sections.reduce((m, s) => m + (s.type === "checklist" ? s.items.length : 0), 0),
    0
  );
  const doneItems = Object.values(checked).filter(Boolean).length;
  const pct = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

  const phaseDone = (p) => {
    const keys = p.sections.flatMap((s, si) =>
      s.type === "checklist" ? s.items.map((_, i) => `${p.id}-${si}-${i}`) : []
    );
    return keys.length > 0 && keys.every((k) => checked[k]);
  };

  return (
    <>
      <header>
        <p className="kicker">lifelong roadmap</p>
        <h1>Machine Learning Engineer</h1>
        <p className="subtitle">From first line of code to financial optionality</p>
        <div className="progress-card">
          <div className="progress-label">
            <span>Overall progress</span>
            <span className="pct">{pct}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <nav className="phase-nav">
          {phases.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              onClick={(e) => {
                e.preventDefault();
                setOpen((o) => ({ ...o, [p.id]: true }));
                document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {p.number}. {p.title}
            </a>
          ))}
        </nav>
      </header>

      <main className="timeline">
        {phases.map((p) => {
          const done = phaseDone(p);
          const isOpen = !!open[p.id];
          return (
            <section key={p.id} id={p.id} className={`phase ${done ? "done" : ""} ${p.current ? "current" : ""}`}>
              <div className="node">
                <div className="dot">{done ? "✓" : p.number}</div>
                {p.current && <div className="here-badge">you are here</div>}
              </div>
              <div className="card">
                <button
                  className="card-header"
                  onClick={() => setOpen((o) => ({ ...o, [p.id]: !o[p.id] }))}
                >
                  <div className="card-titles">
                    <h2>{p.title}</h2>
                    <p className="meta">{p.meta}</p>
                  </div>
                  <span className={`chevron ${isOpen ? "up" : ""}`}>▾</span>
                </button>
                {isOpen && (
                  <div className="card-body">
                    <p className="intro">{p.intro}</p>
                    {p.sections.map((s, si) => (
                      <div key={si} className="section">
                        <h3>{s.heading}</h3>
                        {s.type === "checklist" ? (
                          <ul className="checklist">
                            {s.items.map((item, i) => {
                              const key = `${p.id}-${si}-${i}`;
                              return (
                                <li key={key} className={checked[key] ? "checked" : ""}>
                                  <label>
                                    <input
                                      type="checkbox"
                                      checked={!!checked[key]}
                                      onChange={() => toggle(key)}
                                    />
                                    <span>{item}</span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <ul className="notes">
                            {s.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
        <div className="timeline-end">
          <div className="dot flag">⚑</div>
        </div>
      </main>

      <footer>
        <h2>Pivot map</h2>
        <p className="footer-lead">
          Phases 0–4 are career-agnostic. If MLE dies, shifts, or stops being
          interesting, the same base converts to:
        </p>
        <div className="pivots">
          {pivots.map((p) => (
            <div key={p.title} className="pivot">
              <strong>{p.title}</strong>
              <span>{p.desc}</span>
            </div>
          ))}
        </div>
        <p className="caveat">
          Titles rename themselves every few years. The durable bet is always:
          maths + systems + the ability to read code someone else — or something
          else — wrote.
        </p>
      </footer>
    </>
  );
}
