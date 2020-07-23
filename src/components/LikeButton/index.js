import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './style.scss'

const LikeButton = (props) => {
    return (
        <>
            {props.up ? (
                <Button className="likebutton" variant="info" style={{...props.style, borderRadius: "80%", backgroundColor: "transparent", border: "0px solid transparent"}} onClick={props.likeClicked}>
                    <FaThumbsUp />
                </Button>
            ) : (
                <Button className="likebutton" variant="info" style={{...props.style, borderRadius: "80%", backgroundColor: "transparent", border: "0px solid transparent"}} onClick={props.dislikeClicked}>
                    <FaThumbsDown />
                </Button>
            )}
        </>
    );
};

export default LikeButton;
