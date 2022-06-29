import React from 'react'

export default function Loading_Spinner() {
    return (
        <div className="position-absolute end-50 bottom-50 spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
