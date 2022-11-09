/* eslint-disable no-unused-vars */
import './sidebar_2nd.css'
import GIRL from './girl.png';

// { noBorder, radius }
const Avatarme = ({ noBorder, radius }) => {

    const cicle = {
        borderRaius: '50%'
    }
    const Noborder = {
        border: '0px'
    }

    return (
        <>
            {/* noBorder={false} radius={true} */}
            {/* style={noBorder? Noborder : ''}
        style={radius? cicle : ''} */}

            <div className='ava_1'>
                {
                    radius ?
                        <img className='ava_2' src={GIRL} style={{ borderRadius: '50%' }} alt="" />
                        :
                        <img className='ava_2' src={GIRL} alt="" />
                }

                <div className='ava_3'>
                    <strong style={{cursor:'pointer'}}>Sara Smith</strong>
                    <small>Company - Computer Software</small>
                </div>
                {
                    noBorder ?
                        (
                            <button className='ava_4' style={{ border: '0px' }} >
                                <span className="fas fa-plus ava_5"></span>
                                <span>Follow</span>
                            </button>
                        )
                        :
                        (
                            <button className='ava_4' >
                                <span className="fas fa-plus ava_5"></span>
                                <span>Follow</span>
                            </button>
                        )

                }

            </div>
        </>
    );
}

export default Avatarme;