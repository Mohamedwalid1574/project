/* eslint-disable react/jsx-pascal-case */
import Feed from './Feed';
import './Home.css';
import SideBar_2nd from './SideBar2nd';
import SideBarSt1 from './SideBarSt1';
const Home = () => {

    return (
        <>
            <div className='d-flex mt-5' style={{display:'flex'}}>
                <div className='nada_sideBar nada_st1'>
                    <SideBarSt1/>
                </div>
                <div style={{flex:2}}>
                    <Feed/>
                </div>
                <div className='nada_sideBar nada_nd2'>
                    <SideBar_2nd/>
                </div>
            </div>
        </>
    );
}

export default Home;