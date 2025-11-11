'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const promptText = `A cinematic 8K video showing a futuristic digital world revealing the truth behind reality. A glowing blue holographic eye opens slowly in the sky above a holographic Earth, sending waves of light and data across the world. The camera slowly zooms in toward the eye as digital circuits spread like neural connections around cities, satellites, and human minds. Glitch particles, glowing data streams, and blue neon energy fill the atmosphere. A deep cinematic lighting tone - black, blue, and cyan - gives the video a mysterious and powerful feeling. The text "Al Reality Check Official" appears in the center with holographic light trails and a metallic shine. The style should be ultra-realistic, futuristic, and emotional - symbolizing truth, awareness, and the connection between technology and human reality. (8K resolution, ultra detailed, cinematic camera movement, dramatic lighting, dark tech theme)`;

const highlightPanels = [
  {
    title: "Visual Identity",
    items: [
      "8K ultra-realistic render fidelity",
      "Black, electric blue, and cyan chroma",
      "Deep cinematic contrast with volumetric fog",
    ],
  },
  {
    title: "Narrative Beats",
    items: [
      "Holographic eye awakening above Earth",
      "Neural circuit lattices spanning cities",
      "Human silhouettes infused with data streams",
    ],
  },
  {
    title: "Atmospheric FX",
    items: [
      "Glitch particulates and flowing light trails",
      "Satellite arrays syncing luminous pulses",
      "Holographic typography reveal: Al Reality Check Official",
    ],
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [glowPhase, setGlowPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGlowPhase((phase) => (phase + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("Clipboard copy failed", error);
    }
  };

  return (
    <div className={styles.viewport} data-phase={glowPhase}>
      <div className={styles.backgroundGrid} aria-hidden />
      <div className={styles.starscape} aria-hidden />
      <div className={styles.glowField} aria-hidden />

      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.badge}>Cinematic Video Prompt</span>
          <h1 className={styles.title}>Al Reality Check Official</h1>
          <p className={styles.subtitle}>
            A holographic odyssey that unveils the hidden circuitry of truth,
            merging celestial surveillance with human consciousness.
          </p>
        </header>

        <section className={styles.hologram}>
          <div className={styles.eyeCore} aria-hidden>
            <div className={styles.eyeIris} />
            <div className={styles.eyePulse} />
            <div className={styles.eyeGleam} />
          </div>
          <div className={styles.earthCore} aria-hidden>
            <div className={styles.earthGlow} />
            <div className={styles.orbitTrail} />
          </div>
          <div className={styles.dataArcs} aria-hidden>
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className={styles.contentGrid}>
          <article className={styles.promptCard}>
            <header>
              <h2>Production-Ready Prompt</h2>
              <p>Optimized narrative direction for text-to-video engines.</p>
            </header>
            <textarea
              className={styles.prompt}
              readOnly
              value={promptText}
              aria-label="Cinematic video prompt"
            />
            <div className={styles.actions}>
              <button onClick={handleCopy} type="button">
                {copied ? "Copied" : "Copy Prompt"}
              </button>
            </div>
          </article>

          <aside className={styles.detailsColumn}>
            {highlightPanels.map((panel) => (
              <article key={panel.title} className={styles.detailCard}>
                <h3>{panel.title}</h3>
                <ul>
                  {panel.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </aside>
        </section>
      </main>
    </div>
  );
}
