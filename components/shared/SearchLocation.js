import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class SearchLocation extends Component {
    handleSelect = address => {
        const { handleLocation } = this.props;
        handleLocation('location')(address);
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                handleLocation('long')(latLng.lng);
                handleLocation('lat')(latLng.lat);
            })
            .catch(error => console.error('Error', error));
    };

    onError = (status, clearSuggestions) => {
        console.log('Google Maps API returned error with status: ', status);
        clearSuggestions();
    };

    render() {
        const { values, handleLocation } = this.props;
        return (
            <PlacesAutocomplete
                value={values.location}
                onChange={handleLocation('location')}
                onSelect={this.handleSelect}
                onError={this.onError}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input'
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default SearchLocation;
