import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import me from './Images/me.jpg';
import uncleJohn from './Images/unclejohn.jpg';
import Atarah from './Images/Atarah.jpg';
import background1 from './Images/bg1.jpg';
import background2 from './Images/bg2.jpg';
import background3 from './Images/bg3.jpg';
import './Flow.css'; // Assuming you create a separate CSS file for styles
import hana from './Images/hana.jpg';
import juli from './Images/juli.jpg';
import syd from './Images/syd.jpg';

gsap.registerPlugin(Draggable);

const Flow2 = () => {
  const [holder0, setholder0] = useState(background1); // Collapse state for branch cards
  const [holder7, setholder7] = useState(syd); // Collapse state for branch cards

  const [holder1, setholder1] = useState(Atarah); // Collapse state for branch cards
  const [holder2, setholder2] = useState(hana); // Collapse state for branch cards
  const [holder3, setholder3] = useState(juli); // Collapse state for branch cards
  const [holder4, setholder4] = useState(uncleJohn); // Collapse state for branch cards
  const [holder5, setholder5] = useState(me); // Collapse state for branch cards
  const [holder6, setholder6] = useState(background2); // Collapse state for branch cards
  const uncleref = useRef([]);

  const pictureposition = {
    width:'80px',
      height:'80px',
    
     };
     const switchpics1 = () => {
      setholder4(Atarah)
      setholder2(syd)
      setholder6(uncleJohn)

  };
  
  const switchpics2 = () => {
    setholder4(syd)
    setholder2(Atarah)
    setholder6(background1)

};
const switchpics3 = () => {
  setholder4(hana)
  setholder2(me)
  setholder6(background2)

};
  
  return (
    <div style={{width:'100vh', height:"100vh"}}>

    <div id="column1" style={{display:'flex', flexDirection:'column'}}>
      <div id="column1" style={{display:'flex' }}>
      <div id="grandfather" class="square-component">
        
      <img
variant="top"
src={holder0}
alt="Main Member"
className="member-image"
style={{...pictureposition}}
/> 
      </div>
      <div class='square2'>


      </div>
      <div class='square2'></div>

      </div>

      <div id="column2" style={{display:'flex' }}>
      <div class='square2'></div>

      <div ref={uncleref} onClick={switchpics1} id="uncle" class="square-component">
    
      <img
variant="top"
src={holder1}
alt="Main Member"
className="member-image"
style={{...pictureposition}}
/> 
     </div>

      <div id="father" class="square-component">
      <img
variant="top"
src={holder2}
alt="Main Member"
className="member-image"
style={{...pictureposition}}
/> 
      </div>

      </div>
    
      <div id="column3" style={{display:'flex' }}>
      <div class='square2'></div>

<div id="aunt" onClick={switchpics2} class="square-component">
  
<img
variant="top"
src={holder3}
alt="Main Member"
className="member-image"
style={{...pictureposition}}
/> 
</div>

<div id="uncle"  class="square-component">
<img
variant="top"
src={holder4}
alt="Main Member"
className="member-image"
style={{...pictureposition}}
/> 
</div>
      </div>
    
      <div id="column4" style={{display:'flex' }}>
      <div class='square2'>

      </div>

<div id="grandfather"onClick={switchpics3} class="square-component">
  
<img
variant="top"
src={holder5}
alt="Main Member"
className="member-image"
style={{...pictureposition}}
/> 
</div>

<div id="grandfather" class="square-component">
<img
variant="top"
src={holder6}
alt="Main Member"
className="member-image"
style={{...pictureposition}}
/> 
</div>
      </div>
    </div>
    </div>

  );
};

export default Flow2;
