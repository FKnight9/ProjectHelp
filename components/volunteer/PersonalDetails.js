import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class PersonalDetails extends Component {
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
        const { values, handleChange } = this.props;
        return (
            <Form color="blue">
                <h1 className="ui centered">Enter Personal Information</h1>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <input
                        placeholder="Phone Number"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                    />
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.next}>Next</Button>
            </Form>
        );
    }
}

export default PersonalDetails;
