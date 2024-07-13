//PlacesData.js

const base = '/marsisaplace'

const placeData = {

    literature: [

        {
            id: 2,
            body: 'Mars',
            placeName: 'Underhill',
            media: 'The Mars Trilogy',
            creator: 'Kim Stanley Robinson',
            fictionalYear: 2026,
            realYear: 1992,
            description: "Underhill was the landing site for the first hundred colonists in Kim Stanley Robinson’s Red Mars. Built 10m underground as a shield from the radiation piercing Mars’ sparse magnetosphere, the burrow featured a vaulted brick ceiling, bamboo flooring, and intricate staircases composed of a novel magnesium alloy extracted from the Martian regolith.",
            region: 'Xanthe',
            photoFile: base + '/modal/placeholder.png',
            lat: 8.05,
            lon: -43.9,
            jewelColor: 'red'
        },

        {
            id: 3,
            body: 'Mars',
            placeName: "Home of Valentine M. Smith",
            media: 'Stranger in a Strange Land',
            creator: 'Robert A. Heinlein',
            fictionalYear: 'Late 20th Century',
            realYear: 1961,
            description: "Smith's real areographical origin isn't described exactly at any point in the novel, but Elysium Mons seems fitting given Heinlein's vision of an idyllic Martian society.",
            region: 'Elysium Mons',
            photoFile: base + '/modal/placeholder.png',
            lat: 24.5,
            lon: 122.1, //offset by -25 (investigate !why)
            jewelColor: 'blue'

        },

        {
            id: 5,
            body: 'Mars',
            placeName: "Handramit",
            media: 'Out of the Silent Planet',
            creator: 'C.S. Lewis',
            fictionalYear: 'Unknown',
            realYear: 1938,
            description: "",
            region: 'Valles Marineris',
            photoFile: base + '/modal/placeholder.png',
            lat: -8.75,
            lon: -16.8,
            jewelColor: 'pink'

        },

        {
            id: 6,
            body: 'Mars',
            placeName: "TESTING",
            media: 'TESTING',
            creator: 'TESTING',
            fictionalYear: 'TESTING',
            realYear: 2000,
            description: "TESTING",
            region: 'TESTING',
            photoFile: base + '/modal/placeholder.png',
            lat: 0,
            lon: 0,
            jewelColor: 'pink'

        }

    ],

    filmAndTV: [

        {   
            id: 1,
            body: 'Mars',
            placeName: 'The Hab',
            media: 'The Martian',
            creator: 'Andy Weir',
            fictionalYear: 2035,
            realYear: 2011,
            description: 'A muscular botanist and ex-MIT mathematics prodigy loses religion in the dusty wastes of the red planet.',
            region: 'Acidalia Planitia',
            photoFile: base + '/modal/placeholder.png',
            lat: 31.12,
            lon: 28.5 - 90, //offset by -90 (investigate !why)
            jewelColor: 'white'
            //lat: 0,
            //lon: -90,
        },
        
        {
            id: 4,
            body: 'Mars',
            placeName: "Bowie Base One",
            media: 'Doctor Who',
            creator: 'Russell T. Davies & Phil Ford',
            fictionalYear: '2059',
            realYear: 2009,
            description: "",
            region: 'Gusev Crater',
            photoFile: base + '/modal/placeholder.png',
            lat: 5.5,
            lon: 176,
            jewelColor: 'black'

        },

    ],

    reality: [

    ]

}

export default { placeData }