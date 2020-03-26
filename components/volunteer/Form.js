import React, { Component } from 'react';
import axios from 'axios';
import NameDetails from './NameDetails';
import PersonalDetails from './PersonalDetails';
import LocationDetails from '../shared/LocationDetails';
import Confirm from './Confirm';
import Success from './Success';
import Error from '../shared/Error';

class VolunteerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            location: '',
            long: -1,
            lat: -1,
            result: null
        };
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    };

    handleLocation = input => location => {
        this.setState({ [input]: location });
    };

    saveToDB = () => {
        const { firstName, lastName, email, phone, long, lat } = this.state;
        axios
            .post('/api', {
                firstName,
                lastName,
                email,
                phone,
                long,
                lat
            })
            .then(
                response => {
                    this.state.result = response;
                    this.nextStep();
                },
                error => {
                    console.log(error);
                }
            );
    };

    render() {
        const { step, firstName, lastName, email, phone, location, result } = this.state;
        const values = { firstName, lastName, email, phone, location };
        switch (step) {
            case 1:
                return (
                    <NameDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <LocationDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleLocation={this.handleLocation}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        saveToDB={this.saveToDB}
                        values={values}
                    />
                );
            case 5:
                return <Success result={result} />;
            default:
                return <Error />;
        }
    }
}

export default VolunteerForm;
