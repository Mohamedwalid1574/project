import './sidebar_2nd.css';
import './sidebar1.css'
import cover from './header.jfif';
import user from './mypic.png';
const SideBarSt1 = () => {
    return (
        <>
            <div className="left-sec">


                <div className="nada_left-sec-part">


                    <div className="nada_prof-pic">
                        <img className="nada_rec-img" src={cover} alt="" />
                    </div>



                    <div>
                        <img className="nada_circle" style={{ width: '20%' }} src={user} alt="" />
                        <p className="nada_name"> Nada Khalid </p>
                    </div>


                    <hr />

                    <div style={{padding:'5%'}}>
                        <div className="d-flex nada_justifySb">
                            <p className="text-muted">Connnection</p>
                            <a href="/#">70</a>
                        </div>

                        <div className="d-flex nada_justifySb">
                            <p className="text-muted">Who viewed my profile</p>
                            <a href="/#">50</a>
                        </div>

                        <div className="d-flex nada_justifySb">
                            <p className="nada_connect-sec">
                                My Saved Items
                            </p>
                            <i className="material-symbols-sharp nada_align-self-center">bookmarks</i>
                        </div>

                    </div>


                    <div className="nada_left-sec-part nada_connect-sec" style={{padding:'5%'}}>

                        <div className="d-flex nada_justifySb nada_padding-margin">
                            <a href="/#">Groups</a>
                        </div>

                        <div className="d-flex nada_justifySb nada_padding-margin">
                            <a href="/#">Evants</a>
                            <i className="material-symbols-sharp">add</i>
                        </div>

                        <div className="d-flex nada_justifySb nada_padding-margin">
                            <a href="/#">Followed Hashtags</a>
                        </div>

                    </div>


                    <div className="nada_left-sec-part" style={{padding:'5%'}}>
                        <div className="d-flex nada_padding-margin">
                            <a href="/#" className='nada_discoverMore'>Discover more</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SideBarSt1;