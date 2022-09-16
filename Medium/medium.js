const sentence = prompt("Insert text here");
const upperSentence = sentence.toUpperCase();
const lowerSentence = sentence.toLowerCase();

if (sentence === upperSentence) {
  console.log("User is Shouting");
} else if (sentence === lowerSentence) {
  console.log("User is whispering");
} else {
  console.log("User is talking normally");
}
