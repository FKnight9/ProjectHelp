import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class NameDetails extends Component {
    next = e => {
        e.preventDefault();
        const { nextStep } = this.props;
        nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <Form>
                <h1 className="ui centered">Enter Name</h1>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                </Form.Field>
                <Button onClick={this.next}>Next</Button>
            </Form>
        );
    }
}

export default NameDetails;
