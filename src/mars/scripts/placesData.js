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
            jewelColor: 'green'
        },

        {
            id: 3,
            body: 'Mars',
            placeName: "Home of Valentine M. Smith",
            media: 'Stranger in a Strange Land',
            creator: 'Robert A. Heinlein',
            fictionalYear: 'Late 20th Century',
            realYear: 1961,
            description: "Smith's real areographical origin isn't described exactly at any point in the novel, but Elysium Mons seems fitting given Heinlein's vision of an idyllic Martian society. Valentine, a human raised by Martians, is a super-genius with psychic powers. When he returns to Earth, he uses his abilities to found and promote a lifestyle based on peace, free love, and the promotion of vices such as gambling. The Church of All Worlds, a real-life paganistic religion, was later founded on Valentine's principles.",
            region: 'Elysium Mons',
            photoFile: base + '/modal/siasl.png',
            lat: 24.5,
            lon: 122.1, //offset by -25 (investigate !why)
            jewelColor: 'green'

        },

        {
            id: 5,
            body: 'Mars',
            placeName: "Handramit",
            media: 'Out of the Silent Planet',
            creator: 'C.S. Lewis',
            fictionalYear: 'Unknown',
            realYear: 1938,
            description: "Handramit are river valleys surrounded by staggering mountains (handrada) and inhabited by the hrossa, an otter-like, sapient species. C.S. Lewis saw celestial order as an extension of theological natural law. In his Space Trilogy, Mars is known as Malacandra (the Land of Mars), and Earth as Thulcandra (the Silent Planet). Each is guarded by an angel (Oyarsa), though Earth's became bitter and twisted by rebellion.",
            region: 'Valles Marineris',
            photoFile: base + '/modal/ootsp.png',
            lat: -8.75,
            lon: -16.8,
            jewelColor: 'green'

        },

        {
            id: 6,
            body: 'Mars',
            placeName: "Burroughs",
            media: 'The Mars Trilogy',
            creator: 'Kim Stanley Robinson',
            fictionalYear: '~2040',
            realYear: 1992,
            description: "Burroughs was the largest city, political center, and de facto capital of Mars throughout much of Kim Stanley Robinson's Mars Trilogy. In Green Mars, it was flooded by a revolutionary group of radicals known as the kakaze ('fire wind') by demolishing a key dike. By the events of Blue Mars, it had become a popular diving spot.",
            region: 'Isidis Planitia',
            photoFile: base + '/modal/burroughs.png',
            lat: 12.9,
            lon: 190,
            jewelColor: 'green'

        },

        {
            id: 7,
            body: 'Mars',
            placeName: "Sheffield",
            media: 'The Mars Trilogy',
            creator: 'Kim Stanley Robinson',
            fictionalYear: '2047',
            realYear: 1992,
            description: "Sheffield, built into the caldera of Pavonis Mons, was the mooring point for both the first (destroyed) and second space elevators. A boom town throughout the trilogy, waxing and waning with the fate of the elevators, a 'socket' at the center of the city anchors a ~35,000km long cable that descends from a counterweight asteroid known as Clarke.",
            region: 'Pavonis Mons',
            photoFile: base + '/modal/sheffield.png',
            lat: 1.48,
            lon: 23,
            jewelColor: 'green'

        },

        {
            id: 8,
            body: 'Mars',
            placeName: "Senzeni Na (Mohole)",
            media: 'The Mars Trilogy',
            creator: 'Kim Stanley Robinson',
            fictionalYear: '2047',
            realYear: 1992,
            description: "Senzeni Na, meaning 'what have we done' in Zulu, is one of many 'moholes' that terraforming advocates ('Greens') bored deep into the crust of Mars. Their primary opponent was the 'Red' faction, who advocated for a more primordial, untouched, and dead Mars for scientific, aesthetic, and moral reasons. Over time, moholes warmed Mars by pulling respectable amounts of heat energy from deep underground into the atmosphere.",
            region: 'Thaumasia Planum',
            photoFile: base + '/modal/senzenina.png',
            lat: -16,
            lon: -24,
            jewelColor: 'green'

        },

        {
            id: 9,
            body: 'Mars',
            placeName: "Acheron",
            media: 'The Mars Trilogy',
            creator: 'Kim Stanley Robinson',
            fictionalYear: '~2040',
            realYear: 1992,
            description: "In Red Mars, Acheron was where a series of longevity treatments were developed. These could extend the human lifespan by hundreds of years and were a key motivator of political turmoil, war, and civic unrest throughout the Mars Trilogy due to their expense and exclusivity.",
            region: 'Arcadia Planitia',
            photoFile: base + '/modal/acheron.png',
            lat: 40,
            lon: 84,
            jewelColor: 'green'

        },

        {
            id: 10,
            body: 'Mars',
            placeName: "Greater Helium",
            media: 'A Princess of Mars',
            creator: 'Edgar Rice Burroughs',
            fictionalYear: '1865',
            realYear: 1912,
            description: "Burrough's Mars was known as 'Barsoom', a dying world fought over by shifting hegemonic alliances of city-states. The city of Greater Helium (and Lesser Helium, a little sister 75 miles away) became the hero John Carter's home and seat after he married the Princess of Helium.",
            region: 'Hesperia Planium',
            photoFile: base + '/modal/ghelium.png',
            lat: -28,
            lon: 165,
            jewelColor: 'green'

        },

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
            description: "The site where botanist Mark Watney spent most of his 561 sols (1 year, 6 months, 27 days in Earth time). Weir's novel took an optimistic view of near-future human space travel, where NASA had successfully mounted three manned missions to Mars by 2035.",
            region: 'Acidalia Planitia',
            photoFile: base + '/modal/thehab.png',
            lat: 36.12,
            lon: 27.5 - 90, //offset by -90 (investigate !why)
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
            description: "In the Doctor Who episode The Waters of Mars, Bowie Base One is the first human colony on Mars. The colonists encounter an 'intelligent virus' that targeted any organism with water in its body. The Doctor leads a timely intervention.",
            region: 'Gusev Crater',
            photoFile: base + '/modal/bb1.png',
            lat: 5.5,
            lon: 176,
            jewelColor: 'white'

        },

    ],

    reality: [

    ]

}

export default { placeData }