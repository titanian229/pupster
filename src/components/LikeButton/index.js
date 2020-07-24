import React from 'react';
import './style.scss';

const LikeButton = (props) => {
    const sharedStyle = {
        position: 'absolute',
        bottom: '0.5em',
        fontSize: '2em',
        cursor: 'pointer',
    };

    const upStyle = {
        left: '0.5em',
        color: 'green',
    };
    const downStyle = {
        right: '0.5em',
        color: 'red',
    };

    return (
        <>
            {props.up ? (
                <span
                    className="fa-stack fa-lg likebutton"
                    style={{ ...sharedStyle, ...upStyle }}
                    data-happy={props.up}
                    onClick={props.clicked}
                >
                    <i className="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
                    <i style={{ color: 'white' }} className="fa fa-thumbs-up fa-stack-1x" aria-hidden="true"></i>
                </span>
            ) : (
                <span
                    className="fa-stack fa-lg likebutton"
                    style={{ ...sharedStyle, ...downStyle }}
                    data-happy={props.up}
                    onClick={props.clicked}
                >
                    <i className="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
                    <i style={{ color: 'white' }} className="fa fa-thumbs-down fa-stack-1x" aria-hidden="true"></i>
                </span>
            )}
        </>
    );
};

export default LikeButton;
