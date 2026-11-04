"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mle-roadmap-v2";
const OFFSETS = [0, 48, 76, 48, 0, -48, -76, -48];

export default function Roadmap({ units, pivots }) {
  const [done, setDone] = useState({});
  const [ticks, setTicks] = useState({});
  const [open, setOpen] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      setDone(s.done || {});
      setTicks(s.ticks || {});
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ done, ticks }));
  }, [done, ticks, loaded]);

  const lessons = units.flatMap((u) => u.lessons);
  const currentId = lessons.find((l) => !done[l.id])?.id;
  const pct = lessons.length
    ? Math.round((lessons.filter((l) => done[l.id]).length / lessons.length) * 100)
    : 0;

  const toggleCriterion = (lessonId, i) =>
    setTicks((t) => ({ ...t, [`${lessonId}-${i}`]: !t[`${lessonId}-${i}`] }));

  const markDone = (lessonId) => {
    setDone((d) => ({ ...d, [lessonId]: true }));
    setOpen(null);
    const idx = lessons.findIndex((l) => l.id === lessonId);
    const next = lessons.slice(idx + 1).find((l) => !done[l.id]);
    if (next) {
      setTimeout(() => {
        setOpen(next.id);
        document
          .getElementById(next.id)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 350);
    }
  };

  let lessonIdx = 0;

  return (
    <>
      <header>
        <p className="kicker">lifelong roadmap</p>
        <h1>Machine Learning Engineer</h1>
        <p className="subtitle">
          {lessons.length} lessons · Year 9 → financial optionality
        </p>
        <div className="progress-card">
          <div className="progress-label">
            <span>
              {lessons.filter((l) => done[l.id]).length} / {lessons.length}{" "}
              lessons done
            </span>
            <span className="pct">{pct}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </header>

      <main className="path">
        {units.map((unit, ui) => (
          <div key={unit.id} className="unit">
            <div className="unit-banner">
              <div>
                <p className="unit-num">Unit {ui + 1}</p>
                <h2>{unit.title}</h2>
              </div>
              <span className="unit-meta">{unit.meta}</span>
            </div>

            <div className="lesson-path">
              {unit.lessons.map((lesson) => {
                const idx = lessonIdx++;
                const off = OFFSETS[idx % OFFSETS.length];
                const isDone = !!done[lesson.id];
                const isCurrent = lesson.id === currentId;
                const isOpen = open === lesson.id;
                const checkedCount = lesson.criteria.filter(
                  (_, i) => ticks[`${lesson.id}-${i}`]
                ).length;

                return (
                  <div key={lesson.id} className="lesson-wrap" id={lesson.id}>
                    <div className="lesson-row" style={{ transform: `translateX(${off}px)` }}>
                      <button
                        className={`lesson-node ${isDone ? "done" : ""} ${isCurrent ? "current" : ""} ${isOpen ? "open" : ""}`}
                        onClick={() => setOpen(isOpen ? null : lesson.id)}
                        aria-label={lesson.title}
                      >
                        <span className="node-icon">{isDone ? "✓" : lesson.icon}</span>
                      </button>
                      {isCurrent && <div className="start-tag">start</div>}
                    </div>

                    {isOpen && (
                      <div className="lesson-panel">
                        <div className="panel-head">
                          <h3>{lesson.title}</h3>
                          <span className="panel-meta">{lesson.meta}</span>
                        </div>
                        <p className="panel-intro">{lesson.intro}</p>
                        <ul className="criteria">
                          {lesson.criteria.map((c, i) => {
                            const key = `${lesson.id}-${i}`;
                            return (
                              <li key={key} className={ticks[key] ? "tick" : ""}>
                                <label>
                                  <input
                                    type="checkbox"
                                    checked={!!ticks[key]}
                                    onChange={() => toggleCriterion(lesson.id, i)}
                                  />
                                  <span>{c}</span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                        <div className="panel-foot">
                          <span className="criteria-count">
                            {checkedCount}/{lesson.criteria.length}
                          </span>
                          <button
                            className={`done-btn ${isDone ? "is-done" : ""}`}
                            onClick={() => markDone(lesson.id)}
                            disabled={isDone}
                          >
                            {isDone ? "Completed" : "Done"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flag-row">
          <div className="flag-node">🏁</div>
        </div>
      </main>

      <footer>
        <h2>Pivot map</h2>
        <p className="footer-lead">
          The early units are career-agnostic. If MLE dies, shifts, or stops
          being interesting, the same base converts to:
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
