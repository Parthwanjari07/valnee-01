"use client";

import Image from "next/image";
import { memo } from "react";
import { Handle, Position } from "reactflow";

const RotatingNode = memo(() => {
  return (
    <div className="w-16 h-16 rounded-md bg-[#00102A] border border-[#4FC3F7] shadow-[0_0_12px_#4FC3F7] flex items-center justify-center relative">
      {/* Handles for flow integration */}
      <Handle type="target" position={Position.Right} style={{ background: "#4FC3F7" }} />
      <Handle type="source" position={Position.Left} style={{ background: "#4FC3F7" }} />

      <Image
        src="/images/loading-node.png"
        alt="Loading"
        width={50}
        height={50}
        className="animate-spin-slow"
      />
    </div>
  );
});

export default RotatingNode;
