// Flow3.js
import React, { useEffect, useRef, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Flow3.css'; // Assuming you create a separate CSS file for styles
import background1 from './Images/me.jpg';
import background2 from './Images/unclejohn.jpg';
import background3 from './Images/Atarah.jpg';
import hana from './Images/hana.jpg';
import juli from './Images/juli.jpg';

const Flow3 = () => {
    const cardRefs = useRef([]);
    const bgRefs = useRef([]);
    const [showCards, setShowCards] = useState(true);
    const dragThreshold = 10;
    const middleY = window.innerHeight / 2;
    const [isCollapsed, setIsCollapsed] = useState(true); // Collapse state for branch cards

    const handleMainCardClick = () => {
        setIsCollapsed(!isCollapsed); // Toggle collapse state
    };

    const renderBackgroundImage = (image, index) => (
        <div
          ref={(el) => (bgRefs.current[index] = el)}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            top: 0,
            left: 0,
          }}
        />
      );

    return (
        <div className="genealogy-body">
            <div className="genealogy-tree">
                <ul>
                    <li>
                        <Card className='member-card3' onClick={handleMainCardClick}>
                            <Card.Header>Main Member</Card.Header>
                            <Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={background1}
                                    alt="Main Member"
                                    className="member-image"
                                />
                                <Card.Text>Main Member Description</Card.Text>
                            </Card.Body>
                        </Card>
                        <ul className={!isCollapsed ? '' : 'collapsed'}>
                            <li>
                                <Card >
                                    <Card.Header>Branch Member 1</Card.Header>
                                    <Card.Body>
                                        <Card.Img
                                            variant="top"
                                            src={background2}
                                            alt="Branch Member 1"
                                            className="member-image"
                                        />
                                        <Card.Text>Branch Member 1 Description</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className="member-card">
                                    <Card.Header>Branch Member 2</Card.Header>
                                    <Card.Body>
                                        <Card.Img
                                            variant="top"
                                            src={background3}
                                            alt="Branch Member 2"
                                            className="member-image"
                                        />
                                        <Card.Text>Branch Member 2 Description</Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            
           
            
        </div>
    );
};

export default Flow3;
