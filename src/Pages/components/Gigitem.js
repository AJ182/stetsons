import React from 'react';
import './gigitem.css';
import Map from './Map';

class Gigitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }



    showMap = () => {
        this.setState({visible: true});
    };

    hideMap = () => {
        this.setState({visible: false});
    };

    render() {
        return (
            <div className="gigItem__outer">
                <span className="gigItem__buttonContainer">
                    {this.state.visible ? (
                        <button className="titles button" onClick={this.hideMap}>Hide Map</button>
                    ) : (
                        <button className="titles button" onClick={this.showMap}>Show Map</button>
                    )}
                </span>

                <strong>{this.props.gig.venue}</strong> - {this.props.gig.date}, {this.props.gig.address}

                {this.state.visible && <div className="mapContainer">
                    <Map address={this.props.gig.address} id={this.props.id}/>
                </div>}
            </div>
        );
    }
}

export default Gigitem;