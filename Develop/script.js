function writePassword() {
    var pLength = prompt(
        "How many characters do you want your password to be? Please enter a number between 8 and 128."
    );
    var pNumeric = confirm("Do you want to include numeric characters?");
    var pSpecial = confirm("Do you want to include special characters?");
    var pUpper = confirm("Do you want to include upppercase characters?");
    var pLower = confirm("Do you want to include lowercase characters?");

    var letters = "";
    var join = "";

    var upperCheck = -1;
    var lowerCheck = -1;
    var numCheck = -1;
    var array = [];

    pNumeric
        ?
        ((letters = "0123456789"), (numCheck = -1)) :
        ((letters = ""), (numCheck = 0));

    pSpecial ? (letters = letters + "%!@#$^$") : (letters = letters);
    pUpper
        ?
        ((letters = letters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), (upperCheck = -1)) :
        ((letters = letters), (upperCheck = 0));
    pLower
        ?
        ((letters = letters + "abcdefghijklmnopqrstuvwxyz"), (pLower = -1)) :
        ((letters = letters), (pLower = 0));

    // -----------------FIRST FUNCTION CHECKING FOR LENGTH----------------

    if (pLength >= 8 && pLength <= 128) {
        while (numCheck <= 0 && upperCheck <= 0 && lowerCheck <= 0) {
            for (let i = 0; i < pLength; i++) {
                var letter = letters.charAt(Math.floor(Math.random() * letters.length));
                array.push(letter);
                join = array.join("");
                upperCheck = join.replace(/[^A-Z]/g, "").length;
                lowerCheck = join.replace(/[^a-z]/g, "").length;
                numCheck = join.replace(/[^0-9]/g, "").length;
            }
        }
    } else {
        join =
            "Please enter your criteria again and be sure to not misstype anything!";
    }

    // -----------------Returns Paddword-----------------

    return (document.getElementById("password").innerHTML = join);
}

document.getElementById("generate").addEventListener("click", writePassword);

// -----------------Returns Paddword-----------------
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function writePassword() {
//     var pLength = prompt(
//         "How many characters do you want your password to be? Please enter a number between 8 and 128."
//     );

//     // var pNumeric = prompt("Do you want to include numeric characters? y or n");
//     // var pSpecial = prompt("Do you want to include special characters? y or n");

//     // -----------------FIRST FUNCTION CHECKING FOR LENGTH-----------------
//     if (pLength >= 8 && pLength <= 128) {
//         var array = [];
//         for (let i = 0; i < pLength; i++) {
//             var letters =
//                 "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz%";
//             var letter = letters.charAt(Math.floor(Math.random() * letters.length));
//             array.push(letter);
//         }
//         var join = array.join("");
//     } else {
//         join =
//             "Please enter your criteria again and be sure to not misstype anything!";
//     }
//     // -----------------FIRST FUNCTION CHECKING FOR LENGTH-----------------
//     // -----------------SECOND FUNCTION CHECKING FOR LENGTH-----------------

//     var pSpecial = confirm("Do you want to include special characters? y or n");

//     // -----------------SECOND FUNCTION CHECKING FOR LENGTH-----------------

//     // -----------------Returns Paddword-----------------
//     return (document.getElementById("password").innerHTML = join);
// }

// document.getElementById("generate").addEventListener("click", writePassword);

// // -----------------Returns Paddword-----------------

// const str = "hi, therep";

// const res = str.includes("o") || str.includes("x") || str.includes("p");

// console.log(res);