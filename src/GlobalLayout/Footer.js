import React from 'react';

class Footer extends React.Component {

    render () {
        if(this.props.homePage) {
            return (
                <div className="Footer">
                    <a href="https://open.spotify.com/artist/1EnFvfSbHqACPmunlABTBJ" target="_blank"><i
                        className="fa fa-spotify fa-3x FooterIcons spotify FooterIcons--1" aria-hidden="true"></i></a>
                    <a href="http://www.facebook.com/thestetsonswigan" target="_blank"><i
                        className="fa fa-facebook-square fa-3x FooterIcons facebook FooterIcons--2"
                        aria-hidden="true"></i></a>
                    <a href="https://twitter.com/The_Stetsons" target="_blank"><i
                        className="fa fa-twitter-square fa-3x FooterIcons twitter FooterIcons--3"
                        aria-hidden="true"></i></a>
                    <a href="https://www.youtube.com/channel/UCn301PgyNOQEede0cEoyVaQ" target="_blank"><i
                        className="fa fa-youtube fa-3x FooterIcons youtube FooterIcons--3" aria-hidden="true"></i></a>
                    <a href="https://soundcloud.com/the-stetsons-electric" target="_blank"><i
                        className="fa fa-soundcloud fa-3x FooterIcons soundcloud FooterIcons--2" aria-hidden="true"></i></a>
                    <a href="https://stetsons.bandcamp.com/" target="_blank"><i
                        className="fa fa-bandcamp fa-3x FooterIcons bandcamp FooterIcons--1" aria-hidden="true"></i></a>
                </div>
            );
        } else {
            return (
                <div className="Footer">
                    <a href="https://open.spotify.com/artist/1EnFvfSbHqACPmunlABTBJ" target="_blank"><i
                        className="fa fa-spotify fa-3x FooterIcons spotify" aria-hidden="true"></i></a>
                    <a href="http://www.facebook.com/thestetsonswigan" target="_blank"><i
                        className="fa fa-facebook-square fa-3x FooterIcons facebook"
                        aria-hidden="true"></i></a>
                    <a href="https://twitter.com/The_Stetsons" target="_blank"><i
                        className="fa fa-twitter-square fa-3x FooterIcons twitter"
                        aria-hidden="true"></i></a>
                    <a href="https://www.youtube.com/channel/UCn301PgyNOQEede0cEoyVaQ" target="_blank"><i
                        className="fa fa-youtube fa-3x FooterIcons youtube" aria-hidden="true"></i></a>
                    <a href="https://soundcloud.com/the-stetsons-electric" target="_blank"><i
                        className="fa fa-soundcloud fa-3x FooterIcons soundcloud" aria-hidden="true"></i></a>
                    <a href="https://stetsons.bandcamp.com/" target="_blank"><i
                        className="fa fa-bandcamp fa-3x FooterIcons bandcamp" aria-hidden="true"></i></a>
                </div>
            );
        }
    }
}

export default Footer;