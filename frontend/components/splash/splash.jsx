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
                <nav className="splash-nav">
                    <Link to="/" className='affinity-nav-logo'>
                        <img src={window.affinityLogoUrl} alt=""/>
                    </Link>

                    <ul className="splash-nav-right">

                        <a
                            className="splash-nav-link"
                            href="https://www.github.com/SilentNN"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={["fab", "github"]} className="splash-icon" />
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
            </div>
        );
    }
};