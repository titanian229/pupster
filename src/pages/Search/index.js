import React, {useState} from 'react'

import Searchbar from '../../components/Searchbar'
import DogResults from '../../components/DogResults'
const Search = () => {

    const [search, setSearch] = useState('')

    const changeSearch = (newSearch) => {
        setSearch(newSearch.target.value)
    }


    return (
        <div>
            <Searchbar changeSearch={changeSearch} />
            <DogResults search={search} />
        </div>
    )
}

export default Search;
