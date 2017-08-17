import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './GlobalLayout.css';

class GlobalLayout extends React.Component {

    componentWillMount() {
        this.value = Math.random();
    }

    getRandom = () => {

        if(this.value < 0.34) {
            return '1';
        }
        else if(this.value <= 0.66) {
            return '2';
        }
        else {
            return '3';
        }
    };


    render () {
        return (
          <div>
              <NavBar page={this.props.page}/>
              <div className={`app__fullPage--${this.getRandom()}`}>
                  <div className="app__tagline">
                      The Stetsons Electric - Three Rockin' Men Since God Knows When
                  </div>

                  <div className="globalChildren">
                    {this.props.children}
                  </div>
                  <div className="footerSpace"/>
              </div>
              <Footer homePage={this.props.page === 'Home'}/>
          </div>
        );
    }
}

export default GlobalLayout;