import React from "react";

const ServiceCard = ({ service }) => {
    return (
        <div className="card shadow">
            <div className="card-block">
                <h4 className="card-title text-muted card-item">{service.name}</h4>
                <h6 className="card-subtitle text-muted card-item mr-auto"> <i className="bi bi-dot card-subtitle text-muted card-item">{service.category}</i></h6>
                <h6 className="card-subtitle text-muted"><i className="bi bi-dot card-subtitle text-muted card-item">${service.price}</i></h6>
            </div>
        </div>
    )
}

export default ServiceCard;