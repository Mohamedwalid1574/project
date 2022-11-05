import './sidebar_2nd.css';
import GIRL from './girl.png';
const SideBar_2nd = () => {
    return (
        <>
            <aside id="right-aside">
                
                <div id="rec-section">
                    <div>
                        <header>
                            <span>Add to your feed</span>
                            <span
                                className="fas fa-info-circle"
                                onmouseover="showRecommendationsInfo(this)"
                                onmouseout="showRecommendationsInfo(this)" >
                                <div id="float-info">
                                    <span>
                                        Follow things that interest you to
                                        personalize your feed.
                                    </span>
                                    <a href="/#">Learn more.</a>
                                </div>
                                <span>►</span>
                                <div id="square"></div>
                            </span>
                        </header>
                        <div>
                            <div>
                                <img src={GIRL} alt="" />
                                <div>
                                    <strong>MongoDB</strong>
                                    <small>Company - Computer Software</small>
                                </div>
                                <button>
                                    <span className="fas fa-plus"></span>
                                    <span>Follow</span>
                                </button>
                            </div>
                            <div>
                                <img src={GIRL} alt="" />
                                <div>
                                    <strong>#reactjs</strong>
                                </div>
                                <button>
                                    <span className="fas fa-plus"></span>
                                    <span>Follow</span>
                                </button>
                            </div>
                            <div>
                                <img src={GIRL} alt="" />
                                <div>
                                    <strong>John Smith</strong>
                                    <small
                                    >Entrepreneur and Marketing
                                        Specialist</small
                                    >
                                </div>
                                <button>
                                    <span className="fas fa-plus"></span>
                                    <span>Follow</span>
                                </button>
                            </div>
                        </div>
                        <a href="/#">View all recommendations</a>
                    </div>
                </div>
                
                <div id="linkedin-section">
                    <section>
                        <small>Ad</small>
                        <a href="/#">
                            <span
                            >Maurício, unlock your full potential with
                                Linkedin Premium</span
                            >
                            <div>
                                <img src={GIRL} alt="" />
                                <img
                                    id="linkedin-key"
                                    src={GIRL}
                                    alt=""
                                />
                            </div>
                            <strong>
                                See who's viewed your profile in the last 90
                                days
                            </strong>
                            <div>
                                <button>Try for free</button>
                            </div>
                        </a>
                    </section>
                    <footer>
                        <ul>
                            <li>About</li>
                            <li>Help Center</li>
                            <li>
                                Privacy & Terms<span
                                    className="fas fa-angle-down"
                                ></span>
                            </li>
                            <li>Advertising</li>
                            <li>
                                Business Services
                                <span className="fas fa-angle-down"></span>
                            </li>
                            <li>Get the LinkedIn app</li>
                            <li>More</li>
                        </ul>
                        <div>
                            <strong>Linked<span>in</span></strong>
                            <span>LinkedIn Corporation © 2019</span>
                        </div>
                    </footer>
                </div>

            </aside>
        </>
    );
}

export default SideBar_2nd;