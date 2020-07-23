import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Searchbar = (props) => {
    return (
        <div className="py-4" id="searchDiv">
            <InputGroup size="lg">
                <FormControl
                    placeholder="Breed Search"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-lg"
                    onChange={props.changeSearch}
                />
                <InputGroup.Append>
                    <InputGroup.Text>
                        <FaSearch />
                    </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default Searchbar;
