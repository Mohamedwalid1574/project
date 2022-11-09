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
import { Link } from "react-router-dom";

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
                                    <Link className="nav-link" to="/job">
                                        <span><i className="material-symbols-sharp">work</i></span>
                                        <span className="badge rounded-pill badge-notification bg-danger">2</span>
                                        <p className="nav-link-p">Jobs</p>
                                        {/* <button className="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
                                    </Link>
                                </li>

                                <li className="nav-item me-3 me-lg-1">
                                    <a className="nav-link" href="#">
                                        <span><i className="material-symbols-sharp">sms</i></span>
                                        <span className="badge rounded-pill badge-notification bg-danger">2</span>
                                        <p className="nav-link-p">Messages</p>
                                    </a>
                                </li>

                                <li className="nav-item me-3 me-lg-1">
                                    <Link className="nav-link" to="/not">
                                        <span><i className="material-symbols-sharp">notifications_active</i></span>
                                        <span className="badge rounded-pill badge-notification bg-danger">2</span>
                                        <p className="nav-link-p">Notifications</p>
                                    </Link>
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
                                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="nav-link d-sm-flex align-items-sm-center" href="#">
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
                                    <p className="nada_tryyy" style={{ alignSelf: "center", marginTop: "10%" }}><Link to="/pre">Try preminum for free</Link></p>
                                </li>


                            </ul>
                            {/* ----------------------- */}
                        </div>
                        {/* ________________________________________________________________________ */}

                    </div>

                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>

                </div>
            </nav>


            {/* ------- offcanvasRight Part ------- */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

                <div className="offcanvas-header">
                    <h1 className="offcanvas-title" id="offcanvasRightLabel" style={{ textAlign: 'center' }} > work </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                {/* - - -       ...        - - - */}


                <div className="offcanvas-body">

                    <div className="card">
                        <div className="card-header fw-bold fs-5 p-3" style={{ backgroundColor: 'white' }}>
                            Visit More LinkedIn Products
                        </div>
                        <div className="card-body">
                            <br />
                            {/* ------------icons starts */}
                            <div className="row ps-4">
                                <div className="col d-flex">
                                    <div className="nada_align" style={{ width: '4rem', height: '4rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'blue', fontSize: '2rem' }}> cast_for_education </span>
                                        <p className="card-text" style={{ fontSize: 'xx-small' }}>Learning</p>
                                    </div>

                                    <div className="nada_align" style={{ width: '4rem', height: '4rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'blue', fontSize: '2rem' }}> insights </span>
                                        <p className="card-text" style={{ fontSize: 'xx-small' }}>Insights</p>
                                    </div>

                                    <div className="nada_align" style={{ width: '4rem', height: '4rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'blue', fontSize: '2rem' }}> post_add </span>
                                        <p className="card-text" style={{ fontSize: 'xx-small' }}>Post a job</p>
                                    </div>

                                    <div className="nada_align" style={{ width: '4rem', height: '4rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'blue', fontSize: '2rem' }}> published_with_changes </span>
                                        <p className="card-text" style={{ fontSize: 'xx-small' }}>Advertise</p>
                                    </div>

                                </div>
                                <br /> <br />
                                {/* row2-------------------------- */}
                                <div className="col d-flex">
                                    <div className="nada_align" style={{ width: '4rem', height: '4rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'blue', fontSize: '2rem' }}> content_paste_search  </span>
                                        <p className="card-text" style={{ fontSize: 'xx-small' }}>Find leads</p>
                                    </div>
                                    <div className="nada_align" style={{ width: '4rem', height: '4rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'blue', fontSize: '2rem' }}> diversity_3  </span>
                                        <p className="card-text" style={{ fontSize: 'xx-small' }}>Groups</p>
                                    </div>

                                    <div className="nada_align" style={{ width: '4rem', height: '4rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'blue', fontSize: '2rem' }}> insights </span>
                                        <p className="card-text" style={{ fontSize: 'xx-small' }}>Service Marketplace</p>
                                    </div>

                                    <div className="nada_align" style={{ width: '4rem', height: '4rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'blue', fontSize: '2rem' }}> post_add </span>
                                        <p className="card-text" style={{ fontSize: 'xx-small' }}>Salary</p>
                                    </div>
                                </div>
                            </div>

                            {/* ------------icons ends */}
                            <br />
                        </div>
                    </div>

                    <br /> <br />
                    <div className="card">
                        <div className="card-header fs-5 fw-bold" style={{ backgroundColor: 'white' }}>
                            LinkedIn Business Services
                        </div>

                        <div className="card-body">
                            <br />
                            <div className="lh-1">
                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="card-text fw-bolder">Talent Solutions</span>
                                </a>

                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="fw-lighter nada_exsmall" > Find, attract and recruit talent </span>
                                </a>
                            </div>
                            <br />
                            <div className="lh-1">
                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="card-text fw-bolder">Sales Solutions</span>
                                </a>

                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="fw-lighter nada_exsmall" > Unlock sales opportunities </span>
                                </a>
                            </div>
                            <br />
                            <div className="lh-1">
                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="card-text fw-bolder">Post a job for free</span>
                                </a>

                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="fw-lighter nada_exsmall" > Get your job in front of quality candidates </span>
                                </a>
                            </div>
                            <br />
                            <div className="lh-1">
                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="card-text fw-bolder">Marketing Solutions</span>
                                </a>

                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="fw-lighter nada_exsmall" >Acquire customers and grow your business</span>
                                </a>
                            </div>
                            <br />
                            <div className="lh-1">
                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="card-text fw-bolder">Learning Solutions</span>
                                </a>

                                <a href="/#" style={{ color: 'black' }}>
                                    <span className="fw-lighter nada_exsmall" >Develop talent across your organization</span>
                                </a>
                            </div>
                            <br />
                        </div>
                        <br /><br />
                        <div class="card-footer fw-bold p-3" style={{ backgroundColor: 'white' }}>
                            <a href="/#">
                                Create a Company Page
                                <span class="material-symbols-outlined nada_add"> add </span>
                            </a>
                        </div>
                    </div>
                    <br />
                </div>
            </div>


            {/* Message part -------------------------------------------------------------- */}
            {/* <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
            {/* Message part -------------------------------------------------------------- */}





        </>
    );
}

export default HeaderAndMessage;