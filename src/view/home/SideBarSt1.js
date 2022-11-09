/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './sidebar_2nd.css';
import './sidebar1.css'
import cover from './header.jfif';
// import user from './mypic.png';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const user = 'https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png';
//we will use the react bootstrab modal components 
//       ... the remainnings : 
//1. what are u thinking of nada 'post or write an article' 
//2. messages (bootstrab list item hover effect + mui avatars list + dropdown menue -left side-)
//3. add Events (modal + form)
//4. write th emojies
//5. comments (comment + reply + react) the dynamic part leave it


//  https://mui.com/material-ui/react-list/
//  https://getbootstrap.com/docs/5.2/components/card/
//  https://react-bootstrap.github.io/components/modal/

const SideBarSt1 = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const camera = 'https://cdn-icons-png.flaticon.com/512/1042/1042339.png';
    return (
        <>
            <div className="left-sec">
                <div className="nada_left-sec-part">


                    <div className="nada_prof-pic">
                        <img className="nada_rec-img" src={cover} alt="" />
                    </div>



                    <div className='ms-4'>
                        <img className="nada_circle" style={{ width: '70px' }} src={user} alt="" />
                        <p className="nada_name"> Nada Khalid </p>
                    </div>

                    {/* <hr style={{ width: '100%}', textAlign: 'center' }} /> */}



                    {/* <div style={{padding:'5%'}}>
                        <div className="d-flex nada_justifySb">
                            <p className="text-muted">Connnection</p>
                            <a href="/#">70</a>
                        </div>

                        <div className="d-flex nada_justifySb">
                            <p className="text-muted">Who viewed my profile</p>
                            <a href="/#">50</a>
                        </div>

                        <div className="d-flex nada_justifySb">
                            <p className="nada_connect-sec">
                                My Saved Items
                            </p>
                            <i className="material-symbols-sharp nada_align-self-center">bookmarks</i>
                        </div>

                    </div>


                    <div className="nada_left-sec-part nada_connect-sec" style={{padding:'5%'}}>

                        <div className="d-flex nada_justifySb nada_padding-margin">
                            <a href="/#">Groups</a>
                        </div>

                        <div className="d-flex nada_justifySb nada_padding-margin">
                            <a href="/#">Evants</a>
                            <i className="material-symbols-sharp">add</i>
                        </div>

                        <div className="d-flex nada_justifySb nada_padding-margin">
                            <a href="/#">Followed Hashtags</a>
                        </div>

                    </div>


                    <div className="nada_left-sec-part" style={{padding:'5%'}}>
                        <div className="d-flex nada_padding-margin">
                            <a href="/#" className='nada_discoverMore'>Discover more</a>
                        </div>
                    </div> */}
                </div>


                <div className="list-group nada_leftt">

                    <div type="button" className="list-group-item list-group-item-action">
                        <div className="d-flex mt-2" style={{ justifyContent: 'space-between' }}>
                            <span className="fw-bold" style={{ fontSize: '13px' }}>Connections</span>
                            <a href='/#' > 99 </a>
                        </div>
                    </div>

                    <div type="button" className="list-group-item list-group-item-action">
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                            <span className="fw-bold" style={{ fontSize: '13px' }}>Who Viewed Your Profile</span>
                            <a href='/#' > 30 </a>
                        </div>
                    </div>

                    <div type="button" className="list-group-item list-group-item-action">
                        <div className="fw-bold" style={{ fontSize: '13px' }}>Access Exclusive Tools & Insights</div>
                        <br />
                        <div className="d-flex" style={{ justifyContent: 'space-between', alignSelf: 'center' }}>
                            <a href='/#' >
                                <span>Try Premium For Free</span>
                            </a>
                            <span class="material-symbols-outlined" style={{ color: '#0000ffab' }}>workspace_premium </span>
                        </div>
                    </div>

                    <div type="button" className="list-group-item list-group-item-action">
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                            <span className="fw-bold" style={{ fontSize: '13px' }}>My Items</span>
                            <a href='/#' > <span style={{ color: '#0000ffab' }} class="material-symbols-outlined"> collections_bookmark  </span> </a>
                        </div>
                    </div>


                    {/* <a href='/#' class="material-symbols-outlined"> add </a>
                    <button type="button" className="list-group-item list-group-item-action">A second button item</button>
                    <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
                    <button type="button" className="list-group-item list-group-item-action">A disabled button item</button> */}

                </div>

                <div className="list-group nada_leftt">

                    <div type="button" className="list-group-item list-group-item-action">
                        <div className="d-flex mt-2" style={{ justifyContent: 'space-between' }}>
                            <span className="fw-bold" style={{ fontSize: '13px', color: 'blue' }}>Groups</span>
                            <span class="material-symbols-outlined"> expand_more </span>
                        </div>
                    </div>

                    <div type="button" className="list-group-item list-group-item-action">
                        <div className="d-flex mt-2" onClick={handleShow} style={{ justifyContent: 'space-between' }}>
                            <span className="fw-bold" style={{ fontSize: '13px', color: 'blue' }}>Events</span>
                            <span href='/#' class="material-symbols-outlined"> add </span>
                        </div>
                    </div>

                    <div type="button" className="list-group-item list-group-item-action">
                        <div className="d-flex mt-2" style={{ justifyContent: 'space-between' }}>
                            <span className="fw-bold" style={{ fontSize: '13px', color: 'blue' }}>Followed Hashtags</span>
                            <span class="material-symbols-outlined"> expand_more </span>
                        </div>
                    </div>
                    <button type="button" className="text-center text-muted fw-bold list-group-item list-group-item-action">
                        Discover More
                    </button>

                </div>

            </div>



            {/* add event part starts -------------------------------------------------------------- */}
            {/* <Button variant="primary">
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create an event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-5" style={{ textAlign: 'center', backgroundColor: '#f2f2ee', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <img src={camera} style={{ width: '80px', alignSelf: 'center' }} alt="" />
                        <h3 className='fw-bold'>Upload cover image</h3>
                        <p className="fs-15">Minimum width 480 pixels, 16:9 recommended</p>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>


                    <div>
                        <p className="fs-13"> Event type </p>
                        <input type="checkbox" name="" id="" />
                    </div>
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
            {/* add event part part ends -------------------------------------------------------------- */}



        </>
    );
}

export default SideBarSt1;