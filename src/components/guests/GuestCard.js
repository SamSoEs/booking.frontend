import React from "react";

const GuestCard = ({ guest }) => {
    return (
        <div className="card shadow">
            <div className="card-block">
                <h4 className="card-title text-muted card-item">{guest.firstName} {guest.lastName}</h4>
                <h6 className="card-subtitle text-muted card-item"><i className="bi bi-telephone-fill"></i>{guest.phone}</h6>
                <h6 className="card-subtitle text-muted"><i className="bi bi-envelope-at"></i>{guest.email}</h6>
            </div>
        </div>
    )
}

export default GuestCard;