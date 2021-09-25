import React from "react";

export default function InfoTextWithTitle({ title, value }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0.5em 0",
      }}
    >
      <span style={{ fontSize: 18, fontWeight: "bold" }}>{title}</span>
      <span style={{ fontSize: 16, fontWeight: "normal" }}>{value}</span>
    </div>
  );
}
