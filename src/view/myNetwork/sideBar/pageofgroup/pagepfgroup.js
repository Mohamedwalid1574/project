import './pageofgroup.css';
import cover from '../../image/images.png';
import photo from '../../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import pro from '../../image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg';
import {
   Link
  } from "react-router-dom";

export default function Pageofgroup() {
    return (
        <div className='body'>

            <div className="container pt-4">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-12 ">
                        <div className="card ">
                            <img alt='' src={cover} />

                            <div style={{ width: "75px", height: "75px", marginTop: "-12%", borderRadius: "50%", padding: '2px' }} className='bg-white mx-auto'>  <img alt='' src={pro} className="  mohamed2" /></div>
                            <a href='/#' className="m-0 p-0 a" ><h5 className="text-center my-3">mohamed walid</h5></a>

                        </div>
                        <div className="card mt-2 " style={{ position: "relative", position: "sticky", top: "10%" }}>
                            <Link to="/creategroup" className="text-primary py-1 px-2">groups</Link>
                            <Link to="/events"  className="text-primary py-1 px-2 ">events</Link>
                            <Link to="/hashtages"  className="text-primary py-1 px-2">follow hashtages</Link>
                            <hr className="hrfull" />
                            <div className=" text-center py-2">Discover More</div>

                        </div>
                    </div>
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="card">
                            <img alt='' src={cover} />
                            <div className='d-flex mx-3 justify-content-between'>
                                <div style={{ width: "118px", height: "118px", marginTop: "-10%", }} className='bg-white'><img alt='' src={pro} className=" logo" /></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-three-dots mt-2" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                            </div>
                            <h3 className="ms-3 me-2">Software/Technology: Marketing, Social Media, Startups, Blockchain, Human
                                Resources & Metaverse</h3>
                            <div className="d-flex align-items-center ms-3 w-25  ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                </svg>
                                <p className="ms-2 my-0 opacity-50 border border-0">Listed group
                                </p>
                            </div>
                            <p className="ms-3">2,724,690 members</p>
                            <div className="btn text-bg-primary rounded-pill ms-3 w-25 mb-3">Join</div>
                        </div>
                        <div className="card mt-2">
                            <div className="py-3 px-2">
                                <h3>About this group</h3>
                                <p>welcome!</p>
                                <p>Group Interests: Software, Technology, Marketing, Social Media, Sales, Management,
                                    Consulting, Finance, Innovation, Startups, Entrepreneurs, Founders, Executives, Managers,
                                    Recruiting, Human Resources, Blockchain, Crypto, Web3 and Metaverse...</p>
                            </div>
                            <hr className="hrfull" />
                            <div className=" text-center py-2 ">show all</div>
                        </div>
                        <div className="card mt-2 px-2 py-3">
                            <h3>Member highlights</h3>
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46"   viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                <div className="ms-2">
                                    <h4>6</h4>
                                    <p className="my-0">Are located in Markaz Nagaa Hamadi</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <h3 className="ms-2 mt-3">Related groups</h3>
                            <div className="d-flex align-items-start pt-4 ps-3">
                                <img alt='' src={pro} className='logo2' />
                                <div className="ps-2">
                                    <h5>Software/Technology: Marketing, Social Media, Startups, Blockchain, Human Resources &
                                        Metaverse</h5>
                                    <p>2.7M members</p>

                                    <hr className="hrfull" />
                                </div>
                            </div>
                            <div className="d-flex align-items-start pt-3 ps-3">
                                <img alt='' src={pro} className='logo2' />
                                <div className="ps-2">
                                    <h5>Metaverse Careers: Blockchain, Finance, HR, Jobs, Marketing, Social Media, Startups &
                                        Technology
                                    </h5>
                                    <p>2.1M members</p>



                                    <hr className="hrfull" />
                                </div>
                            </div>
                            <div className="d-flex align-items-start pt-3 ps-3">
                                <img alt='' src={pro} className='logo2' />
                                <div className="ps-2">
                                    <h5>Women: Blockchain, Finance, HR, Marketing, Social Media, Startups, Technology & Venture
                                        Capital
                                    </h5>
                                    <p>2.6M members</p>


                                </div>
                            </div>
                            <hr className="hrfull" />
                            <div className="text-center my-0 py-2">show all</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="card ">
                            <div className="px-2 py-3">
                                <h5>Admins</h5>

                                <div className="d-flex mt-3">
                                <div style={{ width: "75px", height: "75px",  borderRadius: "50%" }} >
                                      <img alt='' src={pro} className="  mohamed2" />
                                      </div>
                                    <div className="ms-2">
                                        <p className="mb-0">Peter Lee, Esq., CAMS, CBP</p>
                                        <div className="my-0  d-inline px-2" style={{ backgroundColor: "rgb(190, 189, 189)" }}>owner</div>
                                        <p className="opacity-50 mx-0">Founder, Blockchain Industry Group (BIG)
                                        </p>

                                    </div>
                                </div>

                                <div className="d-flex  mt-3">
                                <div style={{ width: "75px", height: "75px",  borderRadius: "50%" }} >
                                      <img alt='' src={pro} className="  mohamed2" />
                                      </div>
                                    <div className="ms-2">
                                        <p className="mb-0">md kmural hasan</p>
                                        <div className="my-0  d-inline px-2" style={{ backgroundColor: "rgb(190, 189, 189)" }}>manager</div>
                                        <p className="opacity-50 mx-0">General Manager & Head of Admin at BJIT Group
                                            Bernadeth Madlangbayan
                                        </p>

                                    </div>
                                </div>

                                <div className="d-flex mt-3">
                                <div style={{ width: "75px", height: "75px",  borderRadius: "50%" }} >
                                      <img alt='' src={pro} className="  mohamed2" />
                                      </div>
                                    <div className="ms-2">
                                        <p className="mb-0">bernadeth madlangbayan</p>
                                        <div className="my-0  d-inline px-2" style={{ backgroundColor: "rgb(190, 189, 189)" }}>manager</div>
                                        <p className="opacity-50 mx-0">Social Media Assistant at Blockchain Industry Group (BIG)</p>

                                    </div>
                                </div>
                            </div>
                            <hr className="hrfull" />
                            <p className="text-center mb-0 py-2">Show more</p>
                        </div>
                        <div style={{ position: "relative", position: "sticky", top: "10%" }}>
                            <div className="card mt-2" >
                                <img alt='' src={photo} className="mx-2" />

                            </div>
                            <div className="mt-4 mx-2 py-2 ">
                                <div style={{ display: "flex ", justifyContent: "space-evenly" }}>
                                    <a href="/#" className='a text-muted'><small className="card-text"> apout</small></a>
                                    <a href="/#" className='a text-muted'><small className="card-text"> Accessibility</small></a>
                                    <a href="/#" className='a text-muted'><small className="card-text"> Help Center</small></a>
                                </div>
                                <div style={{ display: "flex ", justifyContent: "space-evenly" }}>
                                    <a href="/#" className='a text-muted'><small className="card-text">Privacy & Terms <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                                    </svg></small></a>
                                    <a href="/#" className='a text-muted'><small className="card-text"> Ad Choices</small></a>
                                </div>
                                <div style={{ display: "flex ", justifyContent: "space-evenly" }}>
                                    <a href="/#" className='a text-muted'><small className="card-text"> Advertising</small></a>
                                    <a href="/#" className='a text-muted'><small className="card-text"> Business Services<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                                    </svg></small></a>
                                </div>
                                <div style={{ display: "flex ", justifyContent: "space-evenly" }}>
                                    <a href="/#" className='a text-muted'><small className="card-text"> Get the LinkedIn app</small></a>
                                    <a href="/#" className='a text-muted'><small className="card-text">  More</small></a>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <p className='maro_se3_e1'>
                                        LinkedIn
                                    </p>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
                                            <path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
                                        </svg>
                                    </div>

                                    <p className='maro_se3_e2'>
                                        LinkedIn Corporation 2022
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    )
}