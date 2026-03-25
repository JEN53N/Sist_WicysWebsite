"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Attempt to start audio. Browsers typically block autoplay without interaction.
    const tryPlayAudio = async () => {
      if (audioRef.current && !isPlaying) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay blocked. User interaction needed to play audio.");
        }
      }
    };

    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        tryPlayAudio();
      }
    };

    // Listen for clicking anywhere to play the sound
    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, [hasInteracted, isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setHasInteracted(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="/ctf/harry_potter_theme.mp3" preload="none" />
      <button 
        onClick={toggleMute}
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
          zIndex: 9999,
          background: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,140,0,0.4)",
          color: "var(--color-cream, white)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          backdropFilter: "blur(5px)",
          transition: "all 0.3s ease",
        }}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? "📻" : "🔇"}
      </button>
    </>
  );
}
