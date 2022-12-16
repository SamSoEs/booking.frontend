import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Button, InputGroup, FormControl, FormLabel } from "react-bootstrap";
import { NewStaff } from '../../services/staff_services';

const StaffModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalStaff, setModalStaff] = useState({});

    const dispatch = useDispatch();


    return <div>
        <i className="bi bi-plus-lg mt-auto mx-auto"  onClick={handleShow} ></i>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Staff</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                if(modalStaff.firstName !== undefined && modalStaff.firstName.trim() !== '' 
                && modalStaff.lastName.trim() !== '' && modalStaff.lastName !== undefined){
                    NewStaff(dispatch, modalStaff);
                }
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl type="text" className="border" value={modalStaff === null ? '' : modalStaff.firstName} placeholder="First Name"
                            onChange={event => setModalStaff({ ...modalStaff, firstName: event.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <FormControl type="text" className="border" value={modalStaff === null ? '' : modalStaff.lastName} placeholder="Last Name"
                            onChange={event => setModalStaff({ ...modalStaff, lastName: event.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <FormControl type="text" className="border" value={modalStaff === null ? '' : modalStaff.jobTitle} placeholder="Job Title"
                            onChange={event => setModalStaff({ ...modalStaff, jobTitle: event.target.value })} />
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

export default StaffModal
