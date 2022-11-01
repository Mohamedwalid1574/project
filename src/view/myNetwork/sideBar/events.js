import './event.css';
import photo from '../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import empty from '../image/hashtag.png'

export default function Events() {
    return (
        <div className='body py-3'>



            <div className="container w-75">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="card" >
                            <div className="list-group list-group-flush ">
                                <div className='d-flex justify-content-between align-items-center px-3 pt-3'>
                                    <p className="m-0">Events    </p>
                                    <a className="text-decoration-none text-primary" >Create </a>
                                </div>
                                <hr />
                                <img src={empty} className='h-25' />
                                <div className="card-text mt-3 mb-5 text-xl-center" > <h6 className="form-control-lg mb-0"> No events</h6>
                                    Looks like you are not attending any events.</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className='center'>
                            <img src={photo} />
                            <div className="text-xl-center mt-3" >
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
                                        className="link m-2">Help Center</a>
                                </span>
                                <span><a href="" className="link m-2">Privacy & Terms i</a></span>
                                <span>
                                    <a href="https://www.linkedin.com/help/linkedin/answer/62931?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.ad_choices"
                                        className="link m-2">Ad Choices</a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT6H7rzDzR%2FSQEvO%2BuBKdSw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-compactfooter.advertising"
                                        className="link m-2">Advertising

                                    </a>
                                </span>
                                <div className="text-center">
                                    <img src="./image/foot.png" /><span >Linkedin Corporation
                                        © 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>









    )
}