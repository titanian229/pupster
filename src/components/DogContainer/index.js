import React from 'react';
import Card from 'react-bootstrap/Card';
// import styles from './styles.scss';
import LikeButton from '../LikeButton'

const DogContainer = (props) => {
    const source = props.dog.message;



    return (
        <Card style={{ width: '30vw', height: '30vw', backgroundImage: "url(" + source + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", position: "relative" }}>
            {/* <Image rounded src={source} fluid /> */}
                <Card.Text>
                    <LikeButton likeClicked={props.likeClicked} style={{position: "absolute", left: "1em", bottom: "1em", fontSize: "3em", color: "green"}} up={true} />
                    <LikeButton dislikeClicked={props.dislikeClicked}  style={{position: "absolute", right: "1em", bottom: "1em", fontSize: "3em", color: "red"}} up={false} />
                </Card.Text>
        </Card>
    );
};

export default DogContainer;
