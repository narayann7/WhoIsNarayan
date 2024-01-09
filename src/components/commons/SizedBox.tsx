import React from "react";

export default function SizedBox(props: { width?: string; height?: string }) {
  const { width, height } = props;
  return (
    <div
      style={{
        width: width || "0px",
        height: height || "0px",
      }}
    />
  );
}
