"use client";

import React from "react";
import Image from "next/image";
import ReactFlow, {
  Node,
  Edge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomEdge from "./CustomEdge";
import CustomNode from "./CustomNode";
import RotatingNode from "./RotatingNode";

const edgeStyle = {
  stroke: "#4FC3F7",
  strokeWidth: 4,
  opacity: 1,
};

const edgeTypes = {
  'custom': CustomEdge,
};

const initialNodes: Node[] = [
  { id: "1", type: "custom", position: { x: 60, y: 50 }, data: { label: "Client's request", sourceHandlePosition: "bottom", targetHandlePosition: "left" } },
  { id: "2", type: "custom", position: { x: 250, y: 150 }, data: { label: "Valnee", sourceHandlePosition: "right", targetHandlePosition: "top" } },
  { id: "3", type: "custom", position: { x: 400, y: 150 }, data: { label: "Processing", sourceHandlePosition: "right", targetHandlePosition: "left" } },
  { id: "4", type: "custom", position: { x: 650, y: 100 }, data: { label: "Design", sourceHandlePosition: "right", targetHandlePosition: "left" } },
  { id: "5", type: "custom", position: { x: 600, y: 200 }, data: { label: "Development", sourceHandlePosition: "right", targetHandlePosition: "left" } },
  { id: "6", type: "custom", position: { x: 60, y: 300 }, data: { label: "Ready", sourceHandlePosition: "left", targetHandlePosition: "right" } },
  { id: "loading", type: "rotating", position: { x: 480, y: 293 }, data: {} },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", type: "custom" },
  { id: "e2-3", source: "2", target: "3", type: "custom" },
  { id: "e3-4", source: "3", target: "4", type: "custom" },
  { id: "e3-5", source: "3", target: "5", type: "custom" },
  { id: "e4-6", source: "4", target: "loading", type: "custom" },
  { id: "e5-6", source: "5", target: "loading", type: "custom" },
  { id: "e6-loading", source: "loading", target: "6", type: "custom" },
  { id: "e6-6", source: "6", target: "1", type: "custom" }
];


const nodeTypes = {
  custom: CustomNode,
  rotating: RotatingNode,
};

export default function AIToolsSection() {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <section className="relative w-full bg-[#00020D] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Text Column */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] rounded-md cursor-default bg-cover bg-center" style={{ backgroundImage: "url(/images/aitoolsbg.png)" }}>
            <div className="flex flex-col items-center justify-center h-full">
            {/* Top Div with Image */}
              <Image src="/images/aitools.png" alt="AI Tools" width={350} height={350} className="w-auto h-full" />
            </div>

            {/* Bottom Div with Text */}
            <div className="text-left px-10">
              <h3>
                <span className="text-[#ff66db]">AI</span> <span className="text-[#fff]/30">that makes your</span> <span className="text-[#fff]">work smarter</span>
              </h3>
              <p className="text-gray-400 mt-2">
                Discover the power of AI to streamline your processes and enhance productivity.
              </p>
            </div>
        </div>

        {/* Right Column with Background */}
        <div className="lg:w-1/2 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#001F3F]/40 rounded-full border border-blue-400 text-sm mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span>AI-Powered Solutions</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-regular leading-tight mb-4">
            Revolutionizing Your Workflow<br />with AI Technology
          </h2>
          <p className="text-gray-300 mb-6">
            Harness the potential of AI to automate tasks, enhance decision-making, and unlock new opportunities for innovation.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/10 rounded-md border border-white/20 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span>AI-driven process automation</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/10 rounded-md border border-white/20 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span>Intelligent data analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/10 rounded-md border border-white/20 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span>Personalized AI solutions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
