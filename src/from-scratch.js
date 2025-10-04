const measureRain = (inches) => {
  if (inches === 0) {
    return "drought"
  }
  else if (inches < 2) {
    return "dry"
  }
  else if (inches < 4) {
    return "average"
  }
  else if (inches < 6) {
    return "rainy"
  }
  else if (inches >= 6) {
    return "flood"
  }
};
console.log(measureRain(0));

const happyBirthdayPet = (breed, age) => {
  if (breed === "snake") {
    return "Hiss hiss!"
  } else if (breed === "cat" && age < 5) {
    return "Mew mew!"
  } else if (breed === "cat" && age >= 5) {
    return "Meow meow!"
  } else if (breed === "dog" && age >= 10) {
    return "Boof!"
  } else if (breed === "dog" && age >= 5) {
    return "Woof woof!"
  } else if (breed === "dog" && age < 5) {
    return "Arf arf!"
  } else {
    return "Happy birthday!"
  };
};
console.log(happyBirthdayPet("cat", 3));


const funTypes = (jsType) => {
  if (typeof jsType === "string") {
    return "That's just some text.";
  } else if (typeof jsType === "number") {
    if (Number.isNaN(jsType)) {
      return "Well, now you're just showing off.";
    }
    return "That's a good number.";
  } else if (typeof jsType === "boolean") {
    return "To bool, or not to bool?"; // That is the question...
  } else if (typeof jsType === "undefined") {
    return "Nothing, but I didn't set that.";
  } else if (jsType === null) {
    return "Nothing, and I did set that.";
  } else if (Array.isArray(jsType)) {
    return "I order you to be indexed.";
  } else if (typeof jsType === "object") {
    return "Anybody got the key?";
  } else {
    return "Unknown type!";
  }
};
console.log(funTypes({}));

const rounder = (float, roundingSetting) => {
  if (roundingSetting === "up") {
    return Math.ceil(float);
  } else if (roundingSetting === "down") {
    return Math.floor(float);
  } else if (roundingSetting === "honest") {
    return Math.round(float);
  }
};
console.log(rounder(3.7, "down"));

const formatName = (first, last) =>
  `${first[0].toUpperCase()}${first.slice(1).toLowerCase()} ${last[0].toUpperCase()}${last.slice(1).toLowerCase()}`;

console.log(formatName("jOhN", "doE"));

const extractDomain = (email) => {
  return email.split("@")[1];
};
console.log(extractDomain('user@example.com'));

const startsWithVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (vowels.includes(str[0])) {
    return true;
  } else {
    return false;
  }
};
console.log(startsWithVowel("apple"));

const rotate = (str, num) => {
  const rotation = num % str.length;
  return str.slice(-rotation) + str.slice(0, -rotation);
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
