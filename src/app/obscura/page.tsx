import type { Metadata } from "next";
import ObscuraClient from "./ObscuraClient";

export const metadata: Metadata = {
  title: "OBSCURA: The Forbidden Cipher | WiCyS CTF",
  description:
    "OBSCURA — A Magical Capture The Flag Experience. Enter the realm where ancient ciphers meet modern cybersecurity. Register now for the ultimate CTF challenge.",
  keywords: ["OBSCURA", "CTF", "Capture The Flag", "WiCyS", "Sathyabama", "cybersecurity", "competition"],
};

export default function ObscuraPage() {
  return <ObscuraClient />;
}
