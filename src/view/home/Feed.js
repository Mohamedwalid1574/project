/* eslint-disable no-unused-vars */
import Icons from "./Icons";
import Post from "./Post";
import './home.css';
import user from './girl.png';

/* eslint-disable no-unused-vars */
const Feed = () => {

    const pfp = 'https://th.bing.com/th/id/R.b15541f5211192e39040dbb75cfdae14?rik=x3GrszcrA23SWg&pid=ImgRaw&r=0'
    //const user = 'https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png';

    return (
        <>
            <div className="nada_bg1" >

                <div className='card this_fuckn_post_bar'>

                    <div className=" d-flex">
                        <img src={user} className="nada_post_o" alt="" />
                        <input className="inputt" type="text" placeholder="Start post" />
                    </div>

                    {/* THE 4 ICONS --> PHOTOS VIDEO EVENT ARTICLE */}
                    <div className="ahh_shit">

                        <div className="btn-bar">
                            <span style={{ color: '#378fe9' }} className="material-symbols-outlined"> photo_library </span>
                            <p>Photo</p>
                        </div>

                        <div className="btn-bar">
                            <span style={{ color: '#5f9b41' }} className="material-symbols-outlined"> videocam </span>
                            <p>Video</p>
                        </div>

                        <div className="btn-bar">
                            <span style={{ color: '#c88728' }} className="material-symbols-outlined"> calendar_month </span>
                            <p>Event</p>
                        </div>

                        <div className="btn-bar">
                            <span style={{ color: '#e16745' }} className="material-symbols-outlined"> feed </span>
                            <p>Article</p>
                        </div>

                    </div>


                    {/* ----------------------------------------------- */}

                </div>


                <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <hr className="col-5" style={{ paddingLeft: '15px' }} />
                    <span style={{ width: '92px' }} className="col-2 nada_fs-13">Sorted By</span>

                    <span className="dropdown top nada_fs-13" style={{ fontSize: '13px' }}>
                        <button className="btn dropdown-toggle" style={{ marginLeft: '-5px', fontSize: '13px', border: 'none', boxShadow: 'none', padding: 0 }} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Top</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Top</button>
                            <button className="dropdown-item" type="button">Recent</button>
                        </div>
                    </span>
                </div>

                <br />
                {/* THE FEEDS PART */}
                <div className="container nada_this-feed-post" style={{ marginTop: '-3%', width: '525px' }}>
                    <Post />
                </div>
            </div>
        </>
    );
}

export default Feed;