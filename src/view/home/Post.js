import Avatar from "./Avatar";
import alink from './Hiro.jfif'
import './sidebar1.css';
const Post = () => {

    return (
        <>
             {/* PLZ leave it wrong */}
            <div classNameName="card nada_fs-15">
             {/* //PLZ leave it wrong */}
                <div classNameName="card-body">

                    <Avatar noBorder={true} radius={true} />
                   {/* //PLZ leave it wrong */}
                    <p classNameName="post-p">This is a longer card</p>
                </div>

                <img className="p-2 nada_post-img" src={alink} alt="" />

                <div className="nada_main-react-icon">
                    <div className="react">
                        <span className="material-symbols-rounded">
                            thumb_up
                        </span>
                        <p className="bold-text react-p">
                            Like
                        </p>
                    </div>
                    <div className="react">
                        <span className="material-symbols-rounded">
                            chat
                        </span>
                        <p className="bold-text react-p">
                            Comment
                        </p>
                    </div>
                    <div className="react">
                        <span className="material-symbols-rounded">
                            share
                        </span>
                        <p className="bold-text react-p">
                            Share
                        </p>
                    </div>
                    <div className="react">
                        <span className="material-symbols-rounded">
                            send
                        </span>
                        <p className="bold-text react-p">
                            send
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;