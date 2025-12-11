"use client";

import Link from "next/link";

export default function NERFDeformationCaseStudy() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#f7f3ee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "monospace, 'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
        color: "#2d2926",
        fontSize: 15,
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: 1100,
          padding: "24px 24px 16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: 20, color: "#3a3631", letterSpacing: "-0.5px" }}>
          Deformations in Neural Radiance Fields
        </h1>
        <Link
          href="/"
          style={{
            color: "#7c6f5f",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          ← Back to Portfolio
        </Link>
      </header>
      
      <main
        style={{
          width: "100%",
          maxWidth: 1100,
          flex: 1,
          padding: "0 24px 24px 24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 120px)",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <iframe
            src="/case-studies/nerf-deformation.pdf"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            title="Deformations in Neural Radiance Fields PDF"
          />
        </div>
        
        <div style={{ marginTop: "16px", fontSize: "14px", color: "#6d655c", textAlign: "center" }}>
          <a
            href="/case-studies/nerf-deformation.pdf"
            download
            style={{
              color: "#7c6f5f",
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            Download PDF
          </a>
        </div>
      </main>
    </div>
  );
}
