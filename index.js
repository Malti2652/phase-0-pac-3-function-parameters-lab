let name1 = Aki;
let name2 = Samip;
let name3 = Gracie;
let language1 = Ember.js;
let language2 = React;




function introduction(name1, name2) {
  return (`Hi, my name is ${name1}.`);
  return (`Hi, my name is ${name2}.`);
}

function introductionWithLanguage(name1, language1) {
  return `Hi, my name is ${name1} and I am learning to program in ${language1}.`
}

function introductionWithLanguageOptional(name3, language3 = "JavaScript") {
  return `Hi, my name is ${name3} and I am learning to program in JavaScript.`
}

function introductionWithLanguageOptional(name3, language4 = "Python") {
  return `Hi, my name is ${name3} and I am learning to program in JavaScript.`
}




