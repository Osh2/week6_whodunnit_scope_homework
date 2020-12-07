// // EPISODE 1 - A TALE OF TREACHERY 
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

// //PREDICTION Miss Scarlett - the murderer key in the scenario object is within the scope of the declareMurderer function so will be able to be called without error

// //EPISODE 2 - SHIPS IN THE NIGHT
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // PREDICTION Error - trying to alter a constant variable (oxymoron)

// //EPISODE 3 - MURDER ON THE EDINBURGH - GLENROTHES EXPRESS

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// //PREDICTION first verdict = Mrs. Peacock | second verdict = Professor Plum - The first verdict will correctly change the let murderer variable to Mrs Peacock. The second verdict will only refer to the original value for the murderer because the scope of the change is only within the function

// EPISODE 4 - HALLOWEEN SPECIAL (guest staring Steven Seagal)
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//PREDICTION - Mrs. Peacock - Even though the function changed the name of suspect 3, the scope of that new variable doesn't extend outside the function and suspects variable, which isnt being called in the console.log