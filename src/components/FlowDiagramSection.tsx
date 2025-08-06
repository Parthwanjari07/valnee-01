"use client";

import React from "react";
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import Image from "next/image";
import { memo } from "react";

const sharedNodeStyle = {
  padding: "9px 18px",
  borderRadius: "8px",
  border: "1px solid #4FC3F7",
  background: "rgba(13, 25, 45, 0.6)",
  color: "#fff",
  fontWeight: 500,
  fontSize: "20px",
  boxShadow: "0 0 12px #4FC3F7",
  backdropFilter: "blur(4px)",
};

const CustomNode = ({ data }: any) => (
  <div style={sharedNodeStyle}>{data.label}</div>
);

export const RotatingNode = memo(() => {
  return (
    <div className="w-15 h-15 rounded-md bg-[#00102A] border border-[#4FC3F7] shadow-[0_0_12px_#4FC3F7] flex items-center justify-center">
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


const edgeStyle = {
  stroke: "#4FC3F7",
  strokeWidth: 4,
  opacity: 1,
};

const initialNodes: Node[] = [
  { id: "1", type: "custom", position: { x: 50, y: 50 }, data: { label: "Client's request" } },
  { id: "2", type: "custom", position: { x: 250, y: 150 }, data: { label: "Valnee" } },
  { id: "3", type: "custom", position: { x: 430, y: 150 }, data: { label: "Processing" } },
  { id: "4", type: "custom", position: { x: 700, y: 80 }, data: { label: "Design" } },
  { id: "5", type: "custom", position: { x: 700, y: 250 }, data: { label: "Development" } },
  { id: "6", type: "custom", position: { x: 250, y: 300 }, data: { label: "Ready" } },
  { id: "loading", type: "rotating", position: { x: 500, y: 300 }, data: {} },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: edgeStyle, className: "flow-path-edge" },
  { id: "e2-3", source: "2", target: "3", animated: true, style: edgeStyle, className: "flow-path-edge" },
  { id: "e3-4", source: "3", target: "4", animated: true, style: edgeStyle, className: "flow-path-edge" },
  { id: "e3-5", source: "3", target: "5", animated: true, style: edgeStyle, className: "flow-path-edge" },
  { id: "e4-6", source: "4", target: "6", animated: true, style: edgeStyle, className: "flow-path-edge" },
  { id: "e5-6", source: "5", target: "6", animated: true, style: edgeStyle, className: "flow-path-edge" },
  { id: "e6-loading", source: "6", target: "loading", animated: true, style: edgeStyle, className: "flow-path-edge" },
];

const nodeTypes = {
  custom: CustomNode,
  rotating: RotatingNode,
};

export default function FlowDiagramSection() {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <section className="relative w-full bg-[#00020D] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Text Column */}
        <div className="lg:w-1/2 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#001F3F]/40 rounded-full border border-blue-400 text-sm mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span>Lorem ipsum</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Lorem ipsum dolor<br />sit amet, consectetur
          </h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/10 rounded-md border border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span>Lorem ipsum dolor</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/10 rounded-md border border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span>Lorem ipsum dolor</span>
            </li>
          </ul>
        </div>

        {/* Right Column with Background */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] cursor-default bg-cover bg-center" style={{ backgroundImage: "url(/images/workflow.png)" }}>
          {/* Top 75% - React Flow */}
          <div className="items-start relative mt-5 mx-5 rounded-md border cursor-default border-white/30 bg-white/2 " style={{ height: "300px" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              className="cursor-default"
              fitView
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              panOnScroll={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              panOnDrag={false}
              proOptions={{ hideAttribution: true }}
              style={{ background: "transparent" }}
              defaultEdgeOptions={{
                style: edgeStyle,
                animated: true,
              }}
            >
              {/* Optionally include controls */}
              {/* <Controls /> */}
            </ReactFlow>
          </div>

          {/* Bottom 25% - Title + subtitle */}
          <div className="h-[25%] flex flex-col mt-20 px-4">
            <h2 className="text-white text-xl font-semibold">Built with clarity, delivered with precision.</h2>
            <p className="text-gray-400 mt-2 max-w-md text-sm">
              Every step in our workflow is optimized to bring your ideas to life seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
