import React from 'react';
import './gigitem.css';
import Map from './Map';

class Gigitem extends React.Component {

    render() {
        return (
            <div>
                {this.props.gig.venue} - {this.props.gig.date}, {this.props.gig.address}
                <div className="mapContainer">
                    <Map address={this.props.gig.address} id={this.props.id}/>
                </div>
            </div>
        );
    }
}

export default Gigitem;