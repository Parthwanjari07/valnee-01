import { EdgeProps, BaseEdge } from 'reactflow';

function getMinimalStepPath({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: 'top' | 'right' | 'bottom' | 'left';
  targetPosition: 'top' | 'right' | 'bottom' | 'left';
}) {
  const offset = 30;
  let pathSegments = [`M${sourceX},${sourceY}`];

  // Define direction vectors for each handle
  const directions = {
    right: { x: 1, y: 0 },
    left: { x: -1, y: 0 },
    bottom: { x: 0, y: 1 },
    top: { x: 0, y: -1 }
  };

  const sourceDir = directions[sourcePosition];
  const targetDir = directions[targetPosition];

  // Exit perpendicular from source
  const sourceExitX = sourceX + sourceDir.x * offset;
  const sourceExitY = sourceY + sourceDir.y * offset;

  // Entry perpendicular to target
  const targetEntryX = targetX - targetDir.x * offset;
  const targetEntryY = targetY - targetDir.y * offset;

  // Always exit perpendicular from source
  pathSegments.push(`L${sourceExitX},${sourceExitY}`);

  // Create the corner based on handle orientations
  if (sourcePosition === 'right' || sourcePosition === 'left') {
    // Source is horizontal, go to target's Y level first
    pathSegments.push(`L${sourceExitX},${targetEntryY}`);
    pathSegments.push(`L${targetEntryX},${targetEntryY}`);
  } else {
    // Source is vertical, go to target's X level first
    pathSegments.push(`L${targetEntryX},${sourceExitY}`);
    pathSegments.push(`L${targetEntryX},${targetEntryY}`);
  }

  pathSegments.push(`L${targetX},${targetY}`);
  return pathSegments.join(' ');
}

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps) => {
  const edgePath = getMinimalStepPath({ 
    sourceX, 
    sourceY, 
    targetX, 
    targetY, 
    sourcePosition: sourcePosition || 'right',
    targetPosition: targetPosition || 'left'
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          stroke: "#bbb",
          strokeWidth: 2,
          fill: "none",
          strokeLinejoin: "round",
        }}
      />
      <path id={id} d={edgePath} fill="none" stroke="none" />
      <circle r={4} fill="#4FC3F7">
        <animateMotion dur="2s" repeatCount="indefinite" rotate="auto">
          <mpath href={`#${id}`} />
        </animateMotion>
      </circle>
    </>
  );
};

export default CustomEdge;