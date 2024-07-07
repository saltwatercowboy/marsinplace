//PlacesData.js

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
            description: "Underhill was the landing site for the first wave of colonists from Earth in Kim Stanley Robinson’s Red Mars. Dug 10m deep, Underhill was built entirely underground to shield it from the radiation piercing Mars’ sparse magnetosphere. The burrow featured a vaulted ceiling made from homebrew Martian bricks, bamboo for interstitial flooring, and structural elements cast in magnesium alloy extracted from the regolith of the surrounding landscape.",
            region: 'Xanthe',
            photoFile: '/src/World/assets/modal_images/underhill.png',
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
            photoFile: '/src/World/assets/modal_images/underhill.png',
            lat: 24.5,
            lon: 122.1, //offset by -25 (investigate !why)
            jewelColor: 'blue'

        },

        {
            id: 5,
            body: 'Mars',
            placeName: "Hamdramit",
            media: 'Out of the Silent Planet',
            creator: 'C.S. Lewis',
            fictionalYear: 'Unknown',
            realYear: 1938,
            description: "",
            region: 'Valles Marineris',
            photoFile: '/src/World/assets/modal_images/underhill.png',
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
            photoFile: '/src/World/assets/modal_images/underhill.png',
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
            description: 'A temporarily muscular botanist and ex-MIT mathematics prodigy loses religion in the dusty wastes of the red planet. Somehow not the worst thing that Andy Weir has written.',
            region: 'Acidalia Planitia',
            photoFile: '/src/World/assets/modal_images/underhill.png',
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
            photoFile: '/src/World/assets/modal_images/underhill.png',
            lat: 5.5,
            lon: 176,
            jewelColor: 'black'

        },

    ],

    reality: [

    ]

}

export default { placeData }