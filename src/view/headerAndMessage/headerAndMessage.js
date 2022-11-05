/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */


import React, { useState } from "react";
import './header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const HeaderAndMessage = () => {

    const line = {}; // must be a name thats to be added to className which refers to a real class in css file 'clickedd-style' 
    const [Active, setActive] = useState(false);

    const clickedd = () => {
        line.push('clickedd-style')
    }

    return (
        <>
            <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                <div className="nada_height-of-navbar container-fluid justify-content-around">
                    <div className="d-flex">
                        <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                            <img
                                src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png"
                                height="35"
                                alt="Linkedin Logo"
                                loading="lazy"
                            />
                        </a>

            {/* ________________________________________________________________________ */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* SEARCH FORM ----------------------- */}
                                    <form className="input-group w-auto my-auto d-none d-sm-flex">
                                        <div className="nada_search-sec">
                                            <i className="material-symbols-outlined d-lg-flex"> Search </i>
                                            <input className="nada_search-input" style={{ minWidth: "125px", fontFamily: 'Quicksand', fontWeight: 600 }} autoComplete="on" type="search" placeholder="Search" />
                                        </div>
                                    </form>
                            {/* UL LINKS----------------------- */}
                                    <ul onClick={() => setActive(true)} className={"navbar-nav flex-row d-none d-md-flex"} style={{ marginTop: "54px" }}>
                                        <li className="nav-item me-3 me-lg-1 active">
                                            <a className="nav-link" href="#">
                                                <span><i className={"material-symbols-sharp"}>Home</i></span>
                                                <span className={"badge rounded-pill badge-notification bg-danger"}>1</span>
                                                <p className="nav-link-p">Home</p>
                                                {/*      + (Active ? line : '')      added to className obj className={"" + ...}   */}
                                            </a>
                                        </li>

                                        <li className="nav-item me-3 me-lg-1">
                                            <a className="nav-link" href="#">
                                                <span><i className="material-symbols-sharp">group</i></span>
                                                <span className="badge rounded-pill badge-notification bg-danger">2</span>
                                                <p className="nav-link-p" >Network</p>
                                            </a>
                                        </li>

                                        <li className="nav-item me-3 me-lg-1">
                                            <a className="nav-link" href="#">
                                                <span><i className="material-symbols-sharp">work</i></span>
                                                <span className="badge rounded-pill badge-notification bg-danger">2</span>
                                                <p className="nav-link-p">Jobs</p>
                                            </a>
                                        </li>

                                        <li className="nav-item me-3 me-lg-1">
                                            <a className="nav-link" href="#">
                                                <span><i className="material-symbols-sharp">sms</i></span>
                                                <span className="badge rounded-pill badge-notification bg-danger">2</span>
                                                <p className="nav-link-p">Messages</p>
                                            </a>
                                        </li>

                                        <li className="nav-item me-3 me-lg-1">
                                            <a className="nav-link" href="#">
                                                <span><i className="material-symbols-sharp">notifications_active</i></span>
                                                <span className="badge rounded-pill badge-notification bg-danger">2</span>
                                                <p className="nav-link-p">Notifications</p>
                                            </a>
                                        </li>


                                        <li className="nav-item me-3 me-lg-1">
                                            <a className="nav-link d-sm-flex align-items-sm-center" href="#">
                                                <div className="flex">
                                                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle" height="30" alt="Black and White Portrait of a Man" loading="lazy" />

                                                    <div className="flex nada_hey">
                                                        <strong className="col">Me</strong>

                                                        <a className="nada_arroww nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i className="material-symbols-outlined"> arrow_drop_down </i> </a>
                                                        <ul className="nada_Me-droppp dropdown-menu dropdown-menu-end" style={{ width: "290px", marginRight: "15%" }} aria-labelledby="navbarDropdownMenuLink">
                                                            <li> <a className="dropdown-item" href="#">Some news</a></li>
                                                            <li> <a className="dropdown-item" href="#">Another news</a> </li>
                                                            <li> <a className="dropdown-item" href="#">Something else here</a> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>


                                        <li className="nav-item me-3 me-lg-1 nada_line">
                                            <a className="nav-link d-sm-flex align-items-sm-center" href="#">
                                                <div className="flex">
                                                    <i className="material-symbols-sharp">apps</i>
                                                    <div className="flex nada_hey">
                                                        <strong style={{ marginRight: "10px" }} className="col">Works</strong>
                                                        <a className="nada_arroww nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i className="material-symbols-outlined"> arrow_drop_down </i> </a>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="nav-item me-3 me-lg-1">
                                            <p className="nada_tryyy" style={{ alignSelf: "center", marginTop: "10%" }}><a href="#">Try preminum for free</a></p>
                                        </li>


                                    </ul>
                            {/* ----------------------- */}
                        </div>
            {/* ________________________________________________________________________ */}

                    </div>

                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>

                </div>
            </nav>
        </>
    );
}

export default HeaderAndMessage;