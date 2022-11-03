import './groups.css';

import pro from '../image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg';


export default function Peopleifollow() {
    return (
        <div className='body'>


            <div className="container pt-4">
                <div className="card ">
                    <div className="row  px-4">
                        <a class="col-lg-2 col-5 btn border border-0">follow fresh perspective</a>
                        <a className="col-lg-2 col-5 btn border border-0">6 followeing</a>
                        <a className="col-lg-2 col-5 btn border border-0">1 follower</a>
                    </div>
                </div>
                <p className="mt-5 mb-0">Unfollow to stop seeing their posts in your feed. Don’t worry, they won’t be notified.</p>
                <div className="card  mt-0">
                    <div className="d-flex align-items-center justify-content-between p-3">
                        <p className="my-0">fillter by ALL</p>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                ...
                            </button>
                            <ul class="dropdown-menu">
                                <li><button className="dropdown-item " type="button">All</button></li>
                                <li><button className="dropdown-item " type="button">connections</button></li>
                                <li><button className="dropdown-item " type="button">out-of-network</button></li>
                                <li><button className="dropdown-item " type="button">compinese</button></li>
                                <li><button className="dropdown-item " type="button">hashtages</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mt-2">
                    <div className="row">
                        <div className="row row-cols-1 row-cols-md-4  g-0 " >
                            <div className=" col mb-2">
                                <div className="card " >
                                    <div className="p-3">
                                        <div className="h-25"><img src={pro} style={{ width: "100px", height: "100px" }} /></div>
                                        <h5>WazaefAlyoum.com </h5>
                                        <p>
                                            Staffing and Recruiting
                                        </p>
                                        <hr className="col-3" />
                                        <p>25 posts this week</p>
                                    </div>
                                    <hr className="hrfull" />
                                    <div className=" text-center m-0 py-2">following</div>
                                </div>
                            </div>



                            <div className=" col  px-0">
                                <div className="card">
                                    <div className="p-3">
                                        <img src={pro} style={{ width: "100px", height: "100px" }} />
                                        <h5>WUZZUF</h5>
                                        <p>Staffing and Recruiting</p>
                                        <hr className="col-3" />
                                        <p>
                                            10 posts this week
                                        </p>
                                    </div>
                                    <hr className="hrfull" />
                                    <div className=" text-center m-0 py-2">following</div>
                                </div>
                            </div>



                            <div className=" col  px-0">
                                <div className="card">
                                    <div className="p-3">
                                        <img src={pro} style={{ width: "100px", height: "100px" }} />
                                        <h5>وظائف دبي</h5>
                                        <p>Staffing and Recruiting</p>
                                        <hr className="col-3" />
                                        <p>45 posts this week</p>
                                    </div>
                                    <hr className="hrfull" />
                                    <div className=" text-center m-0 py-2">following</div>
                                </div>
                            </div>



                            <div className=" col px-0">
                                <div className="card">
                                    <div className="p-3">
                                        <img src={pro} style={{ width: "100px", height: "100px" }} />
                                        <h5>mohamed gamal</h5>
                                        <p>Cross-platform developer(Flutter)| ICT...</p>
                                        <hr className="col-3" />
                                        <p>1.9k followers</p>
                                    </div>
                                    <hr className="hrfull" />
                                    <div className=" text-center m-0 py-2">following</div>
                                </div>
                            </div>


                            <div className=" col  px-0">
                                <div className="card">
                                    <div className="p-3">
                                        <img src={pro} style={{ width: "100px", height: "100px" }} />
                                        <h5>EgyRec-jobs وظائف في مصر</h5>
                                        <p>
                                            Staffing and Recruiting
                                        </p>
                                        <hr className="col-3" />
                                        <p>13 posts this week</p>
                                    </div>
                                    <hr className="hrfull" />
                                    <div className=" text-center m-0 py-2">following</div>
                                </div>
                            </div>
                        </div>
</div>
                    </div>
                </div>
            </div>



            )
}