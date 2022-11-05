import React from 'react'
import {  Link } from "react-router-dom";
import './myNetwork.css';
import cover from './image/images.png';
import photo from './image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import pro from './image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg';
import friendphoto from './image/One_Piece-9f62b3e6-bd9c-423b-b154-09b15a724f62.jpg';


export default function Mynetwork() {
    const myFunction = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }
    }
    return (
        <div className='body'>
            <div className="container my-3">

                <div className="row  " >
                    <div className="col-lg-3  col-sm-6 ">
                        <div className="card" >


                            <div className="">
                                <div className='ms-3 me-3 mb-3'>
                                    <li className="list-group-item my-3">Manage My Network</li>
                                    <li className="list-group-item text-secondary d-flex justify-content-between mb-3">
                                        <div className='d-flex align-items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <Link to="/connection" className="text-decoration-none text-muted  ps-1">Connections</Link>

                                        </div>
                                        <span>25</span>
                                    </li>
                                    <span id="dots"></span><span id="more">
                                        <li className="list-group-item text-secondary d-flex justify-content-between mb-3">

                                            <div className='d-flex align-items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                    <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
                                                </svg>
                                                <Link to="/contacts" className="text-decoration-none text-muted  ps-1">Contacts</Link>

                                            </div>
                                            <span>25</span>
                                        </li>
                                        <li className="list-group-item text-secondary d-flex justify-content-between  mb-3">

                                            <div className='d-flex align-items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg>
                                                <Link to="/peopleifollow" className="text-decoration-none text-muted  ps-1">people I Follow</Link>

                                            </div>
                                            <span>25</span>
                                        </li>
                                        <li className="list-group-item text-secondary d-flex justify-content-between  mb-3">

                                            <div className='d-flex align-items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    <path  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                </svg>
                                                <Link to="/creategroup" className="text-decoration-none text-muted  ps-1">groups</Link>

                                            </div>
                                            <span  >14</span>
                                        </li>
                                        <li className="list-group-item text-secondary d-flex justify-content-between mb-3">

                                            <div className='d-flex align-items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                </svg>
                                                <Link to="/events" className="text-decoration-none text-muted  ps-1">Events</Link>

                                            </div>
                                            <span>25</span>
                                        </li>
                                        <li className="list-group-item text-secondary d-flex justify-content-between mb-3">

                                            <div className='d-flex align-items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                                </svg>
                                                <Link to="/pages" className="text-decoration-none text-muted  ps-1">pages</Link>

                                            </div>
                                            <span  >6</span>
                                        </li>

                                        <li className="list-group-item text-secondary d-flex justify-content-between mb-3">

                                            <div className='d-flex align-items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                                    <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
                                                </svg>
                                                <Link to="/hashtages" className="text-decoration-none text-muted  ps-1">Hashtages</Link>

                                            </div>
                                            <span>25</span>
                                        </li>
                                    </span>
                                    <button type="button " className="btn bi " style={{ color: "gray" }}
                                        id="myBtn" onClick={myFunction}>
                                    </button>
                                </div>

                                <hr className='hrfull' />


                                <img src={photo} className='p-2 w-100' />
                                <hr className='hrfull' />
                                <div
                                    className="text-center mt-3 mx-3"
                                    style={{ overflow: " visible" }}

                                >
                                    <span>
                                        <a className="link m-2  text-muted" >About</a>
                                    </span>
                                    <span>
                                        <a

                                            className="link m-2" >Accessibility</a>
                                    </span>
                                    <span >
                                        <a className="link m-2">Help Center</a >
                                    </span>
                                    <span><a className="link m-2">Privacy & Terms i</a></span>
                                    <span>
                                        <a

                                            className="link m-2">Ad Choices</a>
                                    </span>
                                    <span>
                                        <a

                                            className="link m-2"
                                        >Advertising

                                        </a >
                                    </span>

                                </div>
                                <div className=' mx-4 my-3'>
                                    <div className="   d-flex " >
                                        <div className='d-flex align-items-center text-primary'>
                                            <h6 className='m-0'>linked</h6>
                                            <svg xmlns="http://www.w3.org/2000/svg" width='18' height='18' color='blue' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                            </svg>
                                        </div>
                                        <small >Linkedin Corporation © 2022</small>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="col-lg-9  col-sml-6 ">
                        <div className="card  p-2 mb-3" >
                            <div className=" d-flex justify-content-between">
                                <div  > No pending invitations</div>
                                <a >Manage</a>
                            </div>
                        </div>
                        <div className="card p-3">

                            <div className=" d-flex justify-content-between mb-3">
                                <div>Recommended for you</div>
                                <a >Manage</a>
                            </div>
                            <div >
                                <div className="row row-cols-1 row-cols-md-3 g-4 " >
                                    <div className="col ">
                                        <div className="card w-100 max-wi">


                                            <div >
                                                <img src={cover} className="card-img-top" />
                                                <div className="card-body ">
                                                    <img src={pro} className="rounded-circle pro " />
                                                    <h6 className="card-title " >Mohamed Gamal</h6>
                                                    <div className="card-text opacity-75 mex">Cross-platform developer(Flutter)| ICT Instructor</div>
                                                    <div className='card-footer bg-white border-0'>
                                                        <Link className="btn btn-outline-primary  rounded-5 w-100" >Follow</Link>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="card  max-wi">
                                            
                                                <img src={cover} className="card-img-top" />
                                                <div className="card-body">
                                                    <img src={pro} className="rounded-circle pro" />
                                                    <h6 className="card-title ">Abdelrhman Mohamed Abdo</h6>
                                                    <div className="card-text opacity-75 mex">Entrepreneurship Coach | Career coach
                                                    </div>
                                                    <div className='card-footer bg-white border-0 ms-0 ps-0 '>
                                                        <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                                    </div>

                                                </div>

                                           
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card w-100 max-wi">
                                            <img src={cover} className="card-img-top" />
                                            <div className="card-body">
                                                <img src={pro} className="rounded-circle pro" />
                                                <h6 className="card-title ">Ramy Mohamed</h6>
                                                <div className="card-text opacity-75 mex">Creative Graphic Designer  </div>
                                                <div className='card-footer bg-white border-0'>
                                                    <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="card w-100 max-wi">
                                            <img src={cover} className="card-img-top" />
                                            <div className="card-body hov">
                                                <img src={pro} className="rounded-circle pro" />
                                                <h6 className="card-title " >Yasser Mohamed</h6>
                                                <div className="card-text opacity-75 mex">operation manager at Dandra Al-Ebda3</div>
                                                <div className='card-footer bg-white border-0'>
                                                    <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="card w-100 max-wi">
                                            <img src={cover} className="card-img-top" />
                                            <div className="card-body hov">
                                                <img src={pro} className="rounded-circle pro" />
                                                <h6 className="card-title " >Bill Gates </h6>
                                                <div className="card-text opacity-75 mex">Co-chair, Bill & Melinda Gates Foundation </div>
                                                <div className='card-footer bg-white border-0'>
                                                    <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="card w-100 max-wi">
                                            <img src={cover} className="card-img-top" />
                                            <div className="card-body hov">
                                                <img src={pro} className="rounded-circle pro" />
                                                <h6 className="card-title " >Mohamed Gamal</h6>
                                                <div className="card-text opacity-75 mex">Cross-platform developer(Flutter)| ICT Instructor</div>
                                                <div className='card-footer bg-white border-0'>
                                                    <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between my-3'>
                                <div > People who follow Osama Elzero also follow</div>
                                <a> See all</a>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                                <div className="col ">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title " >Mansour Koura </h6>
                                            <div className="card-text opacity-75 mex">Junior Full Stack Web Developer // HTML & CSS | JavaScript (ES6)...  </div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title " >mohamed tayel
                                            </h6>
                                            <div className="card-text opacity-75 mex">.Net backend team leader

                                            </div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col m">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title " >Ramy Mohamed</h6>
                                            <div className="card-text opacity-75 mex">Creative Graphic Designer <br /> </div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title " >Yasser Mohamed</h6>
                                            <div className="card-text opacity-75 mex">operation manager at Dandra Al-Ebda3</div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title " >Islam Mahfouz </h6>
                                            <div className="card-text opacity-75 mex">Founder @Codezilla | Director of Arabic Content @freeCodeCamp | ex-Udacity </div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title " >Mohamed Gamal</h6>
                                            <div className="card-text opacity-75 mex">Cross-platform developer(Flutter)| ICT Instructor</div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>


                                    </div>


                                </div>

                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <div > People in Egypt are following</div>
                                <div > See all</div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 g-5 " >
                                <div className="col ">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title ">Mansour Ahmed</h6>
                                            <div className="card-text opacity-75 mex">Junior Full Stack Web Developer // HTML & CSS | JavaScript (ES6)...                 </div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title " >Ahmed Abdo
                                            </h6>
                                            <div className="card-text opacity-75 mex">.Net backend team leader

                                            </div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="col m">
                                    <div className="card w-100 max-wi">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <img src={pro} className="rounded-circle pro" />
                                            <h6 className="card-title " >Ekhshin</h6>
                                            <div className="card-text opacity-75 mex">Creative Graphic Designer <br /> </div>
                                            <div className='card-footer bg-white border-0'>
                                                <a className="btn btn-outline-primary  rounded-5 w-100" >Follow</a>
                                            </div>


                                        </div>

                                    </div>
                                </div>


                            </div>

                            <div className='d-flex justify-content-between my-2'>
                            <div >Online events for you</div>
                            <div > See all</div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 g-4 " >
                                <div className="col ">
                                    <div className="card" >
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <h6 className="card-title " >Get Full Training Scholarship in 2022</h6>
                                            <div className="card-text opacity-75">fri, sep 30 - wed, Nov 30 <br /> 7,472 attendess         </div>
                                            <a className="btn btn-outline-primary  rounded-5 w-100" >View</a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card" >
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <h6 className="card-title " >Get Full Training Scholarship in 2022</h6>
                                            <div className="card-text opacity-75">fri, sep 30 - wed, Nov 30 <br /> 7,472 attendess         </div>
                                            <a className="btn btn-outline-primary  rounded-5 w-100" >view</a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card" >
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <h6 className="card-title " >Get Full Training Scholarship in 2022</h6>
                                            <div className="card-text opacity-75">fri, sep 30 - wed, Nov 30 <br /> 7,472 attendess         </div>
                                            <a className="btn btn-outline-primary  rounded-5 w-100" >view</a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card" >
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <h6 className="card-title " >Get Full Training Scholarship in 2022</h6>
                                            <div className="card-text opacity-75">fri, sep 30 - wed, Nov 30 <br /> 7,472 attendess         </div>
                                            <a className="btn btn-outline-primary  rounded-5 w-100" >view</a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <h6 className="card-title " >Get Full Training Scholarship in 2022</h6>
                                            <div className="card-text opacity-75">fri, sep 30 - wed, Nov 30 <br /> 7,472 attendess         </div>
                                            <a className="btn btn-outline-primary  rounded-5 w-100" >view</a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="card">
                                        <img src={cover} className="card-img-top" />
                                        <div className="card-body hov">
                                            <h6 className="card-title " >Get Full Training Scholarship in 2022</h6>
                                            <div className="card-text opacity-75">fri, sep 30 - wed, Nov 30 <br /> 7,472 attendess         </div>
                                            <a className="btn btn-outline-primary  rounded-5 w-100" >view</a>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>







                    </div>
                </div>


            </div>
        </div>


    )
}