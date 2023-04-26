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

    inbin.value = decvalue.toString(2);
    inhex.value = decvalue.toString(16);
    inoct.value = decvalue.toString(8);
});

// convart binary to decimal, octal, hexadecimal
inbin.addEventListener("input", () => {
  let binvalue = inbin.value;

  // if binary is valide then convart it to decimal
  if (binvalidator(binvalue)) {
    let dec = parseInt(binvalue, 2);
    indec.value = dec;
    inoct.value = dec.toString(8);
    inhex.value = dec.toString(16);
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
inoct.addEventListener("input", () => {
  let octvalue = parseInt(inoct.value);
  let dec = parseInt(octvalue, 8);

  indec.value = dec;
  inbin.value = dec.toString(2);
  inhex.value = dec.toString(16);
});

// convart hexadeciamal to decimal, binary, octal
inhex.addEventListener("input", () => {
  let dec = parseInt(inhex.value, 16);
  indec.value = dec;
  inoct.value = dec.toString(8);
  inbin.value = dec.toString(2);
});
