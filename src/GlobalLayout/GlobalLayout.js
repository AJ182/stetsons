import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './GlobalLayout.css';

class GlobalLayout extends React.Component {

    render () {

        return (
          <div>

              <NavBar page={this.props.page}/>
              <div className="app__tagline">
                  The Stetsons - Three Rockin' Men Since God Knows When
              </div>
              {/*<div className="title">*/}
                  {/*<div className="titleLogo">*/}
                    {/*<img src="https://photos-1.dropbox.com/t/2/AACr6A5En-Nci_DnrF_4RW6FK9hEf6NuDr-FtNshhEICCQ/12/48453941/png/32x32/1/_/1/2/Stetsons%20Logo%20cropped.png/EObilyUYSyAHKAc/APSMGo0hoJszEL0W8v8Lmxv0cAMMoHWXt8d0PT7GYuQ?size=2048x1536&size_mode=3" width="100%"/>*/}
                  {/*</div>*/}
                  {/*<div className="followButtons">*/}
                      {/*<div className="fb-like" data-href="https://www.facebook.com/thestetsonswigan" data-width="150" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>*/}
                      {/*<div className="spotifyFollow">*/}
                          {/*<iframe src="https://embed.spotify.com/follow/1/?uri=spotify:artist:1EnFvfSbHqACPmunlABTBJ&size=detail&theme=light" width="225" height="56" scrolling="no" frameBorder="0" style={{border: 'none', overflow: 'hidden'}} allowTransparency="true"></iframe>*/}
                      {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}
              <div className="globalChildren">
                {this.props.children}
              </div>
              <div className="footerSpace"/>
              <Footer />
          </div>
        );
    }
}

export default GlobalLayout;