import React from "react";

const StaffCard = ({ staff }) => {
    return (
        <div className="card shadow">
            <div className="card-block">
                <h4 className="card-title text-muted card-item">{staff.firstName} {staff.lastName}</h4>
                <h6 className="card-subtitle text-muted card-item">{staff.jobTitle}</h6>
            </div>
        </div>
    )
}

export default StaffCard;