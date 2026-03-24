import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-500/50" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/wicys-logo-new.png"
                alt="WiCyS Sathyabama"
                width={160}
                height={55}
                className="w-40 h-auto object-contain"
                priority
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Empowering women in cybersecurity through education, community, and hands-on experiences at Sathyabama Institute of Science and Technology, Chennai.
            </p>
            <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-brand-purple-light" />
              <span>Sathyabama Institute, Chennai, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4 text-brand-purple-light" />
              <a href="mailto:wicys@sathyabama.ac.in" className="hover:text-white transition-colors">
                wicys@sathyabama.ac.in
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/archive", label: "Archive" },
                { href: "/team", label: "Our Team" },
                { href: "/upcoming", label: "Upcoming Events" },
                { href: "/obscura", label: "OBSCURA CTF" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-purple-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Github, label: "GitHub", href: "https://github.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-dark-600 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-brand-purple-light hover:border-brand-purple/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="bg-dark-700 rounded-lg p-4 border border-dark-500">
              <p className="text-xs text-gray-400 leading-relaxed">
                Part of the global WiCyS network, dedicated to the recruitment, retention, and advancement of women in cybersecurity.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-500/50 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WiCyS Student Chapter – Sathyabama. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with ♥ by WiCyS Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
}
