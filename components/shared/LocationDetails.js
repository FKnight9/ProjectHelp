import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import SearchLocation from './SearchLocation';
import GetLocation from './GetLocation';

class LocationDetails extends Component {
    next = e => {
        const { nextStep } = this.props;
        e.preventDefault();
        nextStep();
    };

    back = e => {
        const { prevStep } = this.props;
        e.preventDefault();
        prevStep();
    };

    render() {
        const { values, handleLocation } = this.props;
        return (
            <Form color="blue">
                <h1 className="ui centered">Enter Location</h1>
                <Form.Field>
                    <label>Location</label>
                    <SearchLocation handleLocation={handleLocation} values={values} />
                </Form.Field>
                <GetLocation handleLocation={handleLocation} />
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.next}>Next</Button>
            </Form>
        );
    }
}

export default LocationDetails;
