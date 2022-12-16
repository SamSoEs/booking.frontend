import React from "react";
import { useSelector } from 'react-redux';

const GetAppointmentDetails = (appointment) =>{
    const stateObj = useSelector(state => state.bookingReducer);
    if(stateObj !== null){ 
        let guest = null;
        let staff = null;
        let service = null;
        if (appointment !== null) {
            staff = stateObj.staffs.filter(item => item.id === appointment.staffId);
            guest = stateObj.guests.filter(item => item.id === appointment.guestId);
            service = stateObj.services.filter(item => item.id === appointment.serviceId);
        }
        else{
            staff = stateObj.staffs;
            guest = stateObj.guests;
            service = stateObj.services;
        }
        return [guest, service, staff];
    }
}

export default GetAppointmentDetails;