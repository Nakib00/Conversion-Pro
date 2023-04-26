let indec = document.getElementById("dec-in");
let inbin = document.getElementById("bin-in");
let errorMessageElement = document.getElementById("error");

// convart decmal to binary
indec.addEventListener("input",() =>{
    let decvalue = parseInt(indec.value);

    inbin.value = decvalue.toString(2);
});

// convart binary to decimal
inbin.addEventListener("input",() =>{
    let binvalue = inbin.value;

    // if binary is valide then convart it to decimal
    if(binvalidator(binvalue)){
        indec.value = parseInt(binvalue, 2);
        errorMessageElement.textContent = "";
    }
    else{
        errorMessageElement.textContent = "Enter valid binary value";
        console.log("Error");
    }
})

// binary validator function
function binvalidator(num){
    for(let i = 0; i < num.length; i++){
        if((num[i] != "0") && (num[i] !="1")){
            return false;
        }
    }
    return true;
}