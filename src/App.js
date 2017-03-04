import React, { Component } from 'react';
import GlobalLayout from './GlobalLayout/GlobalLayout';
import './App.css';

class App extends Component {

    componentWillMount() {
        this.value = Math.random();
    }

    getRandom = () => {

        if(this.value < 0.33) {
            return '1';
        }
        else if(this.value < 0.66) {
            return '2';
        }
        else if(this.value <=1) {
            return '3';
        }
        else {
            return '1';
        }
    };


    render() {

        return (
            <div className="App">
                <div className={`app__fullPage--${this.getRandom()}`}>
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
