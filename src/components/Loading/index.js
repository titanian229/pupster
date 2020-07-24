import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './style.scss'

const Loading = () => {
    return (
        <div className="d-flex flex-column h-100 w-100 align-items-center justify-content-center loading">
            <p>Loading...</p>
            <Spinner animation="grow" variant="info" size="lg" />
        </div>
    )
}

export default Loading;
