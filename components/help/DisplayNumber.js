import React, { Component } from 'react';
import Link from 'next/link';
import { Button, List, Form } from 'semantic-ui-react';

class Confirm extends Component {
    back = e => {
        const { prevStep } = this.props;
        e.preventDefault();
        prevStep();
    };

    render() {
        const { phone } = this.props;

        return (
            <div>
                <h1 className="ui centered">Call this number</h1>
                <List>
                    <List.Item>
                        <List.Icon name="phone" />
                        <List.Content>{phone}</List.Content>
                    </List.Item>
                </List>
                <Form>
                    <Form.Button>Call</Form.Button>
                    <Form.Button>Next Number</Form.Button>
                    <Button onClick={this.back}>Back</Button>
                    <Link href="/">
                        <Button>
                            <a>Home</a>
                        </Button>
                    </Link>
                </Form>
            </div>
        );
    }
}

export default Confirm;
