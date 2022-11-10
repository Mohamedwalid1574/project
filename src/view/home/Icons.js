const Icons = () => {
    return (

        <>
            {/* THE 4 ICONS --> PHOTOS VIDEO EVENT ARTICLE */}
            <div className="spc-bt btn-bar d-flex">
                <div className="d-flex">
                    <div>
                        <span style={{ color: '#378fe9' }}  className="material-symbols-outlined"> photo_library </span>
                        <p>Photo</p>
                    </div>

                    <div className="btn-bar">
                        <div>
                            <span style={{ color: '#5f9b41' }}  className="material-symbols-outlined"> videocam </span>
                            <p>Video</p>
                        </div>
                    </div>

                    <div className="btn-bar">
                        <div>
                            <span style={{ color: '#c88728' }} className="material-symbols-outlined"> calendar_month </span>
                            <p>Event</p>
                        </div>
                    </div>

                    <div className="btn-bar">
                        <div>
                            <span style={{ color: '#e16745' }}  className="material-symbols-outlined"> feed </span>
                            <p>Write Article</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ----------------------------------------------- */}
        </>
    );
}

export default Icons;