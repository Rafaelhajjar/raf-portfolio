"use client";
import { useEffect, useRef, useState } from "react";

// Helper to get age in years (with decimals)
function getAge() {
  // Paris time is CET/CEST, but for simplicity, use UTC+1 (CET) and adjust for DST if needed
  // 2005-02-10T10:00:00Z is 11:00 Paris time (CET, UTC+1)
  const birth = new Date(Date.UTC(2005, 1, 10, 10, 0, 0));
  const now = new Date();
  const diff = now.getTime() - birth.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.2425); // average year length
  return years;
}

function AgeCounter() {
  const [age, setAge] = useState(getAge());
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    const update = () => {
      setAge(getAge());
      raf.current = requestAnimationFrame(update);
    };
    raf.current = requestAnimationFrame(update);
    return () => {
      if (raf.current !== undefined) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, []);

  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>{age.toFixed(8)}</span>
  );
}

function Section({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode, defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: 28, width: "100%" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "none",
          border: "none",
          fontWeight: 700,
          fontSize: 18,
          cursor: "pointer",
          padding: 0,
          marginBottom: 0,
          display: "block",
          color: "#3a3631",
          textAlign: "left",
          outline: "none",
          lineHeight: 1.5,
        }}
        aria-expanded={open}
      >
        <span style={{ marginRight: 10, fontSize: 16 }}>{open ? "▼" : "►"}</span>
        [{title}]
      </button>
      {open && (
        <div style={{ fontSize: 14, color: "#4d4740", marginTop: 10, marginLeft: 28, fontWeight: 400, lineHeight: 1.6 }}>
          {children}
        </div>
      )}
    </div>
  );
}

const ListItem = ({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) => (
  <li style={{ marginBottom: "0.5em", ...style }}>{children}</li>
);

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong style={{ fontWeight: 600 }}>{children}</strong>
);

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#f7f3ee",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        fontFamily: "monospace, 'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
        color: "#2d2926",
        fontSize: 15,
      }}
    >
      <main
        style={{
          maxWidth: 1100,
          width: "100%",
          padding: "48px 24px 32px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: 22, marginBottom: 6, color: "#3a3631", letterSpacing: "-0.5px", textAlign: "left", lineHeight: 1.2 }}>
          Rafael Hajjar
        </h1>
        <div style={{ fontSize: 14, marginBottom: 12, color: "#5a5247", textAlign: "left" }}>
          <AgeCounter /> years old
        </div>
        <div style={{ fontSize: 15, marginBottom: 32, color: "#6d655c", textAlign: "left", maxWidth: 700, fontStyle: "italic", lineHeight: 1.6 }}>
          Think, Learn, Build until the truth emerges.
        </div>

        <Section title="About" defaultOpen={true}>
          <p>Born in Paris and raised in London, now pursuing my studies in Philadelphia.</p>
          <p>Native in English, French, and Arabic; intermediate Spanish and Portuguese.</p>
          <p>Interests: AI/ML, Algorithmic Trading, Biomimetics, Robotics, Mathematical modeling, Entrepreneurship.</p>
        </Section>

        <Section title="Education">
          <ul style={{ listStyle: "none", paddingLeft: 0}}>
            <ListItem><Strong>University of Pennsylvania</Strong> | Philadelphia, PA</ListItem>
            <ListItem>Bachelor of Science in Engineering in Artifical Intelligence (Expected 2027)</ListItem>
            <ListItem>Masters of Science in Engineering in Robotics (Expected 2027)</ListItem>
            <ListItem><Strong>Latymer Upper School</Strong> | London, England</ListItem>
            <ListItem>A-Levels: 3 A*, 1 A | GCSEs: eleven 9s, two 8s | SAT: 1560 </ListItem>
          </ul>
        </Section>

        <Section title="Experience">
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <ListItem><Strong>Quantitative Research Intern</Strong> | Point72 (June 2025 – August 2025)</ListItem>
            <ListItem style={{ marginLeft: "1em" }}>Build machine learning models to predict stock market trends.</ListItem>
            <ListItem><Strong>Associate Consultant Intern: Advanced Analytics</Strong> | Bain & Company (June 2024 – August 2024)</ListItem>
            <ListItem style={{ marginLeft: "1em" }}>Due diligence, CLV Models, and RAG Chatbots.</ListItem>
            <ListItem><Strong>Data Science and Machine Learning Intern</Strong> | Danone (May 2023 – July 2023)</ListItem>
            <ListItem style={{ marginLeft: "1em" }}>Optimized pricing for 3,000+ SKUs using ML models.</ListItem>
            <ListItem><Strong>Research Intern</Strong> | MIT Biomimetic Robotics (May 2022 – July 2022)</ListItem>
            <ListItem style={{ marginLeft: "1em" }}>Designed Python-based simulations for artificial tendon deformation.</ListItem>
            <ListItem><Strong>Founder of Future Skills Program</Strong> | Jusoor (January 2020 – Present)</ListItem>
            <ListItem style={{ marginLeft: "1em" }}>Teaching 200+ refugees math, computer science, and robotics.</ListItem>
            <ListItem><Strong>President, Penn Autonomous Racing Club</Strong> | University of Pennsylvania (September 2023 – Present)</ListItem>
            <ListItem style={{ marginLeft: "1em" }}>Leading autonomous racing club, guiding 20+ students.</ListItem>
          </ul>
        </Section>

        <Section title="Projects">
           <ul style={{ listStyle: "none", paddingLeft: 0 }}>
           <ListItem><Strong> Neural Architectures for Financial Prediction </Strong> | Independent undergraduate research Upenn (2025)</ListItem>
           <ListItem><Strong>Deformations in Neural Radiance Feilds</Strong> | Independent undergraduate research Upenn (2025)</ListItem>
            <ListItem><Strong>Overlapped handwriting recognition</Strong> | Independent undergraduate research Upenn (2024)</ListItem>
            <ListItem><Strong>Racing line optimization around banked corners (ML)</Strong> | Research with Dr Sung Upenn (2024)</ListItem>
            <ListItem><Strong>Self navigating model airplanes</Strong> | Research with Dr Frey and Dr Talebinejad at MIT (2023)</ListItem>
            <ListItem><Strong>Artificial tendon deformation analysis for use on Cheetah robot</Strong> | Research with MIT Biomimetic laboratory (2022)</ListItem>
          </ul>
        </Section>

        <Section title="Awards">
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <ListItem>Cubist Hackathon Finalist | Cubist/Point72 (2025)</ListItem>
            <ListItem>International Mathematical Olympiad | IMO (2022)</ListItem>
            <ListItem>Physics Olympiad Top Gold (Top 0.1%) | BPhO (2021)</ListItem>
          </ul>
        </Section>

        <Section title="Contact">
          <p>Email: <a href="mailto:rhajjar@seas.upenn.edu" style={{ color: "#7c6f5f", textDecoration: "underline" }}>rhajjar@seas.upenn.edu</a></p>
        </Section>

        <div style={{ marginTop: 36, fontSize: 14, textAlign: "left" }}>
          <a
            href="https://linkedin.com/in/rafael-hajjar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: 20,
              color: "#7c6f5f",
              textDecoration: "none",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.color = '#bfae99')}
            onMouseOut={e => (e.currentTarget.style.color = '#7c6f5f')}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Rafaelhajjar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#7c6f5f",
              textDecoration: "none",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.color = '#bfae99')}
            onMouseOut={e => (e.currentTarget.style.color = '#7c6f5f')}
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
