/* eslint-disable no-unused-vars */
import Avatarme from "./Avatarme";
import Comments from "./Comments";
import alink from './Hiro.jfif'
import RectionPopUp from "./RectionPopUp";
import './sidebar1.css';


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

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

    return (
        <>
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
                        className="text-muted" style={{ cursor: 'pointer', fontSize:'14px', textDecoration:'none' }}>comments</a>
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

                    <div className="react" data-bs-toggle="collapse" href="#collapseExampleComment" role="button" aria-expanded="false" aria-controls="collapseExampleComment"s>
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
                    <div className="card card-body">
                        {/* the user's input Comment here starts */}

                        {/* the user's input Comment here ends */}
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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