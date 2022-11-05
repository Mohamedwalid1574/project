import './groups.css';
import photo from '../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import pro from '../image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg';

export default function Groups() {
    return (
        <div className='body'>




            <section className="bg-white shadow" style={{ position: "relative ", position: "sticky", top: "6%", zIndex: '1' }}>
                <div className="container " >
                    <div className="row py-3">
                        <div className="col-1">
                            <div className="dropdown">
                                <button className="btn btn-success rounded-pill dropdown-toggle" type="button" dataBsToggle="dropdown"
                                    ariaExpanded="false">
                                    groups
                                </button>
                                <ul class="dropdown-menu">
                                    <li><button className="dropdown-item " type="button">All</button></li>
                                    <li><button className="dropdown-item " type="button">People</button></li>
                                    <li><button className="dropdown-item " type="button">Jobs</button></li>
                                    <li><button className="dropdown-item " type="button">Posts</button></li>
                                    <li><button className="dropdown-item " type="button">Compaines</button></li>
                                    <li><button className="dropdown-item " type="button">Groups</button></li>
                                    <li><button className="dropdown-item " type="button">Schools</button></li>
                                    <li><button className="dropdown-item " type="button">Events</button></li>
                                    <li><button className="dropdown-item " type="button">Courses</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="btn rounded-pill border  ">all filters</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-4 ">
                <p className="mb-0">About 2,290,000 results</p>
            </div>
            <section className="container ">
                <div className="row ">
                    <div className="col-lg-9 col-md-7 col-12">
                        <div className="card">
                            <a className="text-dark m-0" href='/#'>
                                <div className="d-flex align-items-start pt-4 ps-3 " >
                                    <img alt='' src={pro} style={{ width: "100px", height: '100px' }} />
                                    <div className="ps-2">
                                        <h4>Software/Technology: Marketing, Social Media, Startups, Blockchain, Human Resources & Metaverse</h4>
                                        <p>2.7M members</p>
                                        <p className="me-5">Welcome! Group Interests: Software, Technology, Marketing, Social Media, Sales, Management, Consulting, Finance, Innovation, Startups, Entrepreneurs, Founders, Executives, Managers, Recruiting, Human Resources, Blockchain,...</p>
                                        <hr className="hrfull" />
                                    </div>
                                </div>
                            </a>


                            <a className="text-dark m-0" href='/#'>
                                <div className="d-flex align-items-start pt-3 ps-3">
                                    <img alt='' src={pro} style={{ width: "100px", height: '100px' }} />
                                    <div className="ps-2">
                                        <h4>
                                            Social Media Marketing Group by Connect365.io</h4>
                                        <p>1.9M members</p>
                                        <p className="me-5">This Social Media Marketing group is the largest LinkedIn group in the world focused on digital marketing and aims to help businesses of any size leverage social media to get more followers, sales opportunities, clients, and...

                                        </p>
                                        <hr className="hrfull" />
                                    </div>
                                </div>
                            </a>
                            <a className="text-dark m-0" href='/#'>
                                <div className="d-flex align-items-start pt-3 ps-3">
                                    <img src={pro} alt='' style={{ width: "100px", height: '100px' }} />
                                    <div className="ps-2">
                                        <h4>FINANCE Club</h4>
                                        <p>1.7M members</p>
                                        <p className="me-5">. The FINANCE CLUB focusses on helping finance professionals to grow their industry network, enhance their career and close more deals. Join us, if you are working in the following industries: Accounting Banking Capital Markets...</p>
                                        <hr className="hrfull" />
                                    </div>
                                </div>
                            </a>
                            <a className="text-dark m-0" href='/#'>
                                <div className="d-flex align-items-start pt-3 ps-3">
                                    <img alt='' src={pro} style={{ width: "100px", height: '100px' }} />
                                    <div className="ps-2">
                                        <h4>markting communication</h4>
                                        <p>1.5M members</p>
                                        <p className="me-5">Marketing Communication: messages and related media used to communicate with a market via advertising, social media, branding, direct marketing, graphic design, affiliate marketing, packaging, promotion, publicity, sponsorship...

                                        </p>
                                        <hr className="hrfull" />
                                    </div>
                                </div>
                            </a>


                        </div>
                        <div className="card mt-2">
                            <div class="d-flex align-items-center justify-content-between p-3">
                                <div>
                                    <h4 className="my-0">Are these results helpful?</h4>
                                    <p className="my-0">Your feedback helps us improve search results</p>
                                </div>

                                <div className="d-flex align-items-center ">
                                    <div className="me-3 btn  border border-primary "><img alt='' src="./img walid/like.png" /></div>
                                    <div className=" btn  border border-primary "><img alt='' src="./img walid/dislike.png" /></div>
                                </div>

                            </div>
                        </div>
                        <div className="card mt-2">
                            <div className="d-flex align-items-center justify-content-between py-2 px-1">
                                <div className="btn border border-0 opacity-50">prvious</div>
                                <div className="flex ">
                                    <div className="mx-2  btn border border-0 ronnded-circle">1</div>
                                    <div className="mx-2 btn border border-0 ronnded-circle">2</div>
                                    <div className="mx-2  btn border border-0 ronnded-circle">3</div>
                                    <div className="mx-2  btn border border-0 ronnded-circle">4</div>
                                    <div className="mx-2 btn border border-0 ronnded-circle">5</div>
                                    <div className="mx-2 btn border border-0 ronnded-circle">6</div>
                                    <div className="mx-2 btn border border-0 ronnded-circle">...</div>
                                    <div className="mx-2  btn border border-0 ronnded-circle">100</div>
                                </div>
                                <div className="btn border border-0">next</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-12">
                        <div className="card " >
                            <img src={photo} alt='' className="mx-2" />

                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}