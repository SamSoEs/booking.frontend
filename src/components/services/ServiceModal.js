import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewService } from '../../services/service_services';

const ServiceModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalService, setModalService] = useState({});

    const dispatch = useDispatch();


    return <div>
        <i className="bi bi-plus-lg" onClick={handleShow} ></i>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Service</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                if(modalService.name !== undefined && modalService.name.trim() !== '' 
                && modalService.category.trim() !== '' && modalService.category !== undefined){
                    NewService(dispatch, modalService);
                }
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl type="text" className="border" placeholder="Name"
                            onChange={event => setModalService
                                ({ ...modalService, name: event.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <FormControl type="text" className="border" placeholder="Category"
                            onChange={event => setModalService
                                ({ ...modalService, category: event.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <FormControl className="border" placeholder="Price"
                            onChange={event => setModalService
                                ({ ...modalService, price: event.target.value })} />
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

export default ServiceModal
