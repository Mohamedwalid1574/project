import './event.css';
import photo from '../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import empty from '../image/hashtag.png'

export default function Events() {
    return (
        <div className='body py-3'>



            <div className="container w-75 m-0 p-0 mx-auto">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="card" >
                            <div className=" ">
                                <div className='d-flex justify-content-between align-items-center px-3 pt-3'>
                                    <p className="m-0">Events    </p>
                                    <a className="text-decoration-none text-primary" >Create </a>
                                </div>
                                <hr />
                                <div className='centeroflinked'>
                                    <img src={empty} />
                                </div>
                                <div className="card-text mt-3 mb-5 text-xl-center" >
                                    <h6 className="form-control-lg mb-0"> No events</h6>
                                    Looks like you are not attending any events.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="text-xl-center  " >
                            <div className='px-2 card'>  <img src={photo} /></div>
                            <div className='p-2 mx-auto'>
                                <span>
                                    <a href="https://about.linkedin.com/" className="link m-2  text-muted">About
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/accessibility?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.accessibility"
                                        className="link m-2">Accessibility</a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_feed&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.help"
                                        class="link m-2">Help Center</a>
                                </span>
                                <span><a href="" className="link m-2">Privacy & Terms </a></span>
                                <span>
                                    <a href="https://www.linkedin.com/help/linkedin/answer/62931?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.ad_choices"
                                        className="link m-2">Ad Choices</a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.advertising"
                                        className="link m-2">Advertising

                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.advertising"
                                        className="link m-2">Business Services

                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.advertising"
                                        className="link m-2">Get the linkedin app

                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.advertising"
                                        className="link m-2">More

                                    </a>
                                </span>
                            </div>
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









    )
}