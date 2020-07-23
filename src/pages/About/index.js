import React from 'react';
import Image from 'react-bootstrap/Image';
import dog from '../../dog.png';
const About = () => {
    return (
        <div className="d-flex align-items-center">
            <h1>Welcome to Pupster!</h1>
            <Image src={dog} />
        </div>
    );
};

export default About;
