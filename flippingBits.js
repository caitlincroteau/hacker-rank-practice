//SOLVED

//Unsigned Integers (often called "uints") are just like integers (whole numbers) but have the property that they don't have a + or - sign associated with them. Thus they are always non-negative (zero or positive).

// Long (long integer) variables are stored as signed 32-bit (4-byte) numbers ranging in value from -2,147,483,648 to 2,147,483,647.

//int is base 10, 32-bit is base 2

function flippingBits(n) {
  //convert n into 32bit, base 2 string
  const binary = n.toString(2).padStart(32, "0");

  //flip binary string
  let flippedBinary = "";
  for (let i in binary) {
    if (binary[i] === "0") {
      flippedBinary += "1";
    } else {
      flippedBinary += "0";
    }
  }

  //convert flipped back to 32bt num
  //for radix, use the base that the str num is in
  //eg flippedBinary is a 32bit int so is in base 2
  const decimal = parseInt(flippedBinary, 2);
  return decimal;
}

console.log(flippingBits(3));
console.log(flippingBits(2147483647));
console.log(flippingBits(1));
console.log(flippingBits(0));

//https://www.binaryconvert.com/convert_signed_int.html?decimal=049050
//convert to/from binary ^ 32bit

//https://www.rapidtables.com/convert/number/decimal-to-binary.html
//convert to/from binary ^ not 32bit

//https://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript

//https://stackoverflow.com/questions/73696368/how-do-i-convert-an-integer-in-javascript-to-a-32bits

//https://www.programiz.com/javascript/examples/decimal-binary#:~:text=Example%202%3A%20Convert%20Decimal%20to%20Binary%20Using%20toString()&text=The%20parseInt()%20method%20is,decimal%20number%20to%20binary%20number.

//https://www.tutorialspoint.com/How-to-convert-Decimal-to-Binary-in-JavaScript#:~:text=Syntax,decimal%20%3E%3E%3E%200).
