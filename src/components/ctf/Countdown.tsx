"use client";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: April 10, 2026 (fest date)
    const targetDate = new Date("2026-04-10T00:00:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      justifyContent: "center",
    }}>
      {[
        { val: timeLeft.days, label: "Days" },
        { val: timeLeft.hours, label: "Hours" },
        { val: timeLeft.minutes, label: "Min" },
        { val: timeLeft.seconds, label: "Sec" },
      ].map((item, i) => (
        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ textAlign: "center" }}>
            <div className="countdown-item">{pad(item.val)}</div>
          </div>
          {i < 3 && <span className="countdown-separator">•</span>}
        </div>
      ))}
    </div>
  );
}
