"use client";

import { memo } from "react";
import { Handle, Position } from "reactflow";

const getHandlePosition = (pos?: string): Position => {
  switch (pos) {
    case "top":
      return Position.Top;
    case "bottom":
      return Position.Bottom;
    case "left":
      return Position.Left;
    case "right":
      return Position.Right;
    default:
      return Position.Bottom; // default fallback
  }
};

const sharedStyle: React.CSSProperties = {
  padding: "9px 18px",
  borderRadius: "8px",
  border: "1px solid #4FC3F7",
  background: "rgba(13, 25, 45, 0.6)",
  color: "#fff",
  fontWeight: 500,
  fontSize: "20px",
  fontFamily: "var(--font-sf-pro)",
  boxShadow: "0 0 12px #4FC3F7",
  backdropFilter: "blur(4px)",
  textAlign: "center",
  position: "relative",
};

const CustomNode = memo(({ data }: any) => {
  const sourcePos = getHandlePosition(data.sourceHandlePosition);
  const targetPos = getHandlePosition(data.targetHandlePosition);

  return (
    <div style={sharedStyle}>
      {/* Conditionally render handles based on data */}
      <Handle
        type="source"
        position={sourcePos}
        id="source"
        style={{ background: "#4FC3F7" }}
      />
      <Handle
        type="target"
        position={targetPos}
        id="target"
        style={{ background: "#4FC3F7" }}
      />

      {data.label}
    </div>
  );
});

export default CustomNode;
