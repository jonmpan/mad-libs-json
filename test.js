const madLibs = require("./mad-libs.json");

const createMadLib = (text, inputs) => {
  inputs.forEach(o => {
    let re = new RegExp("{" + o.id + "}", "g");
    text = text.replace(re, o.value);
  });
  return text;
};

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

console.log(inputs);

console.log(createMadLib(madLibs.madLibs[0].text, inputs));
