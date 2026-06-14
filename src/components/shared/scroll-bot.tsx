"use client";

import { useEffect, useRef } from "react";

function shorten(s: string) {
  const w = s.trim().split(/\s+/).filter(Boolean);
  return w.length <= 5 ? s.trim() : w.slice(0, 5).join(" ") + "…";
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

export function ScrollBot() {
  const botRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const bubbleTextRef = useRef<HTMLSpanElement>(null);
  const bubbleTipRef = useRef<HTMLSpanElement>(null);
  const slabsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const bot = botRef.current;
    const body = bodyRef.current;
    const bubble = bubbleRef.current;
    const bubbleText = bubbleTextRef.current;
    const bubbleTip = bubbleTipRef.current;
    const slabs = slabsRef.current.filter(Boolean) as HTMLDivElement[];
    const stops = Array.from(document.querySelectorAll("[data-bot-stop]"));

    if (!bot || !body || !bubble || !bubbleText || stops.length === 0) {
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
      const short = active.getAttribute("data-bot-short") || "";
      const text = isMobile ? short || shorten(say) : say;
      const settled = Math.abs(tx - x) < 3 && Math.abs(ty - y) < 3;
      const hasContent = !!text;

      if (settled && hasContent) {
        bubble.style.width = isMobile ? "auto" : "200px";
        bubble.style.maxWidth = isMobile ? "170px" : "";
        bubble.style.whiteSpace = "normal";
        bubble.style.padding = isMobile ? "8px 12px" : "9px 14px";
        if (currentSay !== text) {
          currentSay = text;
          bubbleText.textContent = text;
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
