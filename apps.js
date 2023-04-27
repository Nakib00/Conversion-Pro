let indec = document.getElementById("dec-in");
let inbin = document.getElementById("bin-in");
let inoct = document.getElementById("oct-in");
let inhex = document.getElementById("hex-in");
let text = document.getElementById("Textarea");
let errorMessageElement = document.getElementById("error");

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
// Octal validator function
function octalvalidator(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] == "8" || num[i] == "9") {
      return false;
    }
  }
  return true;
}
// hexadecimal validator function
function hexavalidatorl(num) {
  // Regular expression to match hexadecimal numbers
  const hexRegex = /^[0-9A-Fa-f]+$/;
  
  if (hexRegex.test(num)) {
    return true;
  } else {
    return false;
  }
}

// Convert octal to decimal, binary, hexadecimal
inoct.addEventListener("input", () => {
  let octvalue = inoct.value;
  let dec = parseInt(octvalue, 8);

  if(octalvalidator(octvalue)){
    indec.value = dec;
    inbin.value = dec.toString(2);
    inhex.value = dec.toString(16);

    errorMessageElement.textContent = "";
  }else{
    errorMessageElement.textContent ="Enter valid Octal value";
  }
  
});

// convart hexadeciamal to decimal, binary, octal
inhex.addEventListener("input", () => {
  let hexavalue = inhex.value;
  let dec = parseInt(inhex.value, 16);

  if(hexavalidatorl(hexavalue)){
    indec.value = dec;
    inoct.value = dec.toString(8);
    inbin.value = dec.toString(2);

    errorMessageElement.textContent = "";
  }else{
    errorMessageElement.textContent = "Enter valid Hexadecimal value";
  }

});

// convert text to binary, octal, hexadecimal, decimal
text.addEventListener("input", ()=>{
    let binaryResult = "";

    for (let i = 0; i < text.value.length; i++) {
        const binaryChar = text.value[i].charCodeAt(0).toString(2);
        binaryResult += "0".repeat(8 - binaryChar.length) + binaryChar;
    }

    inbin.value = binaryResult;
    let dec = parseInt(binaryResult, 2);
    indec.value = dec;
    inoct.value = dec.toString(8);
    inhex.value = dec.toString(16);
});

// Binary to Text
function binaryToString(str) {
    return str.replace(/[01]{8}/g, function (v) {
        return String.fromCharCode(parseInt(v, 2));
    });
}

function convert() {
    const binaryInput = document.getElementById("binary").value;
    const text = binaryToString(binaryInput);
    document.getElementById("result").innerText = text;
}