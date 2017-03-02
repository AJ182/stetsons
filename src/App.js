import React, { Component } from 'react';
import GlobalLayout from './GlobalLayout/GlobalLayout';
import './App.css';

class App extends Component {


    render() {

        return (
            <div className="App">
                <div className="app__fullPage">
                    <GlobalLayout page="Home">

                        <div className="app__headers">
                            <div className="app__content">New release <br/><a href="https://stetsons.bandcamp.com/track/no-ball-games" target="_blank" className="app__link">'No Ball Games'</a> <br/>out now!</div>
                        </div>

                        <div className="app__mainContent">

                        </div>

                    </GlobalLayout>
                </div>
            </div>
        );
    }
}

export default App;
