"use client";

import React from "react";
import ReactFlow, {
  Node,
  Edge,
} from "reactflow";

import "reactflow/dist/style.css";

type WorkflowKey = 'lean' | 'enterprise' | 'agile' | 'quick';

const edgeStyle = {
  stroke: "#4FC3F7",
  strokeWidth: 3,
  opacity: 1,
};

// Simple node component for vertical flows
const SimpleNode = ({ data }: { data: { label: string } }) => (
  <div className="px-4 py-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/50 rounded-lg shadow-lg text-white text-center min-w-[160px] backdrop-blur-sm">
    <div className="text-sm font-medium">{data.label}</div>
  </div>
);

const nodeTypes = {
  simple: SimpleNode,
};

const workflows: Record<WorkflowKey, {
  title: string;
  description: string;
  nodes: Node[];
  edges: Edge[];
}> = (() => {
  // Vertical spacing between nodes
  const ySpacing = 120;
  // Horizontal spacing between workflows
  const workflowSpacing = 250;
  
  const workflowXPositions = {
    lean: 0,
    enterprise: workflowSpacing,
    agile: workflowSpacing * 2,
    quick: workflowSpacing * 3,
  };

  const buildVerticalNodes = (
    idPrefix: string,
    labels: string[],
    workflow: WorkflowKey
  ): Node[] =>
    labels.map((label, i) => ({
      id: `${idPrefix}-${i + 1}`,
      type: "simple",
      position: { x: workflowXPositions[workflow], y: i * ySpacing + 100 },
      data: { label },
    }));

  const buildVerticalEdges = (idPrefix: string, nodeCount: number): Edge[] =>
    Array.from({ length: nodeCount - 1 }).map((_, i) => ({
      id: `${idPrefix}-e${i + 1}`,
      source: `${idPrefix}-${i + 1}`,
      target: `${idPrefix}-${i + 2}`,
      style: edgeStyle,
      animated: true,
    }));

  return {
    lean: {
      title: "Lean Startup-Oriented",
      description: "Fast-moving, startup-focused projects with MVP-first approach",
      nodes: buildVerticalNodes("lean", [
        "Free Consultation",
        "Initial Quotation",
        "1-Week POC",
        "MVP Development",
        "Client Testing",
        "Iterative Refinement",
        "Launch",
        "Post-Launch Support",
      ], "lean"),
      edges: buildVerticalEdges("lean", 8),
    },
    enterprise: {
      title: "Full-Service End-to-End",
      description: "Comprehensive workflow for enterprise clients",
      nodes: buildVerticalNodes("ent", [
        "Discovery Call",
        "Business Analysis",
        "Cost Estimate",
        "Wireframes",
        "UI Design",
        "Development",
        "QA Testing",
        "Staging Deploy",
        "Client UAT",
        "Final Launch",
        "Maintenance",
      ], "enterprise"),
      edges: buildVerticalEdges("ent", 11),
    },
    agile: {
      title: "Agile Sprint-Based",
      description: "Scrum/Kanban sprints and continuous delivery",
      nodes: [
        ...buildVerticalNodes("agile", [
          "Product Discovery",
          "Sprint 0 Setup",
          "Bi-Weekly Sprints",
          "Sprint Demos",
          "Continuous Deploy",
          "MVP Delivery",
          "Product Scaling",
        ], "agile")
      ],
      edges: [
        { id: "agile-e1", source: "agile-1", target: "agile-2", style: edgeStyle, animated: true },
        { id: "agile-e2", source: "agile-2", target: "agile-3", style: edgeStyle, animated: true },
        { id: "agile-e3", source: "agile-3", target: "agile-4", style: edgeStyle, animated: true },
        { id: "agile-e4", source: "agile-4", target: "agile-3", style: edgeStyle, animated: true },
        { id: "agile-e5", source: "agile-3", target: "agile-5", style: edgeStyle, animated: true },
        { id: "agile-e6", source: "agile-5", target: "agile-6", style: edgeStyle, animated: true },
        { id: "agile-e7", source: "agile-6", target: "agile-7", style: edgeStyle, animated: true },
      ],
    },
    quick: {
      title: "Quick Project Lifecycle",
      description: "For fast marketing/landing page builds",
      nodes: buildVerticalNodes("quick", [
        "Initial Call",
        "Fixed-Price Quote",
        "Design & Approval",
        "Development",
        "QA & Review",
        "Deployment",
        "Support Package",
      ], "quick"),
      edges: buildVerticalEdges("quick", 7),
    },
  };
})();

// Combine all workflows into single nodes and edges arrays
const allNodes: Node[] = [];
const allEdges: Edge[] = [];

Object.values(workflows).forEach(workflow => {
  allNodes.push(...workflow.nodes);
  allEdges.push(...workflow.edges);
});

// Add header nodes for each workflow
const headerNodes: Node[] = Object.entries(workflows).map(([key, workflow], index) => ({
  id: `header-${key}`,
  type: "simple",
  position: { x: index * 250, y: 0 },
  data: { 
    label: (
      <div className="text-center">
        <div className="font-bold text-base mb-1">{workflow.title}</div>
        <div className="text-xs text-gray-300 opacity-80">{workflow.description}</div>
      </div>
    )
  },
}));

allNodes.push(...headerNodes);

export default function VerticalWorkflowsComparison() {
  return (
    <section className="w-full bg-[#00020D] text-white py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Development Workflow Comparison</h2>
          <p className="text-gray-400 text-lg">
            Compare different project approaches side by side
          </p>
        </div>

        <div className="rounded-lg border border-white/20 bg-black/20 overflow-hidden" style={{ height: 1000 }}>
          <ReactFlow
            nodes={allNodes}
            edges={allEdges}
            nodeTypes={nodeTypes}
            fitView
            nodesDraggable={false}
            nodesConnectable={false}
            panOnScroll={true}
            zoomOnScroll={true}
            panOnDrag={true}
            proOptions={{ hideAttribution: true }}
            style={{ background: "transparent" }}
            minZoom={0.5}
            maxZoom={1.5}
          />
        </div>
      </div>
    </section>
  );
}