// Valentine's Treasure Hunt — Rob & Lara
// Set to true to bypass location checks (every check returns correct)
export const testMode = true;

const stops = [
  {
    order: 1,
    riddle: "A tower tall on rocky shore,\nwhere Atlantic winds forever roar.\nThe tallest iron light you'll find,\nleaves the Cape's wild west behind.",
    lat: -34.1548,
    lng: 18.3225,
    radiusMeters: 100,
    hint: "Slangkop — the tallest cast-iron lighthouse in South Africa, in Kommetjie.",
    emoji: "🗼",
    locationName: "Slangkop Lighthouse",
    image: "/images/lara_4.jpeg",
  },
  {
    order: 2,
    riddle: "Where tuxedos waddle on the sand,\nand boulders guard a sheltered strand,\nthe smallest locals steal the show —\nfind their home, that's where you go.",
    lat: -34.1970,
    lng: 18.4510,
    radiusMeters: 100,
    hint: "Think black and white... and very cute.",
    emoji: "🐧",
    locationName: "Boulders Beach",
    image: "/images/lara_2.jpeg",
  },
  {
    order: 3,
    riddle: "After penguin greetings, time to eat!\nA French word for wine, a cosy seat,\non the bay where trains once passed —\nbrunch awaits, so don't be last.",
    lat: -34.1305,
    lng: 18.4530,
    radiusMeters: 80,
    hint: "A deli in Kalk Bay... named after a grape variety perhaps? Near Dalebrook.",
    emoji: "🥐",
    locationName: "Kalk Bay Brunch",
    image: "/images/lara_3.jpeg",
  },
  {
    order: 4,
    riddle: "A scoop of something cold and sweet,\nthen walk to where the fishers meet.\nA whiskered friend might steal the show —\nsnap a photo before you go!",
    lat: -34.1280,
    lng: 18.4500,
    radiusMeters: 120,
    hint: "Kalk Bay Harbour — look for the lazy locals on the slipway.",
    emoji: "🦭",
    locationName: "Kalk Bay Harbour",
    image: "/images/lara_8.jpeg",
  },
  {
    order: 5,
    riddle: "Now head toward where you lay your head,\nbut stop where roots and blooms are spread.\nA garden named for gabled style,\non the main road — worth the mile.",
    lat: -34.1085,
    lng: 18.3870,
    radiusMeters: 100,
    hint: "Noordhoek Main Rd, Crofters Valley — a nursery with a Dutch name.",
    emoji: "🌿",
    locationName: "Noordhoek Nursery",
    image: "/images/lara_7.jpeg",
  },
  {
    order: 6,
    riddle: "Pick something beautiful to grow,\nthen head to where you both call home.\nDig in the earth, plant side by side —\nthe treasure was the love inside.",
    lat: -34.1200,
    lng: 18.3772,
    radiusMeters: 200,
    hint: "Home sweet home — Lake Michelle.",
    emoji: "🏡",
    locationName: "Home",
    image: "/images/lara_1.jpeg",
  },
];

export default stops;
