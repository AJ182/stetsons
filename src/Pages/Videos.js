import React from 'react';
import GlobalLayout from '../GlobalLayout/GlobalLayout';
import './Videos.css';
import VideoItem from './components/VideoItem';
import * as VideoData from './stores/VideoData';

class Videos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currVideo: 0,
            last: false,
            first: true
        }
    }

    nextVideo = () => {
        let nextVideo = this.state.currVideo + 1;
        if(nextVideo + 1 === VideoData.videos.length) {
            this.setState({currVideo: nextVideo, last: true, first: false})
        }
        else {
            this.setState({currVideo: nextVideo, first: false})
        }
    };

    previousVideo = () => {
        let nextVideo = this.state.currVideo - 1;
        if(nextVideo === 0) {
            this.setState({currVideo: nextVideo, last: false, first: true})
        }
        else {
            this.setState({currVideo: nextVideo, last: false})
        }
    };

    render()  {
        console.log(VideoData.videos.length);
        return (
            <div>
                <GlobalLayout page="Videos">
                    <div className="videosPageContainer">
                        <div className="titles videosPageTitle">
                            Videos!
                        </div>
                        <div className="videos__buttonsContainer">
                            <button className={this.state.first ? "titles button buttonDisabled" : "titles button"} onClick={this.previousVideo} disabled={this.state.first}>Previous</button>
                            <button className={this.state.last ? "titles button buttonDisabled" : "titles button"} onClick={this.nextVideo} disabled={this.state.last}>Next</button>
                        </div>
                        <VideoItem id={this.state.currVideo}/>
                    </div>
                </GlobalLayout>
            </div>
        );
    }
}

export default Videos;


