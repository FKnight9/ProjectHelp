import React, { Component } from 'react';
import axios from 'axios';
import Info from './Info';
import LocationDetails from '../shared/LocationDetails';
import Confirm from './Confirm';
import DisplayNumber from './DisplayNumber';
import Error from '../shared/Error';

class HelpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            location: '',
            long: -1,
            lat: -1,
            phone: '',
            count: 0,
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

    getClosestPhone = () => {
        const { long, lat } = this.state;
        axios
            .get('/api', {
                params: {
                    long,
                    lat
                }
            })
            .then(
                response => {
                    this.state.result = response;
                    this.traversePhone();
                    this.nextStep();
                },
                error => {
                    console.log(error);
                }
            );
    };

    traversePhone = () => {
        const { count, result } = this.state;
        this.setState({
            phone: result.data[count].phone,
            count: count + 1
        });
    };

    handleLocation = input => location => {
        this.setState({ [input]: location });
    };

    render() {
        const { step, location, result, phone } = this.state;
        const values = { location };
        switch (step) {
            case 1:
                return <Info nextStep={this.nextStep} />;
            case 2:
                return (
                    <LocationDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleLocation={this.handleLocation}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        prevStep={this.prevStep}
                        handleLocation={this.handleLocation}
                        getClosestPhone={this.getClosestPhone}
                        location={location}
                    />
                );
            case 4:
                return (
                    <DisplayNumber
                        phone={phone}
                        result={result}
                        prevStep={this.prevStep}
                        handleLocation={this.handleLocation}
                    />
                );
            default:
                return <Error />;
        }
    }
}

export default HelpForm;
