import './groups.css';
import photo from '../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import pro from '../image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg';


export default function Peopleifollow() {
    return (
        <div className='body'>


            <div className="container p-0 m-0 w-75 mx-auto pt-4">
                <div className='row'>
                    <div className='col-lg-9 col-md-6 col-sm-12'>
                        <div className='card '>
                            <p className='p-3 m-0' style={{fontSize:'20px'}}>Mohamed’s Neywork</p>
                            <hr className='hrfull' />
                            <div className='d-flex align-items-center p-3'>
                                <div>Following</div>
                                <div className='ms-5'>Follower</div>
                            </div>
                            <hr className='hrfull' />
                            <p className='text-muted m-0 m-3'>4 people are following you</p>
                            <div className='mt-3 d-flex align-items-center justify-content-between px-3 pb-3'>
                                <div className='d-flex align-items-center'>
                                    <img src={pro} style={{ borderRadius: '50%', width: "70px", height: '70px' }} />
                                    <div className='ms-2'>
                                        <h5>mohamed walid</h5>
                                        <p className='m-0'>frontend developer</p>
                                        <p className='m-0 text-muted'>1,398 followers</p>
                                    </div>
                                </div>
                                <div className='btn  rounded-pill px-3 py-1 border-2 border '>Following</div>
                            </div>
                            <hr className='hrfull'  style={{marginLeft:'90px'}}/>
                            <div className='mt-3 d-flex align-items-center justify-content-between px-3 pb-3'>
                                <div className='d-flex align-items-center'>
                                    <img src={pro} style={{ borderRadius: '50%', width: "70px", height: '70px' }} />
                                    <div className='ms-2'>
                                        <h5>mohamed walid</h5>
                                        <p className='m-0'>frontend developer</p>
                                        <p className='m-0 text-muted'>1,398 followers</p>
                                    </div>
                                </div>
                                <div className='btn rounded-pill px-3 py-1 border-2 border '>Following</div>
                            </div>
                            <hr className='hrfull'  style={{marginLeft:'90px'}}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                          
                            <div className="text-xl-center  " >
                              <div className='px-2 card'>  <img src={photo}  /></div>
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