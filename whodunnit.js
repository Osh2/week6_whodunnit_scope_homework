// EPISODE 1 - A TALE OF TREACHERY 
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

//PREDICTION Miss Scarlett - the murderer key in the scenario object is within the scope of the declareMurderer function so will be able to be called without error



//EPISODE 2 - SHIPS IN THE NIGHT
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// PREDICTION Error - trying to alter a constant variable (oxymoron)



//EPISODE 3 - MURDER ON THE EDINBURGH - GLENROTHES EXPRESS

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//PREDICTION first verdict = Mrs. Peacock | second verdict = Professor Plum - The first verdict will correctly change the let murderer variable to Mrs Peacock. The second verdict will only refer to the original value for the murderer because the scope of the change is only within the function



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



//EPISODE 5 - THE ONE WITH THE BIG KNIFE
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

//PREDICTION - Revolver - The 2 functions written will successfully change the value under the weapon key and call the new value



//EPISODE 6 - THE RETURN OF KUNG-FOO DEREK (guest staring Steven Seagal)
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//PREDICTION - Colonel Mustard - the changeMurderer and plotTwist functions do not have scope to cover the const variable verdict XX WRONGO - Should be Mrs White because the let variable is correctly modified in the function and has global scope



//EPISODE 7 - 4 WEDDINGS AND A FUNERAL
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//PREDICTION - Mr Green - The plotTwist function creates a variable that only has scope within the function so when unexpectedOutcome modifies the variable to only extends to that function. So at the end when changeMurderer is called - it will only modify the variable to Mr Green



//EPISODE 8 - KUNG-FOO DEREK STRIKES BACK (written, directed and staring Steven Seagal)
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

//PREDICTION - Lead Pipe - because the functions are not called in the right order the weapon will not change XX WRONGO - I got my brackets mixed up, its makes sense now - the changeScenario function is called first, then plotTwist inside that and then unexpectedOutcome so everything happens in the intended order and the weapon is changed to candle stick



//EPISODE 9 - STEVEN SEAGAL GETS SHOT (written and directed by HumansAgainstSeagal)
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//PREDICTION - Professor Plum - the scope of the murderer change doesn't extend outside the if statement