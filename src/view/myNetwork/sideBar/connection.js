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
                               <form>
                               <input type="email" className="form-control w-75 h-25" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address" />   
                               < input className="btn btn-primary w-10 px-3 py-1 mt-2 rounded-pill" type='button' value='continue' />
                                   </form>              
                            
                            <a className="text-muted text-decoration-none mb-3 form-control-sm ">More options</a>
                           

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12  " >
                        <div className='card'>

                            <img src={photo} className='p-2 w-100' />

                            <div
                                className="text-xl-center mt-3 "
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
                                </span>
                                <span><a className="link m-2">Privacy & Terms i</a></span>
                                <span>
                                    <a className="link m-2">Ad Choices</a>
                                </span>
                                <span>
                                    <a className="link m-2">Advertising</a>
                                </span>
                                <div className='centeroflinked  my-3'>
                                    <div className="   d-flex " >
                                        <div className='d-flex align-items-center text-primary'>
                                            <h6 className='m-0'>linked</h6>
                                            <svg xmlns="http://www.w3.org/2000/svg" width='18' height='18' color='blue' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                            </svg>
                                        </div>
                                        <small >Linkedin Corporation©2022</small>
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