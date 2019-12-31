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

// console.log(inputs);
// console.log(createMadLib(madLibs.madLibs[0].text, inputs));
