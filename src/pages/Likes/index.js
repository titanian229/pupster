import React from 'react'
import DogBox from '../../components/DogBox'
const Likes = (props) => {

    let dogs;

    if (localStorage.savedDogs){
        dogs = JSON.parse(localStorage.savedDogs)
    }

    return (
        <div>
            <h1 className="text-center mb-4 mt-4">These are all the dogs who liked you back</h1>
            {(dogs) ? dogs.map((dog, ind) => <DogBox key={ind} dog={dog} history={props.history} messCapable={true} />) : <p>It looks like you haven't had any luck so far!</p>}
        </div>
    )
}

export default Likes;
