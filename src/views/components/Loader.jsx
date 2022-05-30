import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

export default function Loader() {
    return (
        <div className="spinner">
            <Spinner animation="border" />
        </div>
    )
}