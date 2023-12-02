import { useState } from "react";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#000",
        fontFamily: "sans-serif",
        fontWeight: 700
      }}

    >
      <h1 >
        🛠️ under development | check out v1 👇
      </h1>
      <h1
        onClick={() => {
          window.open("https://narayann.dev");
        }}
        style={{
          cursor: "pointer",
          fontSize: "2rem",
          color: "#000",
          fontWeight: 700,
          textDecoration: "underline"
        }}
      >
        narayann.dev
      </h1>
    </div>
  );
}

export default App;
