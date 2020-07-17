// The writePassword() Function will generate a random password based off of the users responses from the prompt & confirms below.
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

    // The letters variable is the string that will be used to genereate random characters using a charat(randomlength). The characters tied to each prompt will be added to letters only if the users confirms them.
    var letters = "";

    // checks are used to make sure the conditions are met. If these three conditions aren't greater than zero after password is generated then a new password will be generated. This while loop will run until all three conditions are greater than 0.
    let upperCheck = -1;
    let lowerCheck = -1;
    let numCheck = -1;

    // if the user answers yes to an individual prompt/confirm then those characters will be added to the letters string. If they answer no, then the check will be set to 1000 so that is excluded in the while loop.
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

    // -----------------Logic---------------
    // If the user doesn't enter a value between 8 and 128 then the user receives an error and has to restart.
    if (pLength >= 8 && pLength <= 128) {
        do {
            // the join variable represents the actual password generated and sent to the users page. The join variable has to start each while loop blank so that the users requested length is met.
            var join = "";
            let array = [];
            // generates a random password with length enterd by user
            for (let i = 0; i < pLength; i++) {
                let letter = letters.charAt(Math.floor(Math.random() * letters.length));
                array.push(letter);
                join = array.join("");
            }

            // checks to make sure the values are greater than 0
            upperCheck =
                upperCheck === 1000 ? 1000 : join.replace(/[^A-Z]/g, "").length;
            numCheck = numCheck === 1000 ? 1000 : join.replace(/[^0-9]/g, "").length;
            lowerCheck =
                lowerCheck === 1000 ? 1000 : join.replace(/[^a-z]/g, "").length;

            console.log(upperCheck);
            console.log(lowerCheck);
            console.log(numCheck);
            i = 0;
            // the while loop will rerun as long as any of these three conditions are true
        } while (numCheck < 1 || upperCheck < 1 || lowerCheck < 1);
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