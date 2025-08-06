// src/components/WorkflowDiagram.tsx

"use client";

import React, { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Image from 'next/image';

// Custom Node Component
const CustomNode = ({ data }: { data: { label: string; icon?: string } }) => {
  return (
    <div className="px-4 py-2 bg-blue-600/80 border border-blue-400/50 rounded-lg text-white text-sm backdrop-blur-sm shadow-lg hover:bg-blue-500/80 transition-all duration-300">
      {data.icon && (
        <div className="flex items-center gap-2">
          <Image src={data.icon} alt={data.label} width={16} height={16} />
          <span>{data.label}</span>
        </div>
      )}
      {!data.icon && <span>{data.label}</span>}
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 50, y: 50 },
    data: { label: "Client's request" },
    className: 'animate-pulse',
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 200, y: 120 },
    data: { label: 'Valnee' },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 350, y: 50 },
    data: { label: 'Processing' },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 450, y: 120 },
    data: { label: 'Design' },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 450, y: 180 },
    data: { label: 'Development' },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 200, y: 240 },
    data: { label: 'Ready' },
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 350, y: 240 },
    data: { label: '' }, // Empty node for visual connection
    style: { opacity: 0.3 },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#3B82F6', strokeWidth: 2 },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: '#3B82F6', strokeWidth: 2 },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    style: { stroke: '#3B82F6', strokeWidth: 2 },
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    animated: true,
    style: { stroke: '#3B82F6', strokeWidth: 2 },
  },
  {
    id: 'e4-7',
    source: '4',
    target: '7',
    animated: true,
    style: { stroke: '#3B82F6', strokeWidth: 2 },
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    animated: true,
    style: { stroke: '#3B82F6', strokeWidth: 2 },
  },
  {
    id: 'e7-6',
    source: '7',
    target: '6',
    animated: true,
    style: { stroke: '#3B82F6', strokeWidth: 2 },
  },
];

export default function WorkflowDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [animationPhase, setAnimationPhase] = useState(0);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Animate nodes appearing sequentially
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationPhase((phase) => (phase + 1) % 8);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#00020D] to-[#001122] min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">Lorem ipsum</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Lorem ipsum dolor sit amet,{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  consectetur
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600/30 rounded border border-blue-400/50 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                  </div>
                  <span className="text-gray-300">Lorem ipsum dolor</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600/30 rounded border border-blue-400/50 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                  </div>
                  <span className="text-gray-300">Lorem ipsum dolor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Flow diagram */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 border border-blue-400/20 backdrop-blur-sm shadow-2xl">
              <div className="mb-6">
                <h3 className="text-blue-300 text-lg font-semibold mb-2">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="h-96 rounded-lg overflow-hidden border border-blue-400/20 bg-gradient-to-br from-slate-900/50 to-blue-900/30">
                <ReactFlow
                  nodes={nodes.map((node, index) => ({
                    ...node,
                    hidden: index > animationPhase,
                    className: index === animationPhase ? 'animate-bounce' : '',
                  }))}
                  edges={edges.map((edge) => ({
                    ...edge,
                    animated: true,
                    style: { 
                      ...edge.style, 
                      strokeDasharray: '5,5',
                      animation: 'dash 1s linear infinite',
                    },
                  }))}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  nodeTypes={nodeTypes}
                  fitView
                  attributionPosition="bottom-left"
                  className="workflow-canvas"
                >
                  <Background 
                    color="#1e40af" 
                    gap={20} 
                    size={1}
                    variant={"dots" as any}
                  />
                </ReactFlow>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
        .workflow-canvas .react-flow__attribution {
          display: none !important;
        }
      `}</style>
    </section>
  );
}