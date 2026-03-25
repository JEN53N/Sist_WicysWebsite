"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  { src: "/ctf/images/gallery-1.png", alt: "Concert performance" },
  { src: "/ctf/images/concert-bg.png", alt: "Festival night" },
  { src: "/ctf/images/gallery-1.png", alt: "Dance performance" },
  { src: "/ctf/images/hero-bg.png", alt: "Cultural showcase" },
  { src: "/ctf/images/concert-bg.png", alt: "Music event" },
  { src: "/ctf/images/gallery-1.png", alt: "Stage show" },
];

export default function Gallery() {
  const targetRef = useRef(null);
  
  // Track scroll progress within the tall target section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map the scroll progress (0 to 1) to horizontal movement
  // -60% means the container will slide left as you scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      ref={targetRef}
      style={{
        position: "relative",
        height: "300vh", // Tall enough to allow significant scrolling
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3rem", padding: "0 2rem" }}
        >
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: "0.5rem",
          }}>
            <span className="heading-gradient">CATCH</span>{" "}
            <span style={{ color: "var(--color-cream)" }}>A GLIMPSE</span>
          </h2>
        </motion.div>

        {/* Scroll-bound gallery */}
        <div style={{ paddingLeft: "50vw" }}>
          <motion.div
            style={{
              x,
              display: "flex",
              gap: "1.5rem",
              width: "max-content",
            }}
          >
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item" style={{ flexShrink: 0 }}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
