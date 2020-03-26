import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirm extends Component {
    next = e => {
        const { getClosestPhone } = this.props;
        e.preventDefault();
        getClosestPhone();
    };

    back = e => {
        const { prevStep } = this.props;
        e.preventDefault();
        prevStep();
    };

    render() {
        const { location } = this.props;

        return (
            <div>
                <h1 className="ui centered">Confirm your location</h1>
                <List>
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

export default Confirm;
