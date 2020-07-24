import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import DogContainer from '../../components/DogContainer';
import { FaPaw } from 'react-icons/fa';

const Discover = () => {
    if (!localStorage.dogsLiked) {
        localStorage.dogsLiked = 0;
    }

    const dogsLikedSaved = Number(localStorage.dogsLiked);

    const [dogsMutuallyLiked, setDogsMutuallyLiked] = useState(dogsLikedSaved);
    const [lastLike, setLastLike] = useState(false);
    const [dislikeCount, setDislikeCount] = useState(0)
    const saveDog = (dog) => {
        if (localStorage.savedDogs) {
            let savedDogs = JSON.parse(localStorage.savedDogs);
            savedDogs.push(dog);
            localStorage.savedDogs = JSON.stringify(savedDogs);
        } else {
            localStorage.savedDogs = JSON.stringify([dog]);
        }
    };

    const likeClicked = (dog) => {
        if (Math.random() > 0.5) {
            localStorage.dogsLiked = dogsMutuallyLiked + 1;
            setDogsMutuallyLiked(dogsMutuallyLiked + 1);
            saveDog(dog);
            setLastLike(true);
        } else {
            setLastLike(false);
        }
    };

    const dislikeClicked = () => {
        console.log('disliked');
        window.alert("They're good dogs, what's wrong with you?");
        setLastLike(false);
        setDislikeCount(dislikeCount+1)

        if (dislikeCount > 1) {
            window.location.href = "https://www.google.com/search?q=therapists+near+me"
        }


    };

    return (
        <>
            <h1 className="text-center mt-4">Meet new dogs!</h1>
            <h4 className="text-center">
                Thumbs up any dog you'd like to meet, and thumbs down if you're a literal monster
            </h4>
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
                    <FaPaw className="mx-2" />
                    You've made {dogsMutuallyLiked} {dogsMutuallyLiked === 1 ? 'friend' : 'friends'} so far
                    <FaPaw className="mx-2" />
                </h2>
            </div>
        </>
    );
};

export default Discover;
