import React, { Component } from 'react';
import GlobalLayout from './GlobalLayout/GlobalLayout';
import './App.css';
import Release from './Pages/components/Release';

class App extends Component {
  render() {
      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
      return (
          <div className="App">
              <div className="app__fullPage">
            <GlobalLayout page="Home">

                <div className="app__headers">
                    New release <a href="https://stetsons.bandcamp.com/track/no-ball-games" className="app__link">'No Ball Games'</a> out now!
                </div>
                <div className="app__mainContent">
                    {/*<Release release={{*/}
                        {/*name: 'No Ball Games',*/}
                        {/*year: 2017,*/}
                        {/*artwork: 'https://scontent.xx.fbcdn.net/v/t31.0-8/p960x960/16804276_1612076175487723_5103928276527384497_o.jpg?oh=2879efac2853af022e55cf561859eaac&oe=59277E71',*/}
                        {/*id: 4*/}
                    {/*}}/>*/}
                </div>

            </GlobalLayout>
              </div>
          </div>
        );
  }
}

export default App;
