import React from 'react';
import GlobalLayout from '../GlobalLayout/GlobalLayout';

class About extends React.Component {

    render() {
        return (
          <div>
              <GlobalLayout page="About">
                  <div className="site__headers">
                      Rock n Roll from the heart of the Wild Northwest.
                      <br/>
                      Tommy Hewitt. Tommy Jones. The Prospector.
                      <br/>
                      "Keeps the Gold Clean and the mind keen"
                  </div>
              </GlobalLayout>
          </div>

        );
    }
}

export default About;