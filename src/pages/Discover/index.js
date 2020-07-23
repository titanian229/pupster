import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import DogContainer from '../../components/DogContainer';

const Discover = () => {
    if (!localStorage.dogsLiked) {
        localStorage.dogsLiked = 0;
    }

    const dogsLikedSaved = Number(localStorage.dogsLiked);

    const [dogsMutuallyLiked, setDogsMutuallyLiked] = useState(dogsLikedSaved);
    const [lastLike, setLastLike] = useState(false);

    const likeClicked = (clickVariant) => {
        if (Math.random() > 0.5) {
            localStorage.dogsLiked = dogsMutuallyLiked + 1;
            setDogsMutuallyLiked(dogsMutuallyLiked + 1);
            setLastLike(true);
        } else {
            setLastLike(false);
        }
    };

    const dislikeClicked = () => {
        console.log('disliked');
        window.alert("They're good dogs, what's wrong with you?");
        setLastLike(false);
    };

    return (
        <div>
            <h1 className="text-center">Meet new dogs!</h1>
            <h2 className="text-center">
                Thumbs up any dog you'd like to meet, and thumbs down if you're a literal monster
            </h2>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <DogContainer likeClicked={likeClicked} dislikeClicked={dislikeClicked} />
                {lastLike ? (
                    <Alert variant="success" className="mt-2">
                        That dog liked you too!
                    </Alert>
                ) : (
                    ''
                )}
                <h2>
                    You've made {dogsMutuallyLiked} {dogsMutuallyLiked === 1 ? 'friend' : 'friends'} so far
                </h2>
            </div>
        </div>
    );
};

export default Discover;
