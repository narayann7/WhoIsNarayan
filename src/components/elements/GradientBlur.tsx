import React from "react";
import base_assets from "../../assets/base_assets";

function GradientBlur() {
  return (
    <div
      style={{
        background: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //gradient_blur.png in src/assets folder
        // backgroundImage: `url(${base_assets.gradient_blur})`,
      }}
    >
      {/* <div
        className="upper_left"
        style={{
          background: "rgba(73, 10, 11, 0.65)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          filter: "blur(378px)",
          transform: "rotate(135deg)",
          flexShrink: 0,
          position: "absolute",
          width: "939.774px",
          height: "359.817px",
          right: "1000px",
          top: "50px",
        }}
      />

      <div
        className="center_down"
        style={{
          background: "rgba(73, 10, 11, 0.81)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          filter: "blur(338px)",
          transform: "rotate(135deg)",
          flexShrink: 0,
          position: "absolute",
          width: "1047.765px",
          height: "344.807px",
        }}
      />

      <div
        className="center_up"
        style={{
          background: "rgba(217, 13, 16, 0.33)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          filter: "blur(431px)",
          transform: "rotate(135deg)",
          flexShrink: 0,
          position: "absolute",
          width: "1178.263px",
          height: "255.31px",
          top: "50px",
          right: "200px",
        }}
      />
      <div
        className="center"
        style={{
          background: "rgba(101, 67, 106, 0.77)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          filter: "blur(401px)",
          transform: "rotate(135deg)",
          flexShrink: 0,
          position: "absolute",
          width: "810.516px",
          height: "325.406px",
          left: "800px",
          top: "200px",
        }}
      />
      <div
        className="center_up_2"
        style={{
          background: "rgba(92, 31, 50, 0.70)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          filter: "blur(338px)",
          transform: "rotate(135deg)",
          flexShrink: 0,
          position: "absolute",
          width: "1205.651px",
          height: "282.927px",
          left: "800px",
        }}
      />

      <div
        className="right_down"
        style={{
          background: "rgba(70, 50, 94, 0.7)",
          boxShadow: "0px 40px 40px 0px rgba(0, 0, 0, 0.25)",
          filter: "blur(150px)",
          backdropFilter: "blur(0px)",
          transform: "rotate(140deg)",
          flexShrink: 0,
          position: "absolute",
          width: "1000px",
          height: "400px",
          left: "900px",
          top: "300px",
        }}
      /> */}
    </div>
  );
}

export default GradientBlur;
