import React from 'react'
import Image from 'react-bootstrap/Image';

const DogBox = (props) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <Image className="my-2" src={props.dog} />
        </div>
    )
}

export default DogBox;
