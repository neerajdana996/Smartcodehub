import React from 'react';
import ReactFlow ,{Background}from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'User' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Design The Models </div> },
    position: { x: 100, y: 125 },
  },
  
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Source Code' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

export const ReactFlowDiagram =  () => (
  <div style={{ height: 300 }}>
    <ReactFlow elements={elements} >
    <Background
    color={'#52006A'}
      variant="dots"
      gap={25}
      size={0.5}
    />
    </ReactFlow>
  </div>
);