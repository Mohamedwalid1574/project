/* eslint-disable no-unused-vars */
import Icons from "./Icons";
import Post from "./Post";
/* eslint-disable no-unused-vars */
const Feed = () => {

    const pfp = 'https://th.bing.com/th/id/R.b15541f5211192e39040dbb75cfdae14?rik=x3GrszcrA23SWg&pid=ImgRaw&r=0'
    return (
        <>
            <div className="nada_bg1" >


                {
                /* <div style={{boxShadow:'none', marginTop: '1%', marginBottom: '2%', width:'75%' }} className="card">
                    <div className="card-body">

                        <div className="btn-bar d-flex">
                            <span style={{ width: '25px' }} className="material-symbols-outlined"> account_circle </span>
                            <input className="inputt" type="text" placeholder="Start post" />
                        </div>
                        <Icons/>
                        <div>
                </div>
                */}

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