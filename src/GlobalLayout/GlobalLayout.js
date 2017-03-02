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

              <div className="globalChildren">
                {this.props.children}
              </div>
              <div className="footerSpace"/>
              <Footer homePage={this.props.page === 'Home'}/>
          </div>
        );
    }
}

export default GlobalLayout;