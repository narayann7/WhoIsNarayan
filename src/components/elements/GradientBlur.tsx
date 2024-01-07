import React from "react";
import base_assets from "../../assets/base_assets";

function GradientBlur() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${base_assets.gradient_blur})`,
        height: "100vh",
        width: "100vw",
        fill: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        filter: "blur(70px)",
        // position: "absolute",
        // opacity: 0.7,
      }}
    >
      <h4>hello it narayan</h4>
    </div>
  );
}

export default GradientBlur;

// <div
// className="center_up"
// style={{
//   background: "rgba(217, 13, 16, 0.35)",
//   filter: "blur(150px)",
//   transform: "rotate(145deg)",
//   position: "absolute",
//   width: "1000px",
//   height: "200px",
//   top: "200px",
//   right: "200px",
// }}
// />

// background: "rgba(217, 13, 16, 0.5)",
// filter: "blur(230px)",
// opacity: 0.7,
// transform: "rotate(150deg)",
// position: "absolute",
// width: "1000px",
// height: "400px",
// top: "200px",
// right: "400px",
