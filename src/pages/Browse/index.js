import React, {useState} from 'react'

import Browsebar from '../../components/Browsebar'
import DogResults from '../../components/DogResults'
const Browse = () => {

    const [breed, setBreed] = useState('')

    const changeBreed = (newSearch) => {
        setBreed(newSearch.target.value)
    }


    return (
        <div>
            <Browsebar changeBreed={changeBreed} />
            <DogResults search={breed} />
        </div>
    )
}

export default Browse;
