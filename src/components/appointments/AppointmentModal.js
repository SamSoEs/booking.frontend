import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewAppointment, EditAppointment } from '../../services/appointment_services';
import GetAppointmentDetails from "./GetAppointmentDetails";


export const NewAppointmentModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div >
        <i className="bi bi-plus-lg" onClick={handleShow} ></i>
        <AppointmentModal appointment={null} handleFormSubmit={NewAppointment} show={show} handleClose={handleClose} />
    </div>
}

export const EditAppointmentModal = ({ appointment }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return <div style={{textAlign: 'right', float: 'right'}}>
        <i className="bi bi-pencil" onClick={handleShow} ></i>
        <AppointmentModal appointment={appointment} handleFormSubmit={EditAppointment} show={show} handleClose={handleClose} />
    </div>
}

const AppointmentModal = ({appointment, handleFormSubmit, show, handleClose }) => {

    const [modalAppointment, setModalAppointment] = useState({});

    const dispatch = useDispatch();
    useEffect(() => {
        setModalAppointment(modalAppointment);
    }, [appointment]);

    return <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Appointment</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                if (modalAppointment.guestId !== null && modalAppointment.stafftId !== null &&
                    modalAppointment.servicetId !== null && modalAppointment.date !== null) {
                    modalAppointment.id = Math.floor(Math.random() * 1000);
                    handleFormSubmit(dispatch, modalAppointment);
                }
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl className="border" value={modalAppointment === null ? null : modalAppointment.guestId}
                            onChange={event => setModalAppointment({ ...modalAppointment, guestId: event.target.value })}>
                            <option >Guest</option>
                            {
                                GetAppointmentDetails(appointment)[0].map((guest) =>
                                    <option value={guest.id}>{guest.firstName} {guest.lastName}</option>
                                )
                            }
                        </FormControl>
                    </InputGroup>
                    <InputGroup>
                        <FormControl>
                            <DatePicker value={modalAppointment === null ? null : modalAppointment.date}
                                onChange={event => setModalAppointment({ ...modalAppointment, date: event.target.value })} />
                        </FormControl>
                    </InputGroup>
                    <InputGroup>
                        <FormControl>
                            <TimePicker format="HH:mm:ss" value={modalAppointment === null ? null : modalAppointment.date}
                                onChange={event => setModalAppointment({ ...modalAppointment, date: event.target.value })} />
                        </FormControl>

                    </InputGroup>
                    <InputGroup>
                        <FormControl className="border" value={modalAppointment === null ? null : modalAppointment.serviceId}
                            onChange={event => setModalAppointment({ ...modalAppointment, serviceId: event.target.value })}>
                            <option >Service</option>
                            {
                                GetAppointmentDetails(appointment)[1].map((service) =>
                                    <option value={service.id}>{service.name}</option>
                                )
                            }
                        </FormControl>
                    </InputGroup>
                    <InputGroup>
                        <FormControl className="border" value={modalAppointment === null ? null : modalAppointment.staffId}
                            onChange={event => setModalAppointment({ ...modalAppointment, staffId: event.target.value })}>
                            <option >Staff</option>
                            {
                                GetAppointmentDetails(appointment)[2].map((staff) =>
                                    <option value={staff.id}>{staff.firstName} {staff.lastName}</option>
                                )
                            }
                        </FormControl>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </div>
}

export default AppointmentModal
