import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Info extends Component {
    next = e => {
        const { nextStep } = this.props;
        e.preventDefault();
        nextStep();
    };

    render() {
        return (
            <div>
                <p>Info will go here</p>

                <Button onClick={this.next}>Next</Button>
            </div>
        );
    }
}

export default Info;
