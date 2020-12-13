import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {loggedIn} = this.props;

        return (
            <div className='splash-container'>
                <div className='hero-background'>
                    <nav className="splash-nav">
                        <Link to="/" className='splash-nav-logo'>
                            <img src={window.affinityLogoUrl} alt=""/>
                        </Link>
    
                        <ul className="splash-nav-buttons">
    
                            <a
                                className="splash-nav-link"
                                href="https://www.github.com/SilentNN"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={["fab", "github"]} className="splash-faIcon fa-lg"/>
                            </a>
    
                            <Link
                                to={loggedIn ? "/channels/@me" : "/login"}
                                className="splash-nav-link login"
                            >
                                <button type="button" className="splash-nav-btn">
                                    {loggedIn ? "Open Discord" : "Login"}
                                </button>
                            </Link>
    
                        </ul>
                    </nav>

                    <div className='hero-container'>
                        <div className='hero-body'>
                            <div className='hero-text'>
                                <h1>
                                    A Discord Clone
                                </h1>
                                <div className='hero-description'>
                                    Affinity is a discord clone using React/Redux with a Rails backend. Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Affinity makes it easy to talk every day and hang out more often.
                                </div>
                            </div>
    
                            <div className='hero-buttons'>
                                <button>Demo</button>
                                <button className='button-dark'>Open Affinity in your browser</button>
                            </div>
                        </div>
                    </div>

                    <div className='hero-image-container' aria-hidden='true'>
                        <div className='background-images stripe1' />
                        <div className='background-images stripe2' />
                        <div className='background-images stripe3' />
                        <div className='background-images stripeCute' />
                        <div className='background-images island2' />
                        <div className='background-images island1' />
                        <div className='background-images cloud4' />
                        <div className='background-images cloud5' />
                        <div className='background-images cloud2Second' />
                        <div className='background-images cloud1' />
                        <div className='background-images cloud2' />
                        <div className='background-images cloud3' />
                        <div className='background-images cloud6' />
                        <div className='background-images cloud7' />
                        <div className='background-images cloud9' />
                        <div className='background-images diamond' />
                        <div className='background-images ship' />
                        <div className='background-images cloudCute' />
                        <div className='background-images cloud8' />
                        <div className='background-images cloud10' />
                        <div className='backgroundBuildings' />
                        <div className='foregroundLeft' />
                        <div className='foregroundRight' />
                    </div>
                </div>

                {/* <div className="footer">
                    <div className="splash-nav-logo">
                        
                    </div>

                    <Link
                        to={loggedIn ? "/channels/@me" : "/register"}
                        className="splash-footer-link"
                    >
                        <button type="button" className="splash-footer-btn">
                            {loggedIn ? "Open Discord" : "Sign Up"}
                        </button>
                    </Link>
                </div> */}
            </div>
        );
    }
};