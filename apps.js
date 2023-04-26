let indec = document.getElementById("dec-in");
let inbin = document.getElementById("bin-in");
let inoct = document.getElementById("oct-in");
let inhex = document.getElementById("hex-in");
let errorMessageElement = document.getElementById("error");

// convert string to binary
// function convert() {
//   const input = document.getElementById("Textarea").value;
//   const output = document.getElementById("bin-text");
//   let binary = textToBinary(input);
//   output.value = binary;
// }
// // Text to binary function
// function textToBinary(text) {
//   let binary = "";
//   for (let i = 0; i < text.length; i++) {
//     let charCode = text.charCodeAt(i);
//     let charBinary = charCode.toString(2);
//     binary += charBinary.padStart(8, "0");
//   }
//   return binary;
// }

// convart decmal to octal
// indec.addEventListener("input", ()=>{
//     let decvalue = parseInt(indec.value);

//     let octal = decimalToOctal(decvalue);
//     inoct.value = octal;
// })


// convart decmal to binary
indec.addEventListener("input", () => {
  let decvalue = parseInt(indec.value);

    if(decvalue){
        inbin.value = decvalue.toString(2);
        inhex.value = decimalToHexadecimal(decvalue);
        inoct.value = decimalToOctal(decvalue);
    }
});

// convart binary to decimal, octal, hexadecimal
inbin.addEventListener("input", () => {
  let binvalue = inbin.value;

  // if binary is valide then convart it to decimal
  if (binvalidator(binvalue)) {
    indec.value = parseInt(binvalue, 2);
    inoct.value = binaryToOctal(binvalue);
    inhex.value = binaryToHexadecimal(binvalue);
    errorMessageElement.textContent = "";
  } else {
    errorMessageElement.textContent = "Enter valid binary value";
    console.log("Error");
  }
});
// binary validator function
function binvalidator(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] != "0" && num[i] != "1") {
      return false;
    }
  }
  return true;
}

// Convert octal to decimal, binary, hexadecimal
inoct.addEventListener("input",() => {
    let octvalue = parseInt(inoct.value);

    if(octvalue){
        inbin.value = octalToBinary(octvalue);
        indec.value = octalToDecimal(octvalue);
        inhex.value = octalToHexadecimal(octvalue);
    }
});

// convart hexadeciamal to decimal, binary, octal
inhex.addEventListener("input", () => {
    let hexvalue = inhex;

    if(hexvalue){
        indec.value = hexadecimalToDecimal(hexvalue);
        inbin.value = hexadecimalToBinary(hexvalue);
        inoct.value = hexadecimalToOctal(hexvalue);
    }
});

// Decimal to Octal
function decimalToOctal(decimalNumber) {
  let octalNumber = 0,
    i = 1;

  while (decimalNumber !== 0) {
    octalNumber += (decimalNumber % 8) * i;
    decimalNumber = Math.floor(decimalNumber / 8);
    i *= 10;
  }

  return octalNumber;
}

// Octal to Decimal function
function octalToDecimal(octalNumber) {
    let decimalNumber = 0,
      i = 0;
  
    while (octalNumber !== 0) {
      decimalNumber += (octalNumber % 10) * Math.pow(8, i);
      i++;
      octalNumber = Math.floor(octalNumber / 10);
    }
  
    return decimalNumber;
}

// Octal to Binary
function octalToBinary(octalNumber) {
  let binaryNumber = "",
    i = 0;

  while (octalNumber !== 0) {
    let remainder = octalNumber % 10;
    let binaryDigits = ("000" + remainder.toString(2)).slice(-3);
    binaryNumber = binaryDigits + binaryNumber;
    i++;
    octalNumber = Math.floor(octalNumber / 10);
  }

  return binaryNumber;
}

// Binary to octal
function binaryToOctal(binaryNumber) {
  let octalNumber = "",
    i = 0;

  while (binaryNumber.length % 3 !== 0) {
    binaryNumber = "0" + binaryNumber;
  }

  while (i < binaryNumber.length) {
    let binaryDigits = binaryNumber.substr(i, 3);
    let decimalNumber = parseInt(binaryDigits, 2);
    octalNumber += decimalNumber.toString(8);
    i += 3;
  }

  return octalNumber;
}

// Decimal to Hexadecimal
function decimalToHexadecimal(decimalNumber) {
  let hexadecimalDigits = "0123456789ABCDEF";
  let hexadecimalNumber = "";

  while (decimalNumber !== 0) {
    let remainder = decimalNumber % 16;
    hexadecimalNumber = hexadecimalDigits.charAt(remainder) + hexadecimalNumber;
    decimalNumber = Math.floor(decimalNumber / 16);
  }

  return hexadecimalNumber;
}

// Hexadecimal to Decimal
function hexadecimalToDecimal(hexadecimalNumber) {
  let decimalNumber = 0;

  for (let i = 0; i < hexadecimalNumber.length; i++) {
    let hexadecimalDigit = hexadecimalNumber.charAt(i);
    let decimalDigit = parseInt(hexadecimalDigit, 16);
    decimalNumber = decimalNumber * 16 + decimalDigit;
  }

  return decimalNumber;
}

//Binary to Hexadecimal
function binaryToHexadecimal(binaryNumber) {
  let hexadecimalDigits = "0123456789ABCDEF";
  let hexadecimalNumber = "";

  while (binaryNumber.length % 4 !== 0) {
    binaryNumber = "0" + binaryNumber;
  }

  for (let i = 0; i < binaryNumber.length; i += 4) {
    let binaryDigits = binaryNumber.substr(i, 4);
    let decimalNumber = parseInt(binaryDigits, 2);
    hexadecimalNumber += hexadecimalDigits.charAt(decimalNumber);
  }

  return hexadecimalNumber;
}

// Hexadecimal to Binary
function hexadecimalToBinary(hexadecimalNumber) {
  let binaryNumber = "";

  for (let i = 0; i < hexadecimalNumber.length; i++) {
    let hexadecimalDigit = hexadecimalNumber.charAt(i);
    let decimalNumber = parseInt(hexadecimalDigit, 16);
    let binaryDigits = decimalNumber.toString(2).padStart(4, "0");
    binaryNumber += binaryDigits;
  }

  return binaryNumber;
}

// Octal to Hexadecimal
function octalToHexadecimal(octalNumber) {
  let decimalNumber = 0;

  for (let i = 0; i < octalNumber.length; i++) {
    let octalDigit = octalNumber.charAt(i);
    let decimalDigit = parseInt(octalDigit, 8);
    decimalNumber = decimalNumber * 8 + decimalDigit;
  }

  let hexadecimalDigits = "0123456789ABCDEF";
  let hexadecimalNumber = "";

  while (decimalNumber > 0) {
    let remainder = decimalNumber % 16;
    hexadecimalNumber = hexadecimalDigits.charAt(remainder) + hexadecimalNumber;
    decimalNumber = Math.floor(decimalNumber / 16);
  }

  return hexadecimalNumber;
}

// Hexadecila to Octal
function hexadecimalToOctal(hexadecimalNumber) {
  let decimalNumber = 0;

  for (let i = 0; i < hexadecimalNumber.length; i++) {
    let hexadecimalDigit = hexadecimalNumber.charAt(i);
    let decimalDigit = parseInt(hexadecimalDigit, 16);
    decimalNumber = decimalNumber * 16 + decimalDigit;
  }

  let octalNumber = "";

  while (decimalNumber > 0) {
    let remainder = decimalNumber % 8;
    octalNumber = remainder.toString() + octalNumber;
    decimalNumber = Math.floor(decimalNumber / 8);
  }

  return octalNumber;
}

// Binary to text
function binaryToText(binary) {
  let text = "";
  for (let i = 0; i < binary.length; i += 8) {
    let byte = binary.substr(i, 8);
    let charCode = parseInt(byte, 2);
    let character = String.fromCharCode(charCode);
    text += character;
  }
  return text;
}
