import './connection.css';
import photo from '../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';

export default function Connection() {
    return (
        <div className='body'>




            <div className="container p-0  m-0 w-75 mx-auto">
                <div className="row py-3">

                    <div className="col-md-9  col-sm-12 " >
                        <div className="card">

                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: "x-large", fontWeight: "100" }}>You don’t have any connections yet.    </p>

                                <p className="card-text">Discover fresh ideas and jobs on LinkedIn through your connections and their <br /> networks. Find your first connection below.</p>




                            </div>
                        </div>



                        <div className="card mt-3 p-3">


                            <p className="card-title" style={{ fontSize: " x-large", fontWeight: "100" }}>See who you already know on LinkedIn <br />
                                <p style={{ fontSize: "16px", opacity: "75%" }}>  The fastest way to grow your network is to import your contacts</p></p>
                            <p className="card-text " style={{ fontSize: "16px", opacity: "75%" }}>We’ll import and store your contacts to suggest connections and show you relevant updates. <br />


                                You control who you connect to, and you can manage your contacts anytime.
                                <a className="text-decoration-none ">Learn more</a>
                            </p>



                            <p>   You control who you connect to, and you can manage your contacts anytime. <a href='/#' className="text-decoration-none tet">Learn more</a> </p>
                            <form>
                                <input type="email" className="form-control w-75 h-25" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address" />
                                < input className="btn btn-primary w-10 px-3 py-1 mt-2 rounded-pill" type='button' value='continue' />
                            </form>

                            <a className="text-muted text-decoration-none mb-3 form-control-sm ">More options</a>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12  " >
                    <div className='card'>

                        <img alt='' src={photo} className='p-2 w-100' />

                        <div
                            className="text-xl-center mt-3 mx-2"
                            style={{ overflow: " visible" }}

                        >
                            <span>

                                <a className="link m-2  text-muted">About</a >
                            </span>
                            <span>
                                <a className="link m-2">Accessibility</a>
                            </span>
                            <span >
                                <a className="link m-2">Help Center</a >

                                <a className="link m-2  text-muted" href='/#' >About </a>
                            </span>
                            <span>
                                <a href='/#' className="link m-2" >Accessibility</a>
                            </span>
                            <span >
                                <a href='/#' className="link m-2" >Help Center</a>

                            </span>
                            <span><a href='/#' className="link m-2">Privacy & Terms i</a></span>
                            <span>

                                <a className="link m-2">Ad Choices</a>
                            </span>
                            <span>
                                <a className="link m-2">Advertising</a>

                                <a href='/#' className="link m-2" >Ad Choices</a>
                            </span>
                            <span>
                                <a className="link m-2" href='/#' >Advertising</a>
                            </span>
                            <div className='centeroflinked  my-3'>
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