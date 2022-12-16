import React from "react";
import GetAppointmentDetails from "./GetAppointmentDetails";
import { EditAppointmentModal } from "./AppointmentModal";

const AppointmentCard = ({ appointment}) => {
    const details = GetAppointmentDetails(appointment);
    if(details[0] !== [] && details[1] !== [] && details[2] !== []){
        return (
            <div className="card shadow">
                <div className="card-block">
                    <EditAppointmentModal appointment={appointment}/>
                    <h3 className="card-title text-muted card-item inline">{details[0][0].firstName} {details[0].lastName}</h3>
                    <h4 className="card-title text-muted card-item">{new Date(appointment.startDate).getHours()} - {new Date(appointment.endDate).getHours()}</h4>
                    <h4 className="card-title text-muted card-item">{details[1][0].category}</h4>
                    <h6 className="card-subtitle text-muted card-item">{details[2][0].firstName} {details[2][0].lastName}</h6>
                </div>
            </div>
        )
    }
    else{
        return;
    }
    
}

export default AppointmentCard;