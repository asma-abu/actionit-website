// app/page.tsx
import React from "react";

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        backgroundColor: "#f0f0f0",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        🎉 Hello, Next.js!
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Your deployment is working correctly.
      </p>
      <button
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#6200ee",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => alert("Button works! ✅")}
      >
        Click Me
      </button>
    </main>
  );
}
