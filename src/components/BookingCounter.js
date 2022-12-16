import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-date-picker';


import { Form, InputGroup, FormControl } from "react-bootstrap";

import { GetGuests } from "../services/guest_services";
import { GetStaffs } from "../services/staff_services";
import { GetServices } from "../services/service_services";
import { GetAppointments, GetFilterAppointments } from "../services/appointment_services";

import GuestCard from "./guests/GuestCard";
import GuestModal from "./guests/GuestModal";
import StaffCard from "./staffs/StaffCard";
import StaffModal from "./staffs/StaffModal";
import ServiceCard from "./services/ServiceCard";
import ServiceModal from "./services/ServiceModal";
import AppointmentCard from "./appointments/AppointmentCard";
import AppointmentModal, {NewAppointmentModal} from "./appointments/AppointmentModal";

export const BookingCounter = () => {
    const guests = useSelector(state => state.bookingReducer.guests);
    const staffs = useSelector(state => state.bookingReducer.staffs);
    const services = useSelector(state => state.bookingReducer.services);
    const appointments = useSelector(state => state.bookingReducer.appointments);

    const dispatch = useDispatch();

    useEffect(() => {
        GetGuests(dispatch);
        GetStaffs(dispatch);
        GetServices(dispatch);
        GetAppointments(dispatch);
    }, []);
    
    
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 booking-column">
                        <h1 className="title">Guests</h1>
                        {guests.map(guest =>
                            <div key={"guest" + guest.id}>
                                <GuestCard guest={guest} />
                            </div>
                        )}
                        <div className="btn-plus">
                            <GuestModal />
                        </div>
                    </div>
                    <div className="col-md-3 booking-column">
                        <h1 className="title">Staffs</h1>
                        {staffs.map(staff =>
                            <div key={"staff" + staff.id}>
                                <StaffCard staff={staff} />
                            </div>
                        )}
                        <div className=" mt-auto btn-plus">
                            <StaffModal />
                        </div>
                    </div>
                    <div className="col-md-3 booking-column">
                        <h1 className="title">Services</h1>
                        {services.map(service =>
                            <div key={"service" + service.id}>
                                <ServiceCard service={service} />
                            </div>
                        )}
                        <div className="btn-plus">
                            <ServiceModal />
                        </div>
                    </div>
                    {/* <div className="col-md-5 booking-column">
                        <h1 className="title">Appintment</h1>
                        <div>
                            <DatePicker  onChange={event => GetFilterAppointments(dispatch, event)}/>
                        </div>
                        
                        {appointments.map(appointment =>
                            <div key={"service" + appointment.id}>
                                <AppointmentCard appointment={appointment} />
                            </div>
                        )}
                        <div className="btn-plus">
                            <NewAppointmentModal/>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>

    );

}