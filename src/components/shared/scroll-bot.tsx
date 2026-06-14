"use client";

import { useEffect, useRef } from "react";

const ICONS: Record<string, string> = {
  inbox: svg(
    '<rect x="4" y="4" width="16" height="16" rx="3.5"/><path d="M12 8v5"/><path d="M9.5 11l2.5 2.5 2.5-2.5"/>'
  ),
  spark:
    '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 3 L13.6 10.4 L21 12 L13.6 13.6 L12 21 L10.4 13.6 L3 12 L10.4 10.4 Z" fill="#FF6A1A"/></svg>',
  check: svg('<polyline points="4 12.5 9.5 18 20 6.5"/>'),
  clock: svg(
    '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>'
  ),
  arrowR:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(247,245,239,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h13"/><path d="M12 7l5 5-5 5"/></svg>',
  code: svg(
    '<polyline points="9 8 4.5 12 9 16"/><polyline points="15 8 19.5 12 15 16"/>'
  ),
  box: svg(
    '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5"/><path d="M12 12v9"/>'
  ),
  eyeoff:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="2.6"/><line x1="3" y1="3" x2="21" y2="21" stroke="#FF6A1A"/></svg>',
  eye: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="2.6" fill="#FF6A1A" stroke="none"/></svg>',
  target:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" stroke-width="2"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.9" fill="#FF6A1A" stroke="none"/></svg>',
  chart: svg(
    '<path d="M4 20h16"/><path d="M7.5 20v-5"/><path d="M12 20V6"/><path d="M16.5 20v-9"/>'
  ),
  pulse: svg(
    '<polyline points="2 12 7 12 10 5 14 19 17 12 22 12"/>'
  ),
  shield: svg(
    '<path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>'
  ),
  chat: svg(
    '<rect x="3" y="5" width="18" height="12" rx="3.5"/><path d="M8 21l4-4"/>'
  ),
  calendar: svg(
    '<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 9.5h16"/><path d="M8.5 3v4"/><path d="M15.5 3v4"/>'
  ),
  person: svg(
    '<circle cx="12" cy="8" r="3.4"/><path d="M5.5 19a6.5 6.5 0 0 1 13 0"/>'
  ),
  _default:
    '<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.6" fill="#F7F5EF"/></svg>'
};

function svg(body: string, size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

export function ScrollBot() {
  const botRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const bubbleTextRef = useRef<HTMLSpanElement>(null);
  const bubbleIconRef = useRef<HTMLSpanElement>(null);
  const bubbleTipRef = useRef<HTMLSpanElement>(null);
  const slabsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const bot = botRef.current;
    const body = bodyRef.current;
    const bubble = bubbleRef.current;
    const bubbleText = bubbleTextRef.current;
    const bubbleIcon = bubbleIconRef.current;
    const bubbleTip = bubbleTipRef.current;
    const slabs = slabsRef.current.filter(Boolean) as HTMLDivElement[];
    const stops = Array.from(document.querySelectorAll("[data-bot-stop]"));

    if (!bot || !body || !bubble || !bubbleText || !bubbleIcon || stops.length === 0) {
      return;
    }

    let x = 0;
    let y = 0;
    let active: Element = stops[0];
    let currentSay = "";
    let mode: "wait" | "drop" | "land" | "follow" = "wait";
    let vyDrop = 0;
    let landT = 0;
    const born = performance.now();

    const frame = () => {
      rafRef.current = requestAnimationFrame(frame);
      const isMobile = window.innerWidth < 760;
      const scale = isMobile ? 0.6 : 1;
      const botWidth = 61 * scale;
      const botHeight = 84 * scale;
      const now = performance.now();

      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const infos = stops.map((el) => {
        const r = el.getBoundingClientRect();
        return {
          el,
          y: r.top + scrollY + r.height / 2 - vh * 0.5,
          left: r.left
        };
      });
      infos.sort((a, b) => a.y - b.y);

      const triggers: { el: Element; t: number }[] = [];
      let gi = 0;
      while (gi < infos.length) {
        let ge = gi + 1;
        while (ge < infos.length && Math.abs(infos[ge].y - infos[gi].y) < 60) ge++;
        const group = infos.slice(gi, ge).sort((a, b) => a.left - b.left);
        const groupY = infos[gi].y;
        const nextY = ge < infos.length ? infos[ge].y : groupY + vh * 0.8;
        for (let k = 0; k < group.length; k++) {
          triggers.push({
            el: group[k].el,
            t: groupY + ((nextY - groupY) * 0.85 * k) / group.length
          });
        }
        gi = ge;
      }

      active = triggers[0].el;
      for (const tr of triggers) {
        if (scrollY >= tr.t) active = tr.el;
      }

      const r = active.getBoundingClientRect();
      const fx = parseFloat(active.getAttribute("data-bot-fx") || "0.5");
      const tx = clamp(
        r.left + r.width * fx - botWidth / 2,
        16,
        window.innerWidth - botWidth - 16
      );
      const ty = clamp(
        r.top - botHeight + 6,
        156,
        window.innerHeight - botHeight - 34
      );

      if (mode === "wait") {
        if (now - born < 750) return;
        x = tx;
        y = -botHeight - 30;
        mode = "drop";
        bot.style.opacity = "1";
        bot.style.transformOrigin = "0 0";
      }

      if (mode === "drop") {
        x = tx;
        vyDrop += 1.15;
        y += vyDrop;
        if (y >= ty) {
          y = ty;
          mode = "land";
          landT = now;
        }
        bot.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale})`;
        body.style.transform = "scaleY(1.07) scaleX(0.95)";
        return;
      }

      if (mode === "land") {
        const p = Math.min((now - landT) / 280, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        bot.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale})`;
        body.style.transform = `scaleY(${(0.76 + 0.24 * ease).toFixed(3)}) scaleX(${(1.22 - 0.22 * ease).toFixed(3)})`;
        if (p >= 1) {
          mode = "follow";
          body.style.transform = "none";
        }
        return;
      }

      const pxv = x;
      const pyv = y;
      x += (tx - x) * 0.09;
      y += (ty - y) * 0.09;
      const vx = x - pxv;
      const vy = y - pyv;
      const speed = Math.abs(vx) + Math.abs(vy);

      const bob = speed < 1 ? Math.sin(now * 0.0022) * 2.5 : 0;
      bot.style.transform = `translate3d(${x.toFixed(2)}px, ${(y + bob).toFixed(2)}px, 0) scale(${scale})`;
      body.style.transform = `rotate(${clamp(vx * 1.4, -12, 12).toFixed(2)}deg)`;

      const amp = Math.min(speed * 0.9, 7);
      slabs.forEach((s, i) => {
        s.style.transform = `translateY(${(Math.sin(now * 0.016 + i * 1.5) * amp).toFixed(2)}px)`;
      });

      const say = active.getAttribute("data-bot-say") || "";
      const iconSeq = active.getAttribute("data-bot-icons") || "";
      const settled = Math.abs(tx - x) < 3 && Math.abs(ty - y) < 3;
      const hasContent = isMobile ? !!iconSeq : !!say;

      if (settled && hasContent) {
        if (isMobile) {
          bubbleText.style.display = "none";
          bubbleIcon.style.display = "flex";
          bubbleIcon.style.gap = "9px";
          bubbleIcon.style.alignItems = "center";
          bubble.style.width = "auto";
          bubble.style.whiteSpace = "nowrap";
          bubble.style.padding = "9px 13px";
          if (currentSay !== iconSeq) {
            currentSay = iconSeq;
            bubbleIcon.innerHTML = iconSeq
              .split(",")
              .map((k) => ICONS[k.trim()] || ICONS._default)
              .join("");
          }
        } else {
          bubbleText.style.display = "";
          bubbleIcon.style.display = "none";
          bubble.style.width = "200px";
          bubble.style.whiteSpace = "normal";
          bubble.style.padding = "9px 14px";
          if (currentSay !== say) {
            currentSay = say;
            bubbleText.textContent = say;
          }
        }

        const hw = bubble.offsetWidth / 2;
        const center = x + botWidth / 2;
        const wanted = clamp(center, 12 + hw, window.innerWidth - 12 - hw);
        const shift = wanted - center;
        if (bubbleTip) bubbleTip.style.left = `calc(50% - ${shift.toFixed(1)}px)`;
        bubble.style.opacity = "1";
        bubble.style.transform = `translateX(calc(-50% + ${shift.toFixed(1)}px)) translateY(0)`;
      } else {
        bubble.style.opacity = "0";
        bubble.style.transform = "translateX(-50%) translateY(6px)";
      }
    };

    frame();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={botRef}
      className="fixed left-0 top-0 z-40 pointer-events-none opacity-0"
      style={{ willChange: "transform", transition: "opacity 0.6s ease" }}
      aria-hidden="true"
    >
      <div
        ref={bubbleRef}
        className="absolute bottom-[calc(100%+16px)] left-1/2 w-[200px] rounded-[10px] border border-orange/55 bg-[#15120D] px-3.5 py-2 text-center text-[11px] leading-relaxed tracking-[0.03em] text-cream opacity-0"
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          transform: "translateX(-50%) translateY(6px)",
          whiteSpace: "normal",
          textWrap: "balance",
          transition: "opacity 0.35s ease, transform 0.35s ease"
        }}
      >
        <span ref={bubbleIconRef} className="hidden items-center justify-center text-cream" />
        <span ref={bubbleTextRef} />
        <span
          ref={bubbleTipRef}
          className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1.5 rotate-45 rounded-sm border-b border-r border-orange/55 bg-[#15120D]"
        />
      </div>

      <div
        ref={bodyRef}
        className="relative flex items-end gap-[3px]"
        style={{ height: "84px", transformOrigin: "50% 90%" }}
      >
        <div
          ref={(el) => { slabsRef.current[0] = el; }}
          className="rounded-[5px]"
          style={{
            width: "13px",
            height: "76px",
            background:
              "linear-gradient(180deg, #15140F 0 30px, #FF6A1A 30px 35px, #15140F 35px)"
          }}
        />
        <div
          ref={(el) => { slabsRef.current[1] = el; }}
          className="relative rounded-[5px]"
          style={{
            width: "13px",
            height: "84px",
            background:
              "linear-gradient(180deg, #15140F 0 38px, #FF6A1A 38px 43px, #15140F 43px)"
          }}
        >
          <div
            className="absolute left-1/2 top-[13px] h-[7px] w-[7px] -translate-x-1/2 animate-bot-blink rounded-full bg-blue shadow-[0_0_9px_rgba(39,66,206,0.95)]"
          />
        </div>
        <div
          ref={(el) => { slabsRef.current[2] = el; }}
          className="rounded-[5px]"
          style={{
            width: "13px",
            height: "84px",
            background:
              "linear-gradient(180deg, #15140F 0 38px, #FF6A1A 38px 43px, #15140F 43px)"
          }}
        />
        <div
          ref={(el) => { slabsRef.current[3] = el; }}
          className="rounded-[5px]"
          style={{
            width: "13px",
            height: "76px",
            background:
              "linear-gradient(180deg, #15140F 0 30px, #FF6A1A 30px 35px, #15140F 35px)"
          }}
        />
      </div>

      <div
        className="absolute left-1/2 top-[calc(100%+3px)] h-2 w-[54px] -translate-x-1/2 rounded-[50%]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(22,21,15,0.28) 0%, rgba(22,21,15,0) 70%)"
        }}
      />
    </div>
  );
}
