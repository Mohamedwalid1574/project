/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './comments.css';
import("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
const Comments = () => {
    return (
        <>
            <div className="">
                <div className="">
                    <textarea className="form-control" rows="2" placeholder="What are you thinking?"></textarea>
                </div>
            </div>
        </>
    );
}

export default Comments;