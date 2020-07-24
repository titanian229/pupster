import React from 'react';
import Image from 'react-bootstrap/Image';

const DogBox = (props) => {
    const style = {
        width: '50vw',
        height: 'auto',
    };
    return (
        <div className="d-flex flex-column align-items-center">
            <Image style={style} className="my-2" src={props.dog} />
        </div>
    );
};

export default DogBox;
