import React from 'react';
import './release.css';

class Release extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    onMouseEnter = () => {
        this.setState({hover: true});
    };

    onMouseLeave = () => {
        this.setState({hover: false});
    };

    render() {
        return (
            <div className="release__container" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <span className="release__name">{this.props.release.name} - </span>
                <span className="release__year"> {this.props.release.year}</span>
                <div className="release__artworkContainer">
                    <img src={this.props.release.artwork} className="release__artwork" alt="Artwork Not Found"/>
                        {this.state.hover && <div className="release__artLinks">
                            <a href="https://open.spotify.com/artist/1EnFvfSbHqACPmunlABTBJ" target="_blank"><i className="fa fa-spotify fa-3x FooterIcons spotify" aria-hidden="true"></i></a>
                            <a href="https://soundcloud.com/the-stetsons-electric" target="_blank"><i className="fa fa-soundcloud fa-3x FooterIcons soundcloud" aria-hidden="true"></i></a>
                            <a href="https://stetsons.bandcamp.com/" target="_blank"><i className="fa fa-bandcamp fa-3x FooterIcons bandcamp" aria-hidden="true"></i></a>
                        </div>}

                </div>
            </div>
        );
    }
}

export default Release;