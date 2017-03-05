import React from 'react';
import GlobalLayout from '../GlobalLayout/GlobalLayout';
import './contact.css';
import Map from './components/Map';

class Contact extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         message: ''
    //     }
    // }
    //
    // onSubmit = () => {
    //
    // };
    //
    // onChangeName = (event) => {
    //     this.setState({name: event.currentTarget.value});
    // };
    //
    // onChangeEmail = (event) => {
    //     this.setState({email: event.currentTarget.value});
    // };
    //
    // onChangeMessage = (event) => {
    //     this.setState({message: event.currentTarget.value});
    // };

    render() {
        return(
            <div>
                <GlobalLayout page="Contact">
                    <div className="contact__outer">
                        <div className="titles">
                            Contact Us
                        </div>
                        <div className=" contact__message pageItem">
                            Whether you want to book us for your event or just find out more about us, you can use the information here to get in touch!
                        </div>

                        <div className="contact__detailsFormOuter pageItem">
                            <div className="contact__detailsFormOuter--textLine"><span className="contact__detailsFormOuter--type">email: </span>TheStetsonsElectric@hotmail.com</div>
                            <div className="contact__detailsFormOuter--textLine"><span className="contact__detailsFormOuter--type">twitter: </span>@the_stetsons</div>
                            <div className="contact__detailsFormOuter--textLine"><span className="contact__detailsFormOuter--type">facebook: </span>The Stetsons Electric</div>
                        </div>

                        <div className="contact__detailsFormOuter pageItem">
                            <div className="contact__detailsFormOuter--textLine">We're from:<br/> Standish, Wigan, United Kingdom</div>
                            <div className="contact__mapContainer">
                                <Map address="standish, wigan, uk"/>
                            </div>
                        </div>

                        {/* <div>
                            <form onSubmit={this.onSubmit}>
                                <div className="contact__formInputContainer">
                                    <div className="contact__labelContainer">
                                        <label className="contact__label">Name</label>
                                    </div>
                                    <input type="text" className="contact__formInput" value={this.state.name} onChange={this.onChangeName}/>
                                </div>
                                <div className="contact__formInputContainer">
                                    <div className="contact__labelContainer">
                                        <label className="contact__label">Email</label>
                                    </div>
                                    <input type="text" className="contact__formInput" value={this.state.email} onChange={this.onChangeEmail}/>
                                </div>
                                <div className="contact__formInputContainer">
                                    <div className="contact__labelContainer">
                                        <label className="contact__label">Message</label>
                                    </div>
                                    <textarea type="text" className="contact__formInputLarge" value={this.state.message} onChange={this.onChangeMessage}/>
                                </div>
                                <div className="contact__submitButtonContainer">
                                    <button className="button titles" type="submit">Submit</button>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </GlobalLayout>
            </div>
        );
    }
}

export default Contact;