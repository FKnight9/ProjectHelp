import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component {
    next = e => {
        const { saveToDB } = this.props;
        e.preventDefault();
        saveToDB();
    };

    back = e => {
        const { prevStep } = this.props;
        e.preventDefault();
        prevStep();
    };

    render() {
        const {
            values: { firstName, lastName, email, phone, location }
        } = this.props;

        return (
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name="users" />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="users" />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="mail" />
                        <List.Content>
                            <a href="mailto:jack@semantic-ui.com">{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="phone" />
                        <List.Content>{phone}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="marker" />
                        <List.Content>{location}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.next}>Confirm</Button>
            </div>
        );
    }
}

export default Confirmation;
