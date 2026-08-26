"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  index?: number;
  className?: string;
  image?: string;
}

export function TeamCard({ name, role, bio, linkedin, image, index = 0, className = '' }: TeamCardProps) {
  //console.log("IMAGE:", image);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className={`bg-dark-700 border border-dark-500 hover:border-brand-purple/50 rounded-xl p-6 transition-all duration-300 group ${className}`}
    >
      <div className="flex flex-col items-center text-center h-full justify-start">
        <div className="w-20 h-20 relative rounded-full overflow-hidden bg-gradient-to-br from-brand-purple to-brand-blue mb-4 group-hover:shadow-glow-purple transition-all duration-300">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-white font-bold text-xl">
              {initials}
            </div>
          )}
        </div>
        <h3 className="font-bold text-white text-lg">{name}</h3>
        <span className="text-brand-purple-light text-sm font-medium mt-1 mb-3">
          {role}
        </span>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{bio}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s LinkedIn profile`}
          className="flex items-center gap-2 text-xs text-gray-500 hover:text-brand-blue-light transition-colors mt-auto"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
}
