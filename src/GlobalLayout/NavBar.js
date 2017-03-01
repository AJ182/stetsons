import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <ul className="navBar">
                    <li><Link to="/" className={this.props.page.toLowerCase() === "home" ? 'navItem--active' : 'navItem--inactive'}>Home</Link></li>
                    <li><Link to="/about" className={this.props.page.toLowerCase() === "about" ? 'navItem--active' : 'navItem--inactive'}>About</Link></li>
                    <li><Link to="/music" className={this.props.page.toLowerCase() === "music" ? 'navItem--active' : 'navItem--inactive'}>Music</Link></li>
                    <li><Link to="/live-shows" className={this.props.page.toLowerCase() === "live shows" ? 'navItem--active' : 'navItem--inactive'}>LiveShows</Link></li>
                    <li><Link to="/videos" className={this.props.page.toLowerCase() === "videos" ? 'navItem--active' : 'navItem--inactive'}>Videos</Link></li>
                    <li><Link to="/contact" className={this.props.page.toLowerCase() === "contact" ? 'navItem--active' : 'navItem--inactive'}>Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;