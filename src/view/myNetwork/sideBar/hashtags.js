import './hashtages.css';
import photo from '../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import empty from '../image/hashtag.png'


export default function Hashtages() {
    return (
        <div className='body py-3'>


            <div className="container w-75">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="card">
                            <ul className="list-group list-group-flush">

                                <img alt='' src={empty} className="mt-3  " />
                                <div className="card-text mt-3 mb-5 text-xl-center" >
                                    <h6 class="form-control-lg mb-0"> No hashtags followed</h6>
                                    Looks like you are not following any <br /> hashtags.</div>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                    <div className='center'>
                            <img alt='' src={photo} />
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
                                <span><a href='/#' className="link m-2">Privacy & Terms i</a></span>
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
                                    <img alt='' src="./image/foot.png" /><span >Linkedin Corporation
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