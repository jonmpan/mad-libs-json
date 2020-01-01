const madLibs = require("./madLibs.json").madLibs;
const words = require("./words.json");
words.celebrity = words.celebrityF.concat(words.celebrityM);
words.name = words.nameF.concat(words.nameM);

console.log(words.celebrity);
const shuffle = a => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

const createMadLib = (text, inputs) => {
  inputs.forEach(o => {
    let re = new RegExp("{" + o.id + "}", "g");
    text = text.replace(re, o.value);
  });
  return text;
};

const getRecommendations = (madLibs, words) => {
  return madLibs.map(n => {
    console.log(n);
    n.inputs = n.inputs.map(o => {
      var type = o.id.replace(/[0-9]/g, "");
      o.recommendations = shuffle(words[type]).slice(0, 4);
      return o;
    });
    return n;
  });
};

var madLibsNew = getRecommendations(madLibs, words);

madLibsNew.forEach(o => {
  o.inputs.forEach(p => {
    console.log(p);
  });
});

var inputs = [
  { id: "noun1", value: "cat" },
  { id: "name1", value: "Boris" },
  { id: "verb1", value: "punch" },
  { id: "adj1", value: "lazy" },
  { id: "noun2", value: "dog" },
  { id: "verb2", value: "fart" },
  { id: "adj2", value: "skinny" },
  { id: "noun3", value: "litter box" }
];

var sanitize = madLibs => {
  return madLibs.map(o => {
    o.text = o.text.replace(/<br>/g, "\n");
    return o;
  });
};

console.log(sanitize(madLibs));

var poop = {
  madLibs: [
    {
      name: "Becoming a Pokemon Master",
      description: "Your journey to becoming a Pokemon Master",
      tags: ["Becoming a Pokemon Master", "Pokemon", "Pokemon Master"],
      image:
        "https://raw.githubusercontent.com/jonmpan/mad-libs-json/master/images/dat-ash.png",
      text:
        "Welcome {name1}, to the world of Pokemon. You are {number1} years old and you are starting your Pokemon journey with your {adj1} {pokemon1}, nicknamed {name2}. You train intensely and beat up {number2} Rattatas. Now you're finally ready to {verb1} Brock's level 12 Onix. After defeating Brock, you catch a {pokemon2} with your one and only Masterball. With your {adj1} {pokemon1}, {name2}, and your {pokemon2}, you continue your journey to eventually challenge the {adj2} 4!",
      inputs: [
        { id: "name1", question: "What is your name?" },
        { id: "number1", question: "Please provide a small whole number." },
        { id: "adj1", question: "Please provide a riveting adjective." },
        { id: "pokemon1", question: "Now, give me a Pokemon." },
        { id: "name2", question: "What is your favorite name?" },
        { id: "number2", question: "Please provide a large whole number." },
        { id: "verb1", question: "Please provide a verb." },
        { id: "pokemon2", question: "How about another Pokemon?" },
        { id: "adj2", question: "Last one! I need another adjective." }
      ]
    },
    {
      name: "Bucketlist",
      description: "A bucket list full of poop. Made by Mackenzie.",
      tags: ["Bucketlist", "bucket", "list"],
      image:
        "https://raw.githubusercontent.com/jonmpan/mad-libs-json/master/images/bucket.jpg",
      text:
        "My Bucketlist: <br>1. {verb1} to {place1}<br>2. Go {gerund1} at {place2}<br>3. Get {celebrityM1}'s autograph <br>4. {verb2} in a {noun1}",
      inputs: [
        { id: "verb1", question: "Please provide a movement verb." },
        { id: "place1", question: "Provide a place." },
        { id: "gerund1", question: "Please provide a verb ending in ing." },
        {
          id: "verb2",
          question: "Now for a verb that is doing something in something."
        },
        { id: "place2", question: "Please provide a place." },
        { id: "celebrityM1", question: "Please provide a celebrity." },
        {
          id: "noun1",
          question: "Please provide a object that can hold something."
        }
      ]
    },
    {
      name: "Dream Man",
      description: "Your dream man.",
      tags: ["Dream Man", "Dream", "Man", "Prince"],
      image:
        "https://raw.githubusercontent.com/jonmpan/mad-libs-json/master/images/dream-man-2.jpg",
      text:
        "My dream man should be {adj1} and {adj2}. I want his {bodyPart1} to be like {celebrity1} and his {bodyPart2} to be like {name1}'s.<br>His intelligence should be that of a {animal1} and he should always wash my {bodyPart3}. I hope he takes me to {place1}, where he should whisper {adj3} into my {bodyPart4}. Such a perfect man is hard to find, but I think I've found him in {name2}.",
      inputs: [
        { id: "adj1", question: "Please provide an adjective." },
        { id: "adj2", question: "Please provide another adjective." },
        { id: "adj3", question: "Please provide a third adjective." },
        { id: "place1", question: "Please provide a place." },
        { id: "bodyPart1", question: "What is the cutest body part?" },
        { id: "bodyPart2", question: "How about the uglist body part?" },
        { id: "bodyPart3", question: "What is your favorite body part?" },
        { id: "bodyPart4", question: "Now fo the last body part!" },
        { id: "animal1", question: "Now, give me an animal." },
        { id: "celebrity1", question: "Please provide a celebrity." },
        { id: "name1", question: "Give me the name of a person you know." },
        { id: "name2", question: "Now, the name of another person you know." }
      ]
    },
    {
      name: "Old MacDonald",
      description: "Old MacDonald had a what?!?",
      tags: ["Old MacDonald", "McDonald's", "Old MacDonald had a farm", "farm"],
      image:
        "https://raw.githubusercontent.com/jonmpan/mad-libs-json/master/images/farmer.jpg",
      text:
        "{adj1} Macdonald had a {noun1}<br>E-I-E-I-O<br>And on that {noun1} he had a {animal1}<br>E-I-E-I-O<br>With a {ono1} {ono1} here<br>And a {ono1} {ono1} there<br>Here a {ono1}, there a {ono1}<br>Everywhere a {ono1} {ono1}<br>{adj1} Macdonald had a {noun1}<br>E-I-E-I-O.",
      inputs: [
        { id: "adj1", question: "Give me an adjective." },
        { id: "noun1", question: "How about a noun?" },
        { id: "animal1", question: "I need an animal to continue." },
        { id: "ono1", question: "Provide an onomatopoeia." }
      ]
    },
    {
      name: "Why did the chicken cross the road?",
      description: "Based on the classic chicken and road joke.",
      tags: [
        "Why did the chicken cross the road",
        "Why did the chicken cross the road",
        "Chicken",
        "road",
        "cross the road"
      ],
      image:
        "https://raw.githubusercontent.com/jonmpan/mad-libs-json/master/images/chicken-1.jpg",
      text:
        "Why did the {noun1} named {name1} {verb1} the {adj1} {noun2}? To {verb2} to the other {adj2} {noun3}!",
      inputs: [
        { id: "noun1", question: "Please provide a noun." },
        { id: "name1", question: "Please provide a name." },
        { id: "verb1", question: "Please provide a verb." },
        { id: "adj1", question: "Please provide an adjective." },
        { id: "noun2", question: "Please provide another noun." },
        { id: "verb2", question: "Please provide another verb." },
        { id: "adj2", question: "Please provide another adjective." },
        { id: "noun3", question: "Please provide another noun." }
      ]
    },
    {
      name: "Test",
      description: "One of each type of word",
      tags: ["Test"],
      image:
        "https://raw.githubusercontent.com/jonmpan/mad-libs-json/master/images/chicken-2.jpg",
      text:
        "{adj1} {noun1} {animal1} {ono1} {adv1} {gerund1} {bodyPart1} {animal1} {nounPlural1} {celebrity1} {celebrityF1} {celebrityM1} {name1} {nameF1} {nameM1} {pokemon1} {number1} {place1}",
      inputs: [
        { id: "adj1", question: "Please provide an adjective." },
        { id: "noun1", question: "Please provide a noun." },
        { id: "animal1", question: "Please provide an animal." },
        { id: "ono1", question: "Please provide an onomatopoeia." },
        { id: "adv1", question: "Please provide an adverb." },
        { id: "gerund1", question: "Please provide a gerund." },
        { id: "bodyPart1", question: "Please provide a body part." },
        { id: "animal1", question: "Please provide an animal." },
        { id: "nounPlural1", question: "Please provide a plural noun." },
        { id: "celebrity1", question: "Please provide a celebrity." },
        { id: "celebrityF1", question: "Please provide a female celebrity." },
        { id: "celebrityM1", question: "Please provide a male celebrity." },
        { id: "name1", question: "Please provide a name." },
        { id: "nameF1", question: "Please provide a female name." },
        { id: "nameM1", question: "Please provide a male name." },
        { id: "pokemon1", question: "Please provide a Pokemon." },
        { id: "number1", question: "Please provide a number." },
        { id: "place1", question: "Please provide a place." }
      ]
    },
    {
      name: "Walmart Shopping",
      tags: ["Walmart Shopping", "Walmart", "Shopping"],
      description: "Shopping at Walmart!",
      image:
        "https://raw.githubusercontent.com/jonmpan/mad-libs-json/master/images/walmart.jpg",
      text:
        "Come {verb1} at WALMART, where you`ll receive {adj1} discounts on all of your favorite brand name {nounPlural1}. Our {adj2} and {gerund1} associates are there to {verb2} you {number1} hours a day. Here you will find {adj3} prices on the {nounPlural2} you need. {nounPlural3} for the moms, {nounPlural4} for the kids and all the latest electronics for the {relative1}. So come on down to your {adj4} {adj5} WALMART where the {nounPlural5} come first.",
      inputs: [
        { id: "verb1", question: "Please provide a verb." },
        { id: "adj1", question: "Now give me an adjective!" },
        { id: "nounPlural1", question: "Next, I need a plural noun." },
        { id: "adj2", question: "Give me another adjective." },
        { id: "gerund1", question: "Please provide a verb ending in ing." },
        { id: "verb2", question: "I need another verb." },
        { id: "number1", question: "Please provide a number." },
        { id: "adj3", question: "I need another adjective." },
        { id: "nounPlural2", question: "Give me a plural noun." },
        { id: "nounPlural3", question: "Give me another plural noun." },
        { id: "nounPlural4", question: "I need ANOTHER plural noun." },
        { id: "relative1", question: "Please provide a type of relative." },
        { id: "adj4", question: "I need an adjective." },
        { id: "adj5", question: "One more adjective." },
        { id: "nounPlural5", question: "Last one! Plural noun." }
      ]
    }
  ]
};
// console.log(inputs);
// console.log(createMadLib(madLibs.madLibs[0].text, inputs));
