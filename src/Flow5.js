import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Card } from 'react-bootstrap';
import background1 from './Images/bg1.jpg';
import background2 from './Images/bg2.jpg';
import me from './Images/me.jpg';
import uncleJohn from './Images/unclejohn.jpg';
import Atarah from './Images/Atarah.jpg';
import hana from './Images/hana.jpg';
import juli from './Images/juli.jpg';
import syd from './Images/syd.jpg';
import './flow5.css';

gsap.registerPlugin(ScrollTrigger);

const Flow5 = () => {
  const [holder0, setHolder0] = useState(background1);
  const [holder1, setHolder1] = useState(Atarah);
  const [holder2, setHolder2] = useState(hana);
  const [holder3, setHolder3] = useState(juli);
  const [holder4, setHolder4] = useState(uncleJohn);
  const [holder5, setHolder5] = useState(me);
  const [holder6, setHolder6] = useState(background2);
  const [holder7, setHolder7] = useState(syd);
  
  const containerRef = useRef([]);
  
  const pictureStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
  };

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const switchPics1 = () => {
    setHolder4(Atarah);
    setHolder2(syd);
    setHolder6(uncleJohn);
  };
  
  const switchPics2 = () => {
    setHolder4(syd);
    setHolder2(Atarah);
    setHolder6(background1);
  };
  
  const switchPics3 = () => {
    setHolder4(hana);
    setHolder2(me);
    setHolder6(background2);
  };

  return (
    <Container fluid className="flow5-container" style={{ height: '100vh', overflow: 'auto' }}>
      <div className="flow5-columns" ref={containerRef}>
        <div className="flow5-row" style={{ display: 'flex' }}>
          <div className="flow5-square">
            <img src={holder0} alt="Member" style={pictureStyle} />
          </div>
          <div className="flow5-square empty" />
          <div className="flow5-square empty" />
        </div>

        <div className="flow5-row" style={{ display: 'flex' }}>
          <div className="flow5-square empty" />
          <div onClick={switchPics1} className="flow5-square">
            <img src={holder1} alt="Member" style={pictureStyle} />
          </div>
          <div className="flow5-square">
            <img src={holder2} alt="Member" style={pictureStyle} />
          </div>
        </div>

        <div className="flow5-row" style={{ display: 'flex' }}>
          <div className="flow5-square empty" />
          <div onClick={switchPics2} className="flow5-square">
            <img src={holder3} alt="Member" style={pictureStyle} />
          </div>
          <div className="flow5-square">
            <img src={holder4} alt="Member" style={pictureStyle} />
          </div>
        </div>

        <div className="flow5-row" style={{ display: 'flex' }}>
          <div className="flow5-square empty" />
          <div onClick={switchPics3} className="flow5-square">
            <img src={holder5} alt="Member" style={pictureStyle} />
          </div>
          <div className="flow5-square">
            <img src={holder6} alt="Member" style={pictureStyle} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Flow5;
