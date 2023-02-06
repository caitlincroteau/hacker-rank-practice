//SOLVED
//make sure to account for edge cases of 12pm and 12am

function timeConversion(s) {
  if (s[0] === "1" && s[1] === "2") {
    //catch for 12am
    if (s[s.length - 2] === "A") {
      let newTime = "00:";

      for (let i = 3; i < s.length - 2; i++) {
        newTime += s[i];
      }
      return newTime;

      // catch for 12pm
    } else {
      return s.slice(0, -2);
    }

    // no change needed
  } else if (s[s.length - 2] === "A") {
    return s.slice(0, -2);

    //for PM
  } else {
    const targetHour = Number(s[0] + s[1]);
    const newHour = targetHour + 12;
    let newTime = `${newHour}:`;

    for (let i = 3; i < s.length - 2; i++) {
      newTime += s[i];
    }

    return newTime;
  }
}

console.log(timeConversion("12:05:45PM"));
// 12:05:45

console.log(timeConversion("12:05:45AM"));
// 00:05:45

console.log(timeConversion("07:05:45PM"));
// 19:05:45

console.log(timeConversion("07:05:45AM"));
// 07:05:45
