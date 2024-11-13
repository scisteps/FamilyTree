import React, { useCallback, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
  
const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: '1', createNode: () => {} },
  },
  {
    id: '2',
    position: { x: 0, y: 100 },
    data: { label: '2', createNode: () => {} },
  },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const CustomNode = ({ id, data }) => {
  const handleClick = () => {
    data.createNode(id);
  };

  return (
    <div>
      <div>{data.label}</div>
      <button onClick={handleClick}>Add Node</button>
      <Handle type="source" position="right" />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeId, setNodeId] = useState(3); // Start with the next available ID

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const createNode = useCallback(
    (sourceId) => {
      const newNodeId = `${nodeId}`;
      const newNode = {
        id: newNodeId,
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: { label: newNodeId, createNode },
        type: 'custom',
      };
      const newEdge = { id: `e${sourceId}-${newNodeId}`, source: sourceId, target: newNodeId };

      setNodes((nds) => nds.concat(newNode));
      setEdges((eds) => eds.concat(newEdge));
      setNodeId((id) => id + 1); // Increment the node ID counter
    },
    [setNodes, setEdges, nodeId]
  );

  // Set the createNode function in the initial nodes
  const nodesWithCreateNode = nodes.map((node) => ({
    ...node,
    data: { ...node.data, createNode },
  }));

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodesWithCreateNode}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

export default Flow;
