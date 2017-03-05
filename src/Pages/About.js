import React from 'react';
import GlobalLayout from '../GlobalLayout/GlobalLayout';

class About extends React.Component {

    render() {
        return (
          <div>
              <GlobalLayout page="About">
                  <div className="titles videosPageTitle">
                      About
                  </div>
                  <div className="pageItem" style={{ margin: "0 20px" }}>
                      <div className="site__headers">

                          Rock n Roll from the heart of the Wild Northwest.
                          <br/>
                          Tommy Hewitt. Tommy Jones. The Prospector.
                          <br/>
                          "Keeps the Gold Clean and the mind keen"
                      </div>

                      <div className="site__headers">
                          The Stetsons Electric are Revolution Battle of the bands Winners, <br/>and now officially 'The definition of rock and roll' according to <br/>Lancaster's newspaper 'Scan'.
                      </div>
                      <div className="site__headers">
                          From shows across the Northwest, to performing <br/>live on BBC Radio Manchester, The Stetsons Electric <br/>make a lasting impact wherever they go.
                      </div>
                  </div>
              </GlobalLayout>
          </div>

        );
    }
}

export default About;