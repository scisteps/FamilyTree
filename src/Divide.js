import React, { useState, useRef } from 'react';
import './Divide.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mered from './Images/thefam/mered.jpg';
import syd1 from './Images/thefam/syd1.jpg';
import Karl from './Images/thefam/karl.jpg';
import sam2 from './Images/thefam/sam.jpg';
import linda from './Images/thefam/Linda.jpg';
import allan from './Images/thefam/Allan.jpg';
import joan from './Images/thefam/joan.jpg';
import paul from './Images/thefam/paul.jpg';
import brenda from './Images/thefam/brenda.jpg';
import adrian from './Images/thefam/adrian.jpg';
import bob from './Images/thefam/bob barigye.jpg';


const Divide = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, left: 300, top: 200, color: 'grey', title: 'Basheizha', clicks: 0, isExpanded: false, image: null }
  ]);
  const [lines, setLines] = useState([]); // To store connectors
  const longPressTimer = useRef(null);

  const handleBoxClick = (id, left, top) => {
    setBoxes((prevBoxes) => {
      const clickedBox = prevBoxes.find((box) => box.id === id);
      if (!clickedBox) return prevBoxes;
  
      const updatedClicks = clickedBox.clicks + 1;
  
      if (updatedClicks % 2 === 1) {
        // Add clones and lines
        const distance = 150;
        const newBoxIdStart = boxes.length + 1;
  
        let newBoxes = [];
  
        // If clicked box is "Nkurunungi", create specific new boxes below
        if (clickedBox.title === "Nkurunungi") {
          newBoxes = [
            { id: newBoxIdStart, left: left, top: top + distance, color: '#FE875C', title: `Samuel`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 1, left: left + distance, top: top + distance, color: '#715CFE', title: `Sarah`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 2, left: left + 2 * distance, top: top + distance, color: '#715CFE', title: `Calvin`, clicks: 0, isExpanded: false, image: null },
          ];
        } 
        // If clicked box is "Karugaba", create specific new boxes below
        else if (clickedBox.title === "Karugaba") {
          newBoxes = [
            { id: newBoxIdStart, left: left, top: top + distance, color: '#FE875C', title: `Sam`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 1, left: left + distance, top: top + distance, color: '#715CFE', title: `Linda`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 2, left: left + 2 * distance, top: top + distance, color: '#715CFE', title: `Allan`, clicks: 0, isExpanded: false, image: null },
          ];
        }
        // If clicked box is "Barigye", create specific new boxes below
        else if (clickedBox.title === "Barigye") {
          newBoxes = [
            { id: newBoxIdStart, left: left, top: top + distance, color: '#FE875C', title: `Paul`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 1, left: left + distance, top: top + distance, color: '#715CFE', title: `Joan`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 2, left: left + 2 * distance, top: top + distance, color: '#715CFE', title: `Brenda`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 3, left: left + 3 * distance, top: top + distance, color: '#715CFE', title: `Adrian`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 3, left: left + 3 * distance, top: top + distance, color: '#715CFE', title: `Lorna`, clicks: 0, isExpanded: false, image: null },

          ];
        }
        else if (clickedBox.title === "Tusiime") {
          newBoxes = [
            { id: newBoxIdStart, left: left, top: top + distance, color: '#FE875C', title: `Jonathan`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 1, left: left + distance, top: top + distance, color: '#715CFE', title: `Brenda`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 2, left: left + 2 * distance, top: top + distance, color: '#715CFE', title: `Suzan`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 3, left: left + 3 * distance, top: top + distance, color: '#715CFE', title: `Nelson`, clicks: 0, isExpanded: false, image: null },

          ];
        }
        // If clicked box is "Basheizha", create specific new boxes below (Barigye, Karugaba, and Nkurunungi)
        else if (clickedBox.title === "Basheizha") {
          newBoxes = [
            { id: newBoxIdStart, left: left, top: top + distance, color: '#715CFE', title: `Barigye`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 1, left: left + distance, top: top + distance, color: '#715CFE', title: `Karugaba`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 2, left: left + 2 * distance, top: top + distance, color: '#715CFE', title: `Nkurunungi`, clicks: 0, isExpanded: false, image: null },
            { id: newBoxIdStart + 3, left: left + 3 * distance, top: top + distance, color: '#715CFE', title: `Tusiime`, clicks: 0, isExpanded: false, image: null },

          ];
        }
  
        const newLines = newBoxes.map((box) => ({
          from: { left, top },
          to: { left: box.left, top: box.top },
        }));
  
        setLines((prevLines) => [...prevLines, ...newLines]);
        return [
          ...prevBoxes.map((box) => (box.id === id ? { ...box, clicks: updatedClicks } : box)),
          ...newBoxes,
        ];
      } else {
        // Remove clones and lines
        let newBoxes = prevBoxes.filter((box) => {
          // If Nkurunungi was clicked, remove only Sam, Sarah, and Calvin boxes
          if (clickedBox.title === "Nkurunungi") {
            return !["Sam", "Sarah", "Calvin"].includes(box.title);
          }
  
          // If Karugaba was clicked, remove only Sam, Linda, and Allan boxes
          if (clickedBox.title === "Karugaba") {
            return !["Sam", "Linda", "Allan"].includes(box.title);
          }
  
          // If Barigye was clicked, remove only Paul, Joan, and Brenda boxes
          if (clickedBox.title === "Barigye") {
            return !["Paul", "Joan", "Brenda"].includes(box.title);
          }
  
          // If Basheizha was clicked, remove only Barigye, Karugaba, and Nkurunungi boxes
          if (clickedBox.title === "Basheizha") {
            return !["Barigye", "Karugaba", "Nkurunungi"].includes(box.title);
          }
  
          // Otherwise, remove only Amooti boxes (color #FE875C)
          return box.color !== '#FE875C';
        });
  
        const newLines = lines.filter((line) => line.from.left !== left || line.from.top !== top);
  
        setLines(newLines);
        return newBoxes.map((box) =>
          box.id === id ? { ...box, clicks: updatedClicks } : box
        );
      }
    });
  };
  
  
  
  const handleLongPressStart = (id,title) => {
    longPressTimer.current = setTimeout(() => {
      setBoxes((prevBoxes) =>
        prevBoxes.map((box) =>
          box.id === id
            ? {
                ...box,
                isExpanded: !box.isExpanded, // Toggle expanded state
                color: box.isExpanded ? 'grey' : 'maroon', // Change color when expanded or shrunk
                width: box.isExpanded ? '50px' : '100px',
                height: box.isExpanded ? '50px' : '100px',
                zIndex: box.isExpanded ? 1 : 1000,
                image: !box.isExpanded 
                ? (box.title === "Karugaba" ? Karl 
                  : box.title === "Nkurunungi" ? mered
                  : box.title === "Linda" ? linda
                  : box.title === "Allan" ? allan
                  : box.title === "Samuel" ? mered
                  : box.title === "Paul" ? paul
                  : box.title === "Brenda" ? brenda
                  : box.title === "Joan" ? joan
                  : box.title === "Adrian" ? adrian
                  : box.title === "Sam" ? sam2
                  : box.title === "Barigye" ? bob

                  : null) 
                : null
                            }
            : box
        )
      );
    }, 500); // 500ms for long press
  };

  const handleLongPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  return (
    <div className="container mt-4" style={{ userSelect: "none" }}>
      <Card style={{ width: '90%' }}>
        <Card.Header style={{ backgroundColor: 'blue', color: 'white' }}>
          Family Tree
        </Card.Header>

        <Card.Body style={{ position: 'relative', height: '500px', width: '100%', overflow: 'auto' }}>
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
                    position: 'absolute',
                    left: `${x1 + 40}px`,
                    top: `${y1 + 20}px`,
                    width: `${length}px`,
                    height: '3px',
                    backgroundColor: 'grey',
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: '0 50%',
                    transition: 'all 2s ease',
                    strokeWidth: '5px',
                    borderRadius: '2px',
                  }}
                />
              );
            })}

            {boxes.map((box) => (
              <div
                key={box.id}
                className="box"
                style={{
                  position: 'absolute',
                  left: `${box.left}px`,
                  top: `${box.top}px`,
                  width: box.isExpanded ? '240px' : '80px',
                  height: box.isExpanded ? '240px' : '80px',
                  backgroundColor: box.color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  zIndex: box.isExpanded ? 1000 : 1,
                  transition: 'all 0.3s ease',
                  borderRadius: '10px', // Rounded corners for the box
                }}
                onClick={() => handleBoxClick(box.id, box.left, box.top)}
                onPointerDown={() => handleLongPressStart(box.id)}
                onPointerUp={handleLongPressEnd}
                onPointerLeave={handleLongPressEnd}
              >
                {box.image && (
                  <img
                    src={box.image}
                    alt="Box"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '10px', // Rounded corners for the image
                    }}
                  />
                )}
                {!box.image && (
                  <span className="box-title" style={{ color: 'white', fontWeight: 'bold' }}>
                    {box.title}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Divide;
