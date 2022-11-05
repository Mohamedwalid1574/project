import './groups.css';
import { Link } from "react-router-dom";
import create from '../image/creategroup.png';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Creategroup(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className='body py-2'>
            <div className='card  w-75 h-75'>
                <div className='d-flex py-2 px-3 justify-content-between align-items-center '>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div >Your groups</div>
                        <div className='ms-5'>Requested</div>
                    </div>
                    {/* <div className='btn rounded-5 btn-outline-primary  py-1 px-3' data-bs-toggle='model'>Create group</div> */}
                     <Button variant="primary" onClick={handleShow}> Launch demo modal</Button>
                     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
                <hr className='hrfull'/>
                <div className="centerofgroup mt-2 mb-5">
                    <img  src={create}/>
                    <h5>Discover groups</h5>
                    <p>Find other trusted communities that share and support your goals.</p>
                   
                   <div className='btn rounded-5 btn-outline-primary  py-1 px-3'>Discover</div>
                   
                </div>
            </div>
        </div>
    )
}