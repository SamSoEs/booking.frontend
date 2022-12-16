import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewGuest } from '../../services/guest_services';

const GuestModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalGuest, setModalGuest] = useState({});

    const dispatch = useDispatch();


    return <div>
        <i className="bi bi-plus-lg" onClick={handleShow} ></i>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Guest</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                if(modalGuest.firstName !== undefined && modalGuest.firstName.trim() !== '' 
                && modalGuest.lastName.trim() !== '' && modalGuest.lastName !== undefined){
                    NewGuest(dispatch, modalGuest);
                }
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl type="text" className="border" placeholder="First Name"
                            onChange={event => setModalGuest({ ...modalGuest, firstName: event.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <FormControl type="text" className="border" placeholder="Last Name"
                            onChange={event => setModalGuest({ ...modalGuest, lastName: event.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <FormControl type="phone" className="border" placeholder="Phone Number"
                            onChange={event => setModalGuest({ ...modalGuest, phone: event.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <FormControl  type="email" className="border" placeholder="Email Address"
                            onChange={event => setModalGuest({ ...modalGuest, email: event.target.value })} />
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

export default GuestModal
