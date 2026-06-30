"use client";

import { useEffect, useRef } from "react";

// Fonts loaded via next/font in the root layout, exposed only as CSS variables.
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";
const FONT_SERIF = "var(--font-serif-accent)";
const FONT_MONO = "var(--font-mono)";

// Brand colors map to the design tokens; cream text + the dark stage shell are
// stage-internal values that aren't tokenized.
const BLUE = "rgb(var(--blue))";
const ORANGE = "rgb(var(--orange))";
const CREAM = "#F7F5EF";

const SEGMENTS = [
  { label: "PROBLEM", fill: ORANGE },
  { label: "AUDIT", fill: BLUE },
  { label: "PLAN", fill: BLUE },
  { label: "AUTOMATE", fill: ORANGE },
  { label: "RESULT", fill: BLUE }
];

const PLAN_NODES = [
  {
    label: "LEAD IN",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={CREAM}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="3.5" />
        <path d="M9.5 11l2.5 2.5L14.5 11" />
      </svg>
    ),
    border: "rgba(247,245,239,0.25)"
  },
  {
    label: "AI DRAFTS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 3 L13.4 9.6 L20 11 L13.4 12.4 L12 19 L10.6 12.4 L4 11 L10.6 9.6 Z"
          fill={ORANGE}
        />
      </svg>
    ),
    border: "rgba(247,245,239,0.25)"
  },
  {
    label: "YOU APPROVE",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={CREAM}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.2" />
        <path d="M6 19a6 6 0 0 1 12 0" />
      </svg>
    ),
    border: "rgba(247,245,239,0.25)"
  },
  {
    label: "DONE",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={BLUE}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="5 12.5 10 17.5 19 6.5" />
      </svg>
    ),
    border: "rgb(var(--blue) / 0.5)"
  }
];

const AUDIT_ROWS = [
  "Lead follow-up",
  "Weekly report",
  "Onboarding check",
  "Invoice chase",
  "Data entry"
];

const PAYOFF_CHIPS = [
  { label: "Cheaper", glyph: "↓", color: BLUE, size: "16px" },
  { label: "Faster", glyph: "↑", color: ORANGE, size: "16px" },
  { label: "Zero busywork", glyph: "✓", color: BLUE, size: "15px" }
];

const monoLabel = (size: number, color: string, spacing = 0.18): React.CSSProperties => ({
  fontFamily: FONT_MONO,
  fontSize: `${size}px`,
  letterSpacing: `${spacing}em`,
  color
});

const sceneCaption: React.CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 78,
  textAlign: "center",
  padding: "0 32px"
};

const captionText: React.CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontWeight: 500,
  fontSize: "clamp(26px, 3.2vw, 44px)",
  letterSpacing: "-0.02em",
  color: CREAM
};

const captionEm = (color: string): React.CSSProperties => ({
  fontFamily: FONT_SERIF,
  fontStyle: "italic",
  fontWeight: 400,
  color
});

function Ticket({ label, danger }: { label: string; danger?: boolean }) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        width: 184,
        padding: "9px 12px",
        borderRadius: 9,
        background: "rgba(247,245,239,0.05)",
        border: "1px solid rgba(247,245,239,0.14)"
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: 2,
          background: danger ? "rgb(var(--orange) / 0.85)" : "rgba(247,245,239,0.7)",
          flexShrink: 0
        }}
      />
      <span
        style={{
          flex: 1,
          height: 5,
          borderRadius: 3,
          background: "rgba(247,245,239,0.18)"
        }}
      />
      <span style={monoLabel(8, "rgba(247,245,239,0.4)", 0.12)}>{label}</span>
    </span>
  );
}

export function HomeExplainer() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const $ = <T extends Element>(sel: string) =>
      Array.from(stage.querySelectorAll<T>(sel));
    const one = <T extends Element>(sel: string) =>
      stage.querySelector<T>(sel);

    const scenes = [0, 1, 2, 3, 4].map((i) =>
      one<HTMLElement>(`[data-ex-scene="${i}"]`)
    );
    const fills = $<HTMLElement>("[data-ex-fill]");
    const segLabels = $<HTMLElement>("[data-ex-seg-label]");
    const sceneTag = one<HTMLElement>("#ex-scene-tag");
    const TAGS = [
      "01 — THE PROBLEM",
      "02 — THE AUDIT",
      "03 — THE PLAN",
      "04 — AUTOMATE",
      "05 — THE PAYOFF"
    ];

    const rows = $<HTMLElement>("[data-ex1-row]");
    const dots = $<HTMLElement>("[data-ex3-dot]");
    const doneEl = one<HTMLElement>("#ex3-done");
    const nodes2 = scenes[2]
      ? Array.from(scenes[2].querySelectorAll<HTMLElement>("[data-ex2-node]"))
      : [];
    const line2 = one<HTMLElement>("#ex2-line");
    const chips4 = scenes[4]
      ? Array.from(scenes[4].querySelectorAll<HTMLElement>("[data-ex4-chip]"))
      : [];
    const num4 = one<HTMLElement>("#ex4-num");
    const count0 = one<HTMLElement>("#ex0-count");
    const worker0 = one<HTMLElement>("#ex0-worker");
    const scan1 = one<HTMLElement>("#ex1-scan");
    const drop = one<HTMLElement>("#ex0-drop");

    const clamp = (v: number, a: number, b: number) =>
      Math.max(a, Math.min(b, v));

    // Reduced motion: show the first scene statically, no loop.
    if (prefersReducedMotion) {
      scenes.forEach((s, i) => {
        if (s) s.style.opacity = i === 0 ? "1" : "0";
      });
      if (fills[0]) fills[0].style.width = "100%";
      if (sceneTag) sceneTag.textContent = TAGS[0];
      return;
    }

    // timeline windows (seconds)
    const W = [
      [0, 4.2],
      [4.2, 8.2],
      [8.2, 12.4],
      [12.4, 16.2],
      [16.2, 20.4]
    ];
    const LOOP = W[4][1];
    const FADE = 0.5;

    let visible = false;
    let start = performance.now();
    let raf = 0;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !visible) {
            visible = true;
            start = performance.now();
          } else if (!e.isIntersecting) {
            visible = false;
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(stage);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      const t = ((performance.now() - start) / 1000) % LOOP;

      let activeIdx = 0;
      for (let i = 0; i < W.length; i++) {
        const [a, b] = W[i];
        const inWin = t >= a && t < b;
        if (inWin) activeIdx = i;
        const rampIn = clamp((t - a) / FADE, 0, 1);
        const rampOut = clamp((b - t) / FADE, 0, 1);
        const op = inWin ? Math.min(rampIn, rampOut) : 0;
        if (scenes[i]) scenes[i]!.style.opacity = op.toFixed(3);
        if (fills[i])
          fills[i].style.width =
            (clamp((t - a) / (b - a), 0, 1) * 100).toFixed(1) + "%";
        if (segLabels[i])
          segLabels[i].style.color = inWin
            ? CREAM
            : "rgba(247,245,239,0.35)";
      }
      if (sceneTag) sceneTag.textContent = TAGS[activeIdx];

      const lp = (i: number) =>
        clamp((t - W[i][0]) / (W[i][1] - W[i][0]), 0, 1);

      // scene 0: count climbs, worker slumps, new ticket drops
      if (count0) count0.textContent = String(Math.floor(38 + lp(0) * 26));
      if (worker0)
        worker0.style.transform =
          "rotate(" +
          (lp(0) * 4).toFixed(2) +
          "deg) translateY(" +
          (lp(0) * 3).toFixed(1) +
          "px)";
      if (drop) {
        const cy = (t % 1.1) / 1.1;
        drop.style.transform =
          "translateX(-50%) translateY(" + (cy * 150).toFixed(0) + "px)";
        drop.style.opacity = Math.sin(cy * Math.PI).toFixed(2);
      }

      // scene 1: scan sweeps, rows tag as it passes
      const p1 = lp(1);
      if (scan1) scan1.style.top = (p1 * 100).toFixed(1) + "%";
      rows.forEach((row, i) => {
        const thresh = (i + 0.5) / rows.length;
        const on = p1 >= thresh;
        const tag = row.querySelector<HTMLElement>("[data-ex1-tag]");
        if (tag) tag.style.opacity = on ? "1" : "0";
        row.style.borderColor = on
          ? "rgb(var(--blue) / 0.45)"
          : "rgba(247,245,239,0.12)";
        row.style.background = on
          ? "rgb(var(--blue) / 0.08)"
          : "rgba(247,245,239,0.04)";
      });

      // scene 2: line grows, nodes light up in sequence
      const p2 = lp(2);
      if (line2)
        line2.style.width = (clamp(p2 * 1.15, 0, 1) * 100).toFixed(1) + "%";
      nodes2.forEach((n, i) => {
        n.style.opacity = p2 >= (i / nodes2.length) * 0.9 ? "1" : "0.25";
      });

      // scene 3: dots flow and recycle, done counter ticks
      const p3 = lp(3);
      dots.forEach((d, i) => {
        const ph = (t * 0.85 + i / dots.length) % 1;
        d.style.left = (ph * 100).toFixed(1) + "%";
        d.style.opacity =
          ph > 0.92
            ? ((1 - ph) / 0.08).toFixed(2)
            : ph < 0.06
              ? (ph / 0.06).toFixed(2)
              : "1";
      });
      if (doneEl) doneEl.textContent = "DONE ✓ " + Math.floor(p3 * 47);

      // scene 4: number counts to 20, chips stagger in
      const p4 = lp(4);
      if (num4)
        num4.textContent = String(
          Math.min(20, Math.floor(clamp(p4 / 0.45, 0, 1) * 20))
        );
      chips4.forEach((c, i) => {
        const on = p4 > 0.5 + i * 0.13;
        c.style.opacity = on ? "1" : "0";
        c.style.transform = on ? "translateY(0)" : "translateY(12px)";
      });
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <section id="explainer" style={{ padding: "96px 48px 40px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div
          data-reveal="0"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 18,
            marginBottom: 30,
            flexWrap: "wrap"
          }}
        >
          <span style={monoLabel(11.5, BLUE)}>( 00 ) — IN PLAIN ENGLISH</span>
          <span
            style={{
              fontFamily: FONT_BODY,
              fontSize: 15,
              color: "rgba(22,21,15,0.5)"
            }}
          >
            What we actually do, in 20 seconds.
          </span>
        </div>

        {/* STAGE */}
        <div
          ref={stageRef}
          data-reveal="0"
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(460px, 56vw, 600px)",
            background: "#14130E",
            borderRadius: 26,
            border: "1px solid rgb(var(--orange) / 0.28)",
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(22,21,15,0.22)"
          }}
        >
          {/* ambient grid + vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(247,245,239,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,239,0.045) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
              pointerEvents: "none"
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 60% at 50% 38%, rgb(var(--blue) / 0.16) 0%, rgb(var(--blue) / 0) 62%)",
              pointerEvents: "none"
            }}
          />

          {/* top status bar */}
          <div
            style={{
              position: "absolute",
              top: 22,
              left: 28,
              right: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 6
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span
                className="animate-soft-pulse"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: ORANGE,
                  boxShadow: "0 0 10px rgb(var(--orange) / 0.9)"
                }}
              />
              <span style={monoLabel(10.5, "rgba(247,245,239,0.55)", 0.2)}>
                TWOAPPS / HOW IT WORKS
              </span>
            </div>
            <span
              id="ex-scene-tag"
              style={monoLabel(10.5, "rgba(247,245,239,0.4)", 0.2)}
            >
              01 — THE PROBLEM
            </span>
          </div>

          {/* SCENE 0 — PROBLEM */}
          <div
            data-ex-scene="0"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              transition: "opacity 0.5s ease"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(28px, 6vw, 80px)"
              }}
            >
              {/* slumped worker */}
              <div
                id="ex0-worker"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  transformOrigin: "50% 100%"
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "2.5px solid rgba(247,245,239,0.7)",
                    background: "rgba(247,245,239,0.06)"
                  }}
                />
                <span
                  style={{
                    width: 52,
                    height: 40,
                    borderRadius: "14px 14px 8px 8px",
                    border: "2.5px solid rgba(247,245,239,0.7)",
                    borderBottom: "none",
                    background: "rgba(247,245,239,0.06)"
                  }}
                />
                <span
                  style={{ ...monoLabel(9.5, "rgba(247,245,239,0.45)", 0.16), marginTop: 4 }}
                >
                  YOUR TEAM
                </span>
              </div>
              {/* pile of repeat tickets */}
              <div style={{ position: "relative", width: 230, height: 200 }}>
                <div
                  id="ex0-drop"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    transform: "translateX(-50%)",
                    width: 184
                  }}
                >
                  <Ticket label="NEW" />
                </div>
                <div
                  id="ex0-pile"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: 8
                  }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Ticket key={i} label="REPEAT" />
                  ))}
                </div>
              </div>
              {/* climbing counter */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 6
                }}
              >
                <span style={monoLabel(10, "rgba(247,245,239,0.45)")}>
                  TASKS QUEUED
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span
                    id="ex0-count"
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontWeight: 300,
                      fontSize: 64,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: CREAM
                    }}
                  >
                    38
                  </span>
                  <span style={{ color: ORANGE, fontSize: 26, lineHeight: 1 }}>▲</span>
                </div>
                <span style={monoLabel(10, "rgb(var(--orange) / 0.8)", 0.14)}>
                  SAME WORK, EVERY WEEK
                </span>
              </div>
            </div>
            <div style={sceneCaption}>
              <span style={captionText}>
                Your team keeps redoing the{" "}
                <em style={captionEm(ORANGE)}>same work</em>.
              </span>
            </div>
          </div>

          {/* SCENE 1 — AUDIT */}
          <div
            data-ex-scene="1"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              transition: "opacity 0.5s ease"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 70,
                bottom: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                id="ex1-list"
                style={{
                  position: "relative",
                  width: "clamp(280px, 40vw, 440px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 11
                }}
              >
                {AUDIT_ROWS.map((label) => (
                  <div
                    key={label}
                    data-ex1-row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "11px 16px",
                      borderRadius: 11,
                      background: "rgba(247,245,239,0.04)",
                      border: "1px solid rgba(247,245,239,0.12)",
                      transition: "border-color 0.3s, background 0.3s"
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "rgba(247,245,239,0.3)"
                      }}
                    />
                    <span
                      style={{
                        flex: 1,
                        fontFamily: FONT_BODY,
                        fontSize: 14,
                        color: "rgba(247,245,239,0.78)"
                      }}
                    >
                      {label}
                    </span>
                    <span
                      data-ex1-tag
                      style={{
                        opacity: 0,
                        fontFamily: FONT_MONO,
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        color: BLUE,
                        background: "rgb(var(--blue) / 0.15)",
                        border: "1px solid rgb(var(--blue) / 0.4)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        transition: "opacity 0.3s"
                      }}
                    >
                      REPEAT
                    </span>
                  </div>
                ))}
              </div>
              {/* magnifier scan line */}
              <div
                id="ex1-scan"
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "clamp(300px, 43vw, 470px)",
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, rgb(var(--blue)), transparent)",
                  boxShadow: "0 0 16px rgb(var(--blue) / 0.8)",
                  top: 0
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    right: -2,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontFamily: FONT_MONO,
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: BLUE,
                    background: "#14130E",
                    padding: "2px 6px",
                    borderRadius: 5
                  }}
                >
                  SCANNING
                </span>
              </div>
            </div>
            <div style={sceneCaption}>
              <span style={captionText}>
                First, we <em style={captionEm(BLUE)}>audit</em> what eats the
                hours.
              </span>
            </div>
          </div>

          {/* SCENE 2 — PLAN */}
          <div
            data-ex-scene="2"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              transition: "opacity 0.5s ease"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 70,
                bottom: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "clamp(320px, 64vw, 720px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div
                  id="ex2-line"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: 2.5,
                    background:
                      "linear-gradient(90deg, rgb(var(--blue)), rgb(var(--orange)))",
                    width: "0%",
                    boxShadow: "0 0 12px rgb(var(--blue) / 0.5)"
                  }}
                />
                {PLAN_NODES.map((node) => (
                  <div
                    key={node.label}
                    data-ex2-node
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                      opacity: 0.25,
                      transition: "opacity 0.4s"
                    }}
                  >
                    <span
                      style={{
                        width: 58,
                        height: 58,
                        borderRadius: 16,
                        background: "#1d1c16",
                        border: `1.5px solid ${node.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {node.icon}
                    </span>
                    <span style={monoLabel(9.5, "rgba(247,245,239,0.6)", 0.12)}>
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={sceneCaption}>
              <span style={captionText}>
                Then we <em style={captionEm(BLUE)}>plan</em> one AI workflow to
                do it.
              </span>
            </div>
          </div>

          {/* SCENE 3 — AUTOMATE */}
          <div
            data-ex-scene="3"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              transition: "opacity 0.5s ease"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 70,
                bottom: 150,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 30
              }}
            >
              {/* pipeline rail with flowing dots */}
              <div
                style={{
                  position: "relative",
                  width: "clamp(300px, 58vw, 660px)",
                  height: 64
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: 3,
                    borderRadius: 3,
                    background: "rgba(247,245,239,0.14)"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: 3,
                    borderRadius: 3,
                    background:
                      "linear-gradient(90deg, rgb(var(--blue)), rgb(var(--orange)))",
                    opacity: 0.55
                  }}
                />
                <div id="ex3-dots" style={{ position: "absolute", inset: 0 }}>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span
                      key={i}
                      data-ex3-dot
                      style={{
                        position: "absolute",
                        top: "50%",
                        width: 14,
                        height: 14,
                        borderRadius: 4,
                        background: ORANGE,
                        boxShadow: "0 0 14px rgb(var(--orange) / 0.7)",
                        transform: "translate(-50%,-50%)"
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    position: "absolute",
                    left: -4,
                    top: "50%",
                    transform: "translate(-100%,-50%)",
                    fontFamily: FONT_MONO,
                    fontSize: 9.5,
                    letterSpacing: "0.14em",
                    color: "rgba(247,245,239,0.5)",
                    whiteSpace: "nowrap",
                    paddingRight: 14
                  }}
                >
                  WORK IN
                </span>
                <span
                  id="ex3-done"
                  style={{
                    position: "absolute",
                    right: -4,
                    top: "50%",
                    transform: "translate(100%,-50%)",
                    fontFamily: FONT_MONO,
                    fontSize: 9.5,
                    letterSpacing: "0.14em",
                    color: BLUE,
                    whiteSpace: "nowrap",
                    paddingLeft: 14
                  }}
                >
                  DONE ✓ 0
                </span>
              </div>
              {/* freed worker */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    border: `2.5px solid ${ORANGE}`,
                    background: "rgb(var(--orange) / 0.12)"
                  }}
                />
                <span
                  style={{
                    width: 46,
                    height: 34,
                    borderRadius: "13px 13px 7px 7px",
                    border: `2.5px solid ${ORANGE}`,
                    borderBottom: "none",
                    background: "rgb(var(--orange) / 0.1)"
                  }}
                />
                <span
                  style={{ ...monoLabel(9.5, "rgba(247,245,239,0.5)", 0.16), marginTop: 2 }}
                >
                  FREE FOR REAL WORK
                </span>
              </div>
            </div>
            <div style={sceneCaption}>
              <span style={captionText}>
                Now it <em style={captionEm(ORANGE)}>runs itself</em> — nobody
                touches it.
              </span>
            </div>
          </div>

          {/* SCENE 4 — PAYOFF */}
          <div
            data-ex-scene="4"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              transition: "opacity 0.5s ease"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 60,
                bottom: 150,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 22
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span
                  id="ex4-num"
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 300,
                    fontSize: "clamp(96px, 13vw, 168px)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.04em",
                    color: CREAM
                  }}
                >
                  0
                </span>
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 300,
                    fontSize: "clamp(60px, 8vw, 104px)",
                    lineHeight: 0.9,
                    color: BLUE
                  }}
                >
                  +
                </span>
              </div>
              <span style={monoLabel(13, "rgba(247,245,239,0.65)", 0.22)}>
                HOURS BACK — EVERY WEEK
              </span>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  marginTop: 10,
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}
              >
                {PAYOFF_CHIPS.map((chip) => (
                  <span
                    key={chip.label}
                    data-ex4-chip
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: FONT_BODY,
                      fontSize: 14,
                      fontWeight: 600,
                      color: CREAM,
                      background: "rgba(247,245,239,0.08)",
                      border: "1px solid rgba(247,245,239,0.16)",
                      padding: "9px 18px",
                      borderRadius: 999,
                      opacity: 0,
                      transform: "translateY(12px)",
                      transition:
                        "opacity 0.5s ease, transform 0.5s cubic-bezier(0.2,0.7,0.2,1)"
                    }}
                  >
                    {chip.label}{" "}
                    <span style={{ color: chip.color, fontSize: chip.size }}>
                      {chip.glyph}
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div style={sceneCaption}>
              <span
                style={{
                  fontFamily: FONT_SERIF,
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 3.4vw, 46px)",
                  letterSpacing: "-0.01em",
                  color: CREAM
                }}
              >
                That&apos;s the whole point.
              </span>
            </div>
          </div>

          {/* progress track */}
          <div
            style={{
              position: "absolute",
              left: 28,
              right: 28,
              bottom: 26,
              zIndex: 6
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              {SEGMENTS.map((seg) => (
                <div
                  key={seg.label}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                  }}
                >
                  <span
                    data-ex-seg-label
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      color: "rgba(247,245,239,0.35)",
                      transition: "color 0.4s"
                    }}
                  >
                    {seg.label}
                  </span>
                  <span
                    style={{
                      height: 3,
                      borderRadius: 3,
                      background: "rgba(247,245,239,0.12)",
                      overflow: "hidden"
                    }}
                  >
                    <span
                      data-ex-fill
                      style={{
                        display: "block",
                        height: "100%",
                        width: "0%",
                        background: seg.fill
                      }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
