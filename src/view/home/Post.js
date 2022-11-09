/* eslint-disable no-unused-vars */
import Avatarme from "./Avatarme";
import Comments from "./Comments";
import alink from './Hiro.jfif'
import RectionPopUp from "./RectionPopUp";
import './sidebar1.css';
import user from './mypic.png';
import EmojiPicker from 'emoji-picker-react';
import { useState , useRef} from "react";
import * as React from 'react';
import { newPost } from "../../store/NotifSlice"; 
import { useDispatch , useSelector } from "react-redux"; 
import HeaderAndMessage from "../headerAndMessage/HeaderAndMessage";

const Post = () => {

    // got the pngs from that site "https://www.userflow.nl/Linkedin-Reaction-Icons-PNG.html"
    const haha = "https://www.userflow.nl/images/linkedin-funny-emoticon-250.png";
    const like = "https://www.userflow.nl/images/Linkedin-Like-Icon-Thumbup250.png";
    const clapp = "https://www.userflow.nl/images/Linkedin-Celebrate-Icon-ClappingHands250.png";
    const support = "https://www.userflow.nl/images/Linkedin-Support-Icon-HeartinHand250.png";
    const love = "https://www.userflow.nl/images/Linkedin-Love-Icon-Heart250.png";
    const inightful = "https://www.userflow.nl/images/Linkedin-Insightful-Icon-Lamp250.png";
    const curios = "https://www.userflow.nl/images/Linkedin-Curious-Icon-PurpleSmiley250.png";

    const hrSttyle = {
        width: '97%', textAlign: 'center', color: '#00000026', marginTop: '3px'
    }

    const [picker, setPicker] = useState(false);
    const [comment, setComment] = useState(false);
    const commentHandele = () => {
        <>
            <div>
                {comment}
            </div>
        </>
    }
    const dispatch = useDispatch()
    
    const comText =   useRef()
    const handelePost = () =>{
        const data = {
            comText : comText.current.value
        }
        dispatch(newPost(data))
    }
    return (
        <>
        <HeaderAndMessage/>
            <div>
                <div>
                    <Avatarme noBorder={true} radius={true} />
                    <p>This is a longer card</p>
                </div>
                <img className="p-2 nada_post-img" src={alink} alt="" />

                {/* <!-- Button trigger modal --> */}
                <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" className="d-flex">
                        <div className="reactCircle"><img src={clapp} style={{ width: '16px' }} alt="" /></div>
                        <div className="reactCircle"><img src={support} style={{ width: '16px' }} alt="" /></div>
                        <div className="reactCircle"><img src={love} style={{ width: '16px' }} alt="" /></div>
                        <p className="muted-text fs-13 ms-3" style={{ cursor: 'pointer' }}>200</p>
                    </div>
                    <div>
                        <a data-bs-toggle="collapse" href="#collapseExampleComment" role="button" aria-expanded="false" aria-controls="collapseExampleComment"
                            className="text-muted" style={{ cursor: 'pointer', fontSize: '14px', textDecoration: 'none' }}>comments</a>
                    </div>
                </div>

                <hr style={hrSttyle} />
                {/* react starts -------------------------------------------------------------------- */}
                <div className="nada_main-react-icon">

                    <div className="react">
                        <div className="material-symbols-rounded"> thumb_up </div>
                        <p className="bold-text react-p"> Like </p>
                        <RectionPopUp />
                        {/* // style={{ position: 'relative', top: '-80px',right: '25px'}} */}
                    </div>

                    <div className="react" data-bs-toggle="collapse" href="#collapseExampleComment" role="button" aria-expanded="false" aria-controls="collapseExampleComment" s>
                        <span className="material-symbols-rounded"> chat </span>
                        <p className="bold-text react-p"> Comment</p>
                    </div>
                    <div className="react">
                        <span className="material-symbols-rounded"> share</span>
                        <p className="bold-text react-p"> Share</p>
                    </div>
                    <div className="react">
                        <span className="material-symbols-rounded"> send </span>
                        <p className="bold-text react-p"> send </p>
                    </div>
                </div>

                {/* My Comment Goes/appears here  */}
                <div className="collapse" id="collapseExampleComment">
                    <div className="m-2 card-body">
                        {/* the user's input Comment here starts */}

                        <div className="d-flex">
                            <img src={user} className="nada_userCircle" alt="" />
                            <div className="d-flex nada_input_commnent" >

                                {/*   the user's comment   */}
                                <input ref={comText} type="text" placeholder="Add Your Comment ..." onChange={(e) => { setComment(e.target.value) }} className="" />


                                <span class="emo_file material-symbols-rounded nada_emmmo" onClick={() => setPicker(!picker)}>add_reaction</span>
                                <span class="emo_file material-symbols-rounded nada_emmmo">
                                    add_photo_alternate
                                </span>
                                {/* // -- uploading file -- don't know why it's not working */}
                                <input type="file" name="fileUpload" id="fileUpload" />
                            </div>
                        </div>
                        {picker ? <EmojiPicker style={{ marginLeft: '10rem' }} /> : ' '}

                        {comment ? <button onClick={() => {
                            <>
                            <div>{comment}</div>
                        </>
                        handelePost()
                        }
                            
                        }
                            className="btn btn-primary nada_post_btn">post</button> : ' '}

                        {/* the user's input Comment here ends */}
                    </div>
                </div>
                {/* My Comment ends  */}
            </div>
            {/* <Comments/> */}

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Reactions</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">


                            {/* modal content starts ...................... */}
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/#">All Reactions</a>
                                </li>
                                <li class="nav-item">
                                    <div className="d-flex">
                                        <a class="nav-link" href="/#">Love</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">Support</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">clap</a>
                                </li>
                            </ul>

                            {/* people react starts--------------------- */}
                            <br />
                            {/* The margin is not working so that i used the br */}
                            <div>
                                <Avatarme style={{ marginTop: '30px' }} />
                                <br />
                                <Avatarme style={{ marginTop: '30px' }} />
                                <br />
                                <Avatarme style={{ marginTop: '30px' }} />
                                <br />
                                <Avatarme style={{ marginTop: '30px' }} />
                                <br />
                                <Avatarme style={{ marginTop: '30px' }} />
                                <br />
                                <Avatarme style={{ marginTop: '30px' }} />
                            </div>
                            {/* people react ends  --------------------- */}

                            {/* modal content ends ...................... */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Post;