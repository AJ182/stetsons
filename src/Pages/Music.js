import React from 'react';
import GlobalLayout from '../GlobalLayout/GlobalLayout';
import * as releases from './stores/ReleaseData';
import Release from './components/Release';

class Music extends React.Component {

    render() {
        return (
            <div>
                <GlobalLayout page="Music">
                    <div className="music__discography">
                        <div className="music__discography--title titles">Discography</div>
                        {releases.releases.map((release, k) => (
                            <Release
                                release={release}
                                key={k}
                            />
                        ))}
                    </div>

                    <div className="musicPlayers__container">
                        <div className="titles">Music Players</div>
                        <div className="musicPlayers">
                            <iframe src="https://embed.spotify.com/?uri=spotify%3Aartist%3A1EnFvfSbHqACPmunlABTBJ"
                                    width="400" height="402">
                            </iframe>
                            <iframe width="400" height="405" scrolling="no"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/252842093&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                        </div>
                        <div className="musicPlayersMobile">
                            <iframe src="https://embed.spotify.com/?uri=spotify%3Aartist%3A1EnFvfSbHqACPmunlABTBJ"
                                    width="300" height="402">
                            </iframe>
                            <iframe width="300" height="405" scrolling="no"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/252842093&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                        </div>
                    </div>

                </GlobalLayout>

            </div>

        );
    }
}

export default Music;