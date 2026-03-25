"use client";

import Countdown from "@/components/ui/Countdown";

interface CountdownSectionProps {
  targetDate: Date;
}

export default function CountdownSection({ targetDate }: CountdownSectionProps) {
  return <Countdown targetDate={targetDate} />;
}
