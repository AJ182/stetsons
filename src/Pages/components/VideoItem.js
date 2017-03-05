import React from 'react';
import * as videoData from '../stores/VideoData';

class VideoItem extends React.Component {

    render() {
        let video = videoData.videos[this.props.id];
        let width = document.documentElement.clientWidth - 30;
        if(width >= 560) {
            width = 560;
        }
        return (
            <div className="VideoItemContainer">
                <div>
                    <iframe width={width} height="315" src={video.url} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="videoItem__description pageItem">{video.desc}</div>
            </div>
        );
    }
}

export default VideoItem;