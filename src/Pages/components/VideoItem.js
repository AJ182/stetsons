import React from 'react';
import * as videoData from '../stores/VideoData';

class VideoItem extends React.Component {

    render() {
        let video = videoData.videos[this.props.id];
        return (
            <div className="VideoItemContainer">
                <iframe width="560" height="315" src={video.url} frameBorder="0" allowFullScreen></iframe>
                <div className="videoItem__description">{video.desc}</div>
            </div>
        );
    }
}

export default VideoItem;