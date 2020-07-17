// The writePassword() Function will generate a random password based off the users responses from the prompt & confirms.
function writePassword() {
    // ---------------Start of Prompts and confirms that users are asked to answer----------
    // Prompt that determines the users password length. It has to be between 8 and 128 characters. If it does not meet those requirements then the user will be asked to recreate a new password.
    const pLength = prompt(
        "How many characters do you want your password to be? Please enter a number between 8 and 128."
    );

    const pNumeric = confirm("Do you want to include numeric characters?");
    const pSpecial = confirm("Do you want to include special characters?");
    const pUpper = confirm("Do you want to include upppercase characters?");
    const pLower = confirm("Do you want to include lowercase characters?");
    // ---------------End of Prompts and confirms that users are asked to answer----------

    // The letters variable is the string that will be used to genereate random characters using a charat(randomlength). the characters tied to each prompt will be added to letter only if the users confirms them.
    var letters = "";

    // the join variable represents the actual password generated and sent to the users page.

    // checks are used to make sure the conditions are met
    let upperCheck = -1;
    let lowerCheck = -1;
    let numCheck = -1;

    let upperCheckTest = -1;
    let lowerCheckTest = -1;
    let numCheckTest = -1;

    pNumeric ? (letters = "0123456789") : ((letters = ""), (numCheck = 1000));

    pSpecial ? (letters = letters + "%!@#$^$") : (letters = letters);
    pUpper
        ?
        (letters = letters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ") :
        ((letters = letters), (upperCheck = 1000));
    pLower
        ?
        (letters = letters + "abcdefghijklmnopqrstuvwxyz") :
        ((letters = letters), (lowerCheck = 1000));

    // -----------------FIRST FUNCTION CHECKING FOR LENGTH----------------

    if (pLength >= 8 && pLength <= 128) {
        do {
            var join = "";
            let array = [];
            for (let i = 0; i < pLength; i++) {
                let letter = letters.charAt(Math.floor(Math.random() * letters.length));
                array.push(letter);
                join = array.join("");
            }
            upperCheckTest =
                upperCheck === 1000 ? 1000 : join.replace(/[^A-Z]/g, "").length;
            numCheckTest =
                numCheck === 1000 ? 1000 : join.replace(/[^0-9]/g, "").length;
            lowerCheckTest =
                lowerCheck === 1000 ? 1000 : join.replace(/[^a-z]/g, "").length;

            console.log(upperCheckTest);
            console.log(lowerCheckTest);
            console.log(numCheckTest);
            i = 0;
        } while (numCheckTest < 1 || upperCheckTest < 1 || lowerCheckTest < 1);
    } else {
        join =
            "Please enter your criteria again and be sure to not misstype anything!";
    }

    // -----------------Returns Paddword-----------------

    return (document.getElementById("password").innerHTML = join);
}

document.getElementById("generate").addEventListener("click", writePassword);

// -----------------Returns Paddword-----------------

// let numCheckTest =
// numCheck === 1000 ?
// (numCheck = 1000) :
// (numCheck = join.replace(/[^0-9]/g, "").length);