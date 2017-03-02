import React from 'react';
import GlobalLayout from '../GlobalLayout/GlobalLayout';
import * as gigs from './stores/GigData';
import Gigitem from './components/Gigitem';


class Gigs extends React.Component {


    render() {

        return (
            <div>
                <GlobalLayout page="Live Shows">
                    <div className="titles">Live Shows</div>
                    <div>
                        {gigs.gigs.map((g, k) => (
                            <Gigitem
                                gig={g}
                                id={k}
                                key={k}
                            />
                        ))}
                    </div>
                </GlobalLayout>
            </div>
        );
    }
}

export default Gigs;