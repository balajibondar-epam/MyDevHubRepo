import { LightningElement } from 'lwc';

export default class CustomGoogleMapComponent extends LightningElement {
    mapMarkers = [
        {
            location: {
                Street: '1000 5th Ave',
                City: 'New York',
                State: 'NY',
            },

            title: 'Metropolitan Museum of Art',
            description:
                'A grand setting for one of the greatest collections of art, from ancient to contemporary.',
        },
        {
            location: {
                Street: '11 W 53rd St',
                City: 'New York',
                State: 'NY',
            },

            title: 'Museum of Modern Art (MoMA)',
            description: 'Thought-provoking modern and contemporary art.',
        },
        {
            location: {
                Street: '1071 5th Ave',
                City: 'New York',
                State: 'NY',
            },

            title: 'Guggenheim Museum',
            description:
                'World-renowned collection of modern and contemporary art.',
        },
    ];

    markersTitle = 'Coordinates for Centering';

    center = {
        location: { Latitude: '40.7831856', Longitude: '-73.9675653' },
    };

}