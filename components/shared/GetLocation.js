import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import Geocode from 'react-geocode';
import { Form } from 'semantic-ui-react';
import { gApiKey, language, region } from '../../config';

class GetLocation extends Component {
    constructor(props) {
        super(props);
        // Setup Geocode settings
        Geocode.setApiKey(gApiKey);
        Geocode.setLanguage(language);
        Geocode.setRegion(region);
        Geocode.enableDebug();
    }

    getAndSetLoc = () => {
        const { coords, handleLocation } = this.props;
        const { latitude, longitude } = coords;
        handleLocation('long')(longitude);
        handleLocation('lat')(latitude);
        Geocode.fromLatLng(latitude, longitude).then(response => {
            const address = response.results[0].formatted_address;
            handleLocation('location')(address);
        });
    };

    render() {
        const { coords, isGeolocationAvailable, isGeolocationEnabled } = this.props;
        if (!isGeolocationAvailable) {
            return <Form.Button>Can&apos;t detect location</Form.Button>;
        }
        if (!isGeolocationEnabled) {
            return <Form.Button>Location not enabled</Form.Button>;
        }
        if (coords) {
            return <Form.Button onClick={this.getAndSetLoc}>Find my location</Form.Button>;
        }
        return <Form.Button>Loading &hellip; </Form.Button>;
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
})(GetLocation);
