export const phases = [
  {
    id: "p0",
    number: 0,
    title: "Foundations",
    meta: "Age 13–14 · Year 9 · Now",
    current: true,
    intro:
      "Build the base everything else stands on. The goal isn't speed — it's depth. Learn to actually write code, not direct it.",
    sections: [
      {
        heading: "Do",
        type: "checklist",
        items: [
          "Complete CS50P — all problem sets, written by hand",
          "Stay top set in Maths — target grade 8–9 at GCSE",
          "GCSE options: Computer Science, German, History, Triple Science",
          "Write the sorting program — no AI, no tutorial",
          "Start a GitHub — commit every project, even the ugly ones",
          "Watch 3Blue1Brown's Essence of Linear Algebra series",
        ],
      },
      {
        heading: "Rules",
        type: "notes",
        items: [
          "AI for docs lookup only, never code generation — yet",
          "Type every example yourself. Copy-paste builds nothing",
          "Stuck is the feeling of learning. Sit in it",
        ],
      },
    ],
  },
  {
    id: "p1",
    number: 1,
    title: "GCSEs + Sixth Form Entry",
    meta: "Age 14–16 · Years 10–11",
    intro:
      "Execute the exams, keep building. GCSEs are a gate, not the destination — but Maths grades decide which doors stay open.",
    sections: [
      {
        heading: "Do",
        type: "checklist",
        items: [
          "GCSE Maths: grade 8 or 9",
          "GCSE CS + Triple Science: 7+ across the board",
          "5+ completed projects on GitHub — tools, bots, scripts, real things",
          "Start Kaggle Learn micro-courses (pandas, intro to ML)",
          "Learn Git properly — branches, commits, remotes",
        ],
      },
      {
        heading: "A-Level choices — the non-negotiables",
        type: "notes",
        items: [
          "Maths — required by every good CS degree",
          "Further Maths — if offered, take it. Best possible ML prep",
          "Computer Science — King James's sixth form offers it",
          "Physics — strong third/fourth choice",
        ],
      },
    ],
  },
  {
    id: "p2",
    number: 2,
    title: "A-Levels + First ML Exposure",
    meta: "Age 16–18 · Sixth Form",
    intro:
      "The maths gets serious. This is where the path splits from 'can code' to 'understands why it works.' Also: uni applications.",
    sections: [
      {
        heading: "Do",
        type: "checklist",
        items: [
          "A-Level Maths: A or A*",
          "NumPy + pandas — data manipulation fluency",
          "Andrew Ng's ML Specialization (audit free)",
          "scikit-learn — first real models on real datasets",
          "One complete ML project end-to-end (data → model → results → writeup)",
          "Apply to unis: CS degrees with strong ML/AI modules",
        ],
      },
      {
        heading: "Also consider",
        type: "notes",
        items: [
          "Degree apprenticeship — paid, no debt, real experience. Reassess at 16",
          "EPQ on an ML topic — great for the personal statement",
          "Kaggle competitions — start with the beginner ones",
        ],
      },
    ],
  },
  {
    id: "p3",
    number: 3,
    title: "BSc Computer Science",
    meta: "Age 18–21 · University",
    intro:
      "Three years where internships matter more than grades. The degree opens the door; internships and projects decide if you walk through it.",
    sections: [
      {
        heading: "Do",
        type: "checklist",
        items: [
          "Year 1: algorithms, data structures, probability & statistics — take them seriously",
          "Formal linear algebra + calculus modules — ML runs on these",
          "PyTorch — the industry-standard deep learning framework",
          "SQL + databases + Docker + Linux internals",
          "Summer internship (year 2) — big tech or a serious ML company",
          "Final-year dissertation on an ML topic",
          "Kaggle competitions + hackathons + open-source contributions",
        ],
      },
      {
        heading: "Decision point",
        type: "notes",
        items: [
          "Master's: skip it unless targeting research. MLE hires on skill + internships",
          "PhD: only if AI Research Scientist becomes the goal — reassess at 20",
        ],
      },
    ],
  },
  {
    id: "p4",
    number: 4,
    title: "Entry — SWE / Data Engineering",
    meta: "Age 21–24 · First job",
    intro:
      "Nobody hires junior ML engineers directly. The door in is software or data engineering at a company with ML teams — then move sideways.",
    sections: [
      {
        heading: "Do",
        type: "checklist",
        items: [
          "Graduate role: SWE or data engineer at a company doing real ML",
          "Production engineering: testing, CI/CD, code review, on-call",
          "Cloud: AWS (or whichever the employer runs) + MLOps basics",
          "Ship one ML-adjacent thing at work — even a small model or pipeline",
          "Keep side projects alive — public work is leverage",
        ],
      },
      {
        heading: "Target",
        type: "notes",
        items: [
          "Internal move onto an ML team, or jump externally with production experience",
          "London big tech pays well and is the L-1 launchpad for later",
        ],
      },
    ],
  },
  {
    id: "p5",
    number: 5,
    title: "ML Engineer → Senior",
    meta: "Age 24–28 · Specialization pays off",
    intro:
      "Now the compounding starts. Own models in production, pick a specialization, and the salary curve steepens — this is where the US move happens.",
    sections: [
      {
        heading: "Do",
        type: "checklist",
        items: [
          "The ML Engineer title — internal transfer or external jump",
          "Own a model end-to-end in production: training → deployment → monitoring",
          "Specialize: NLP/LLMs, computer vision, or recommender systems",
          "Senior ML Engineer / AI Engineer",
          "US transfer (L-1 via employer) or remote-for-US — Bay Area or Seattle",
        ],
      },
      {
        heading: "Numbers — the point of all this",
        type: "notes",
        items: [
          "UK senior MLE: roughly £6k–12k/mo. US: $15k–35k/mo total comp",
          "Equity starts mattering here — pick companies on stock upside, not just salary",
        ],
      },
    ],
  },
  {
    id: "p6",
    number: 6,
    title: "Staff / Principal / Lead — Accumulate",
    meta: "Age 28–35 · Peak earning years",
    intro:
      "The wealth window. Maximum comp, maximum savings rate, and the fork: deep technical track, leadership, or founding.",
    sections: [
      {
        heading: "Do",
        type: "checklist",
        items: [
          "Staff or Principal ML Engineer — or Engineering Manager if the pull is people",
          "Pre-IPO equity if the right company appears — the real wealth lever",
          "Savings rate 40%+ through the peak years",
          "Optional: founding attempt — worst case you return to senior roles",
        ],
      },
      {
        heading: "The fork",
        type: "notes",
        items: [
          "IC track: staff → principal → distinguished. Deepest technical pay",
          "Management: EM → director → VP → CTO. Higher ceiling, different job",
          "Founder: highest variance. Do it once the downside is survivable",
        ],
      },
    ],
  },
  {
    id: "p7",
    number: 7,
    title: "Optionality",
    meta: "Age 35+ · The payoff",
    intro:
      "The point of the whole exercise: work becomes a choice. Geo-arbitrage, start something, invest, teach — or keep climbing because you want to.",
    sections: [
      {
        heading: "The menu",
        type: "checklist",
        items: [
          "Stay and keep climbing — CTO, distinguished engineer, VP",
          "Geo-arbitrage — US-earned wealth buys a lot of anywhere else",
          "Found the thing you always wanted to build, with a runway this time",
          "Angel invest / mentor — compounding continues without the hours",
        ],
      },
    ],
  },
];

export const pivots = [
  { title: "Data Engineer", desc: "drop the ML theory, keep the pipelines" },
  { title: "Backend SWE", desc: "drop the maths, keep the systems" },
  { title: "Robotics Engineer", desc: "keep the ML, add the hardware instincts" },
  { title: "Quant Dev", desc: "keep the maths, add finance — arguably pays more" },
];
