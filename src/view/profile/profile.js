import './profile.css';
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import cover from './image/images.png';
import photo from './image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import pro from './image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg';
import friendphoto from './image/One_Piece-9f62b3e6-bd9c-423b-b154-09b15a724f62.jpg';


export default function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='body '>
                <div className='profile '>
                    <div className='container mx-auto '>
                        <div className="row">
                            <section className="col-12 col-md-7 col-lg-8 mt-3">
                                <div className="card pb-4">
                                    <div className='bg-white rounded-circle p-2 ' style={{ fontSize: '2%', position: 'relative', position: 'absolute', top: '3%', right: '3%' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" />
                                        </svg>
                                    </div>
                                    <img src={cover} alt="" />
                                    <div className='d-flex justify-content-between'>
                                        <div className='whiteprofile ms-4'><img src={pro} className='profilephoto' alt="" /></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='mt-3 me-3' width='20' height='20' viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                        </svg>

                                    </div>
                                    <div className="d-flex justify-content-between px-4 ">
                                        <div>
                                            <h3 className="m-0">Mohamed Walid</h3>
                                            <p className="m-0">طالب في كليه الهندسه</p>
                                            <p className="opacity-50">markaz naghammdi, qena, egypt</p>
                                        </div>
                                        <div className="d-flex align-items-center me-5">

                                            <p className="ps-2 my-0">كليه الهندسه</p>
                                        </div>
                                    </div>
                                    <div className="d-flex px-4 ">
                                        <div className="btn bg-primary rounded-pill text-light">open to</div>
                                        <div className="btn rounded-pill border border-primary border-2 ms-2 text-primary  ">add profile section</div>
                                        <div className="btn rounded-pill  border border-dark border-2  ms-2 ">more</div>
                                    </div>
                                </div>
                                <div className="card mt-2 p-4">
                                    <h4 className="m-0">Take a skill quiz</h4>
                                    <div className='d-flex align-items-center mt-1 mb-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width='15' height='15' viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                                        </svg>
                                        <p className="opacity-50 m-0 ms-2">Provide to you</p>
                                    </div>
<<<<<<< HEAD
                                </div>
                                <hr  />
                                <div className="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>
                                    <div>
                                        <p className="m-0">my network</p>
                                        <p className="mt-0">see and manage your connections and interests</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrfull" />
                            <p className="text-center py-2 mb-0 ">show all 5 resourses</p>
                        </div>
                        <div className="card mt-2 ">
                            <div className="px-4 pt-4">
                                <div className='d-flex justify-content-between'>
                                    <div>
                                    <h4 className="m-0">activite</h4>
                                    <p className="opacity-50">1 followers</p>
                                    </div>
                                    <div>
                                    <Button className=' rounded-5  py-1 px-3' onClick={handleShow}>Start a post</Button>
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
                                </div>
                                <p className="m-0">You haven't posted lately</p>
                                <p className="mt-0">Recent posts you share or comment on will be displayed hereRecent</p>
                            </div>
                            <hr className="hrfull" />
                            <p className="text-center py-2 mb-0 ">show all activites</p>
                        </div>
                        <div className="card mt-2 p-4">
                           <div className='d-flex justify-content-between align-items-center'>
                           <h4 className="mb-3">Education</h4>
                           <div className='d-flex  align-items-center'>
                           <svg xmlns="http://www.w3.org/2000/svg" className=' me-3' width='20' height='20' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
=======
                                    <div className="border p-3">
                                        <div className="d-flex align-items-center " >
>>>>>>> e77d764a373347dcba4a460ae5b6a325415b8f13

                                            <p className="my-0">Stand out in recruiter searches</p>
                                        </div>
                                        <p>Candidates who earn a skill badge are 20% more likely to get hired.</p>
                                        <div className="btn rounded-pill border border-2 mt-0">Take a skill quiz</div>
                                    </div>
                                </div>
                                <div class="card mt-2 p-4">
                                    <div>
                                        <h4 className="m-0">analytics</h4>
                                        <div className='d-flex align-items-center mt-1 mb-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width='15' height='15' viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                                            </svg>
                                            <p className="opacity-50 m-0 ms-2">Provide to you</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                        </svg>
                                        <div>
                                            <p className="m-0">0 profile viewes</p>
                                            <p className="mt-0">update your profile tp attract viewers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2 ">
                                    <div className="px-4 pt-4">
                                        <div>
                                            <h4 className="m-0">resourses</h4>
                                            <div className='d-flex align-items-center mt-1 mb-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width='15' height='15' viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                                                </svg>
                                                <p className="opacity-50 m-0 ms-2">Provide to you</p>
                                            </div>
                                        </div>
                                        <div clasNames="d-flex">

                                            <div>
                                                <p className="m-0">creator mode</p>
                                                <p className="mt-0">gert discover, showcase cntent on your profile, and get access to creator tools</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <div>
                                                <p className="m-0">my network</p>
                                                <p className="mt-0">see and manage your connections and interests</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hrfull" />
                                    <p className="text-center py-2 mb-0 ">show all 5 resourses</p>
                                </div>
                                <div className="card mt-2 ">
                                    <div className="px-4 pt-4">
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <h4 className="m-0">activite</h4>
                                                <p className="opacity-50">1 followers</p>
                                            </div>
                                            <div>
                                                <button className='btn rounded-pill border border-primary border-2 ms-2 text-primary'>start a post</button>
                                            </div>
                                        </div>
                                        <p className="m-0">You haven't posted lately</p>
                                        <p className="mt-0">Recent posts you share or comment on will be displayed hereRecent</p>
                                    </div>
                                    <hr className="hrfull" />
                                    <p className="text-center py-2 mb-0 ">show all activites</p>
                                </div>
                                <div className="card mt-2 p-4">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h4 className="mb-3">Education</h4>
                                        <div className='d-flex  align-items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className=' me-3' width='20' height='20' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div >

                                        <div className="ms-2">
                                            <p className="my-0">كليه الهندسه</p>
                                            <p className="my-0">2019-2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2 ">

                                    <h4 className="px-4 pt-4">interests</h4>
                                    <div className="px-4 d-flex align-items-center  justify-content-between">
                                        <div className="mb-2">
                                            <div className="d-flex">
                                                <div><img src={friendphoto} className='friendphoto' alt="" /></div>
                                                <div className="ms-2">
                                                    <p className="mb-0">Orchidia Pharmaceutical Industries


                                                    </p>
                                                    <p className="opacity-50 my-0">93,237 followers</p>
                                                    <div className="btn border  mt-2">following</div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="me-5 mb-2">
                                            <div className="d-flex">
                                                <div> <img src={friendphoto} className='friendphoto' alt="" /></div>
                                                <div className="ms-2">
                                                    <p className="mb-0">Gulf jobs وظائف خليجي</p>
                                                    <p className="opacity-50 my-0">77,240 followers</p>
                                                    <div className="btn border mt-2 ">following</div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <hr className="hrfull" />
                                    <p className="text-center  py-2 mb-0">show all 13 compines</p>
                                </div>
                            </section>
                            <aside className="col-4 col-md-5 col-lg-4 mt-3">
                                <div className="card p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p>Edit public profile & URL</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width='16' height="16" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                                        </svg>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p>Edit public profile & URL</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width='16' height="16" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <img src={photo} className="mx-2" alt="" />

                                </div>
                                <div className="card mt-2 px-2 py-3">
                                    <p className="top " >people you may know</p>

                                    <div className="d-flex mb-3 ">
                                        <div><img src={friendphoto} className='friendphoto' alt="" /></div>
                                        <div className="ms-2">
                                            <p className="mb-0">abdelrahman said</p>
                                            <p className="opacity-50 mx-0">Flutter Developer</p>
                                            <p className="rounded-pill border border-1 text-center d-inline px-3 py-1">Connect</p>
                                        </div>
                                    </div>

                                    <div className="d-flex  mb-3">
                                        <div><img src={friendphoto} className='friendphoto' alt="" /></div>
                                        <div className="ms-2">
                                            <p className="mb-0"> Mohamed Hadhoud</p>
                                            <p className="opacity-50 mx-0">Front end developer (React)</p>
                                            <p className="rounded-pill border border-1 text-center d-inline px-3 py-1">Connect</p>
                                        </div>
                                    </div>

                                    <div className="d-flex  mb-3 ">
                                        <div><img src={friendphoto} className='friendphoto' alt="" /></div>
                                        <div className="ms-2">
                                            <p className="mb-0"> Yasser Badr</p>
                                            <p className="opacity-50 mx-0">

                                                Gameplay programmer

                                            </p>
                                            <div className="rounded-pill border border-1 text-center  d-inline px-3 py-1">Connect</div>
                                        </div>
                                    </div>
                                    <div className="d-flex  mb-3 ">
                                        <div><img src={friendphoto} className='friendphoto' alt="" /></div>
                                        <div className="ms-2">
                                            <p className="mb-0">saad eldeen ali</p>
                                            <p className="opacity-50 mx-0"> Flutter developer</p>
                                            <div className="rounded-pill border border-1 text-center  d-inline px-3 py-1"> Connect</div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3 ">
                                        <div><img src={friendphoto} className='friendphoto' alt="" /></div>
                                        <div className="ms-2">
                                            <p className="mb-0">salma fayed</p>
                                            <p className="opacity-50 mx-0">React Native Developer</p>
                                            <div className="rounded-pill border border-1 text-center d-inline px-3 py-1">Connect</div>
                                        </div>
                                    </div>

                                </div>


                            </aside>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
