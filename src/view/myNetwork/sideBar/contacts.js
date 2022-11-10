import './contact.css';
import photo from '../image/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png';
import pro from '../image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg';

export default function Contact() {
    return (
        <div >

            <div className="body">
                <div className="card w-100  bg-white py-3" >
                    <div className='w-75 mx-auto d-flex align-items-center'>
                        <div className=" " >Saved contacts</div>
                        <div className='btn btn-primary rounded-pill px-3 py-1 ms-4'>Google</div>
                    </div>
                </div>

                <div className="container p-0 m-0 w-75 mx-auto mt-4">
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <div className="card" >
                                <div className='d-flex align-items-center justify-content-between py-2 px-3'>
                                    <div>
                                        <p> 9 Imported Contects</p>
                                        <p> Sort by : Recentely added</p>
                                    </div>
                                    <div>
                                        <form>
                                            <input type='search' placeholder='search by name or company' />
                                        </form>
                                    </div>
                                </div>
                                <hr className='hrfull' />
                                <div className='d-flex align-items-center justify-content-between ps-2 pe-4 mt-2'>
                                    <div className='d-flex align-items-center ' >
                                        <div >
                                            <img src={pro} style={{borderRadius:'50%', width:"70px",height:'70px'}}/>
                                        </div>
                                        <div className='ms-2'>
                                            <h5>mohamed walid</h5>
                                            <p  className='m-0'>frontend developer</p>
                                            <p  className='m-0'>created:14/7/2022</p>
                                        </div>
                                    </div>
                                    <div className='btn text-primary border border-primary rounded-pill'>
                                        messege
                                    </div>
                                    
                                </div>
                                <hr className='hrfull'  style={{marginLeft:'90px'}}/>
                                <div className='d-flex align-items-center justify-content-between ps-2 pe-4 mt-2'>
                                    <div className='d-flex align-items-center' >
                                        <div >
                                            <img src={pro} style={{borderRadius:'50%', width:"70px",height:'70px'}}/>
                                        </div>
                                        <div className='ms-2'>
                                            <h5>mohamed walid</h5>
                                            <p className='m-0'>frontend developer</p>
                                            <p  className='m-0'>created:14/7/2022</p>
                                        </div>
                                    </div>
                                    <div className='btn text-primary border border-primary rounded-pill'>
                                        messege
                                    </div>
                                    
                                </div>
                                <hr className='hrfull'  style={{marginLeft:'90px'}}/>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-primary rounded-pill"
                                    type="button"> <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
                                        clasName="mercado-match" width="24" height="24" focusable="false">
                                        <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                    </svg> Add more contacts</button>
                                <button className="btn btn-outline-primary rounded-pill"
                                    type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                        <path d="M21 14v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h12a1 1 0 001-1v-5zm-4-.57V11l-4 2.85V3h-2v10.85L7 11v2.43L12 17z"></path>
                                    </svg>
                                    Export contacts</button>
                                <button className="btn btn-outline-primary rounded-pill"
                                    type="button"> <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
                                        className="mercado-match" width="24" height="24" focusable="false">
                                        <path
                                            d="M13.39 16L16 20l-2.61 4H11l2-3.07a8.4 8.4 0 01-1 .07A9 9 0 014 8h2.26a7 7 0 006.65 10.93L11 16zM12 3a8.4 8.4 0 00-1 .07L13 0h-2.39L8 4l2.61 4H13l-1.91-2.93A6.93 6.93 0 0119 12a7.05 7.05 0 01-1.26 4h2.31A9 9 0 0012 3z">
                                        </path>
                                    </svg>Manage synced contacts</button>
                            </div>
                            <div className="text-xl-center mt-3 " >
                              <div className='px-2 card'>  <img src={photo}  /></div>
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
        </div>

    )
}