"use client";

import SmoothScrollProvider from "@/components/ui/SmoothScroll";

export default function ObscuraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
