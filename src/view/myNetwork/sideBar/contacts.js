import './contact.css';
import photo from '../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';

export default function Contact() {
    return (
        <div >

            <div className="body">
            <div className="card w-100 " >
                <div className="card-body mt-3  form-control-lg" >Saved contacts</div>
            </div>
           
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">0 Imported Contacts</li>
                                <img src="./image/contact.png" className="mx-4 mt-3" />
                                <li className="list-group-item" >
                                    <h5>Connect with people you know, fast </h5>
                                    Importing contacts helps you keep in touch with your connections. <br /> <a

                                        className="text-decoration-none text-primary "> <br /> Sync your contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-outline-primary "
                                type="button"> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
                                    clasName="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                </svg> Add more contacts</button>
                            <button className="btn btn-outline-primary"
                                type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M21 14v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h12a1 1 0 001-1v-5zm-4-.57V11l-4 2.85V3h-2v10.85L7 11v2.43L12 17z"></path>
                                </svg>
                                Export contacts</button>
                            <button className="btn btn-outline-primary"
                                type="button"> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
                                    className="mercado-match" width="24" height="24" focusable="false">
                                    <path
                                        d="M13.39 16L16 20l-2.61 4H11l2-3.07a8.4 8.4 0 01-1 .07A9 9 0 014 8h2.26a7 7 0 006.65 10.93L11 16zM12 3a8.4 8.4 0 00-1 .07L13 0h-2.39L8 4l2.61 4H13l-1.91-2.93A6.93 6.93 0 0119 12a7.05 7.05 0 01-1.26 4h2.31A9 9 0 0012 3z">
                                    </path>
                                </svg>Manage synced contacts</button>
                        </div>
                    </div>
                    <div className="col-md-9"></div>
                    <div className="col-md-3 col-sm-12">
                        <div className="text-xl-center mt-3 " >
                            <img src={photo} style={{borderRadius:"10px"}}/>
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
                            <div className="text-center" >
                                <img src="./image/foot.png" /><span style={{ fontSize: "10px" }}>Linkedin Corporation
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