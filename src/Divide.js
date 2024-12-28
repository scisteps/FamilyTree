import React, { useState } from 'react';
import './Divide.css';

const Divide = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, left: 200, top: 200, color: 'red', title: 'Box 1' } // Initial single box
  ]);
  const [lines, setLines] = useState([]); // To store connectors

  const handleBoxClick = (id, left, top) => {
    // Change clicked box to red
    setBoxes((prevBoxes) => prevBoxes.map(box => 
      box.id === id ? { ...box, color: 'red' } : box
    ));

    // Create four new boxes positioned around the original
    const distance = 100; // Distance between new boxes
    const newBoxes = [
      { id: boxes.length + 1, left: left - distance, top: top, color: 'blue', title: `Box ${boxes.length + 1}` }, // Left
      { id: boxes.length + 2, left: left + distance, top: top, color: 'blue', title: `Box ${boxes.length + 2}` }, // Right
      { id: boxes.length + 3, left: left, top: top - distance, color: 'blue', title: `Box ${boxes.length + 3}` }, // Up
      { id: boxes.length + 4, left: left, top: top + distance, color: 'blue', title: `Box ${boxes.length + 4}` }  // Down
    ];

    // Add connectors
    const newLines = newBoxes.map((box) => ({ from: { left, top }, to: { left: box.left, top: box.top } }));

    setBoxes((prevBoxes) => [...prevBoxes, ...newBoxes]);
    setLines((prevLines) => [...prevLines, ...newLines]);
  };

  return (
    <div className="divide-container">
      {lines.map((line, index) => {
        const x1 = line.from.left;
        const y1 = line.from.top;
        const x2 = line.to.left;
        const y2 = line.to.top;
        const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

        return (
          <div
            key={index}
            className="line"
            style={{
              left: `${x1}px`,
              top: `${y1}px`,
              width: `${length}px`,
              height: `5px`,
              transform: `rotate(${angle}deg)`,
              transformOrigin: '0 50%'
            }}
          />
        );
      })}
      {boxes.map((box) => (
        <div
          key={box.id}
          className="box"
          style={{
            left: `${box.left}px`,
            top: `${box.top}px`,
            backgroundColor: box.color
          }}
          onClick={() => handleBoxClick(box.id, box.left, box.top)}
        >
          <span className="box-title">{box.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Divide;
