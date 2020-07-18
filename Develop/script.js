// The writePassword() Function will generate a random password based off of the users responses from each prompt & confirms below.
function writePassword() {
    // ---------------Start of Prompts and confirms that users are asked to answer----------

    const pLength = prompt(
        "How many characters do you want to include? Number must between 8 and 128."
    );
    if (pLength >= 8 && pLength <= 128) {
        const pNumeric = confirm("Do you want to include numeric characters?");
        const pSpecial = confirm("Do you want to include special characters?");
        const pUpper = confirm("Do you want to include upppercase characters?");
        const pLower = confirm("Do you want to include lowercase characters?");

        // ---------------End of Prompts and confirms that users are asked to answer----------

        // The letters variable is the string that random characters will be pulled from using a charat(randomlength). The characters tied to each prompt will be added to letters only if the users "confirms" them.
        var letters = "";

        // Check variable (1 for each prompt/confrim) are used to make sure the conditions are met. If these three conditions aren't greater than zero after a password is generated then a new password will be generated until all 4 checks are greater than zero. Great than zero means that there is atleast one character in the password that meets the requirements
        let upperCheck = -1;
        let lowerCheck = -1;
        let numCheck = -1;
        let specialCheck = -1;

        // if the user answers yes to an individual prompt/confirm then those characters will be added to the letters string. If they answer no, then the check will be set to 1000 so that is excluded in the while loop.
        pNumeric ? (letters = "0123456789") : ((letters = ""), (numCheck = 1000));

        pSpecial
            ?
            (letters = letters + "%!@#$*&?") :
            ((letters = letters), (specialCheck = 1000));
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
            //if the user selected no for a condition, then the value for each variable below is already 1000 and should stay at 1000. If they selected yes, meaning they want to include said characters. Then we are calculating how many times the characters appear and returning the result.
            upperCheck =
                upperCheck === 1000 ? 1000 : join.replace(/[^A-Z]/g, "").length;

            numCheck = numCheck === 1000 ? 1000 : join.replace(/[^0-9]/g, "").length;

            lowerCheck =
                lowerCheck === 1000 ? 1000 : join.replace(/[^a-z]/g, "").length;

            specialCheck =
                specialCheck === 1000 ?
                1000 :
                join.replace(/[^%|!|@|#|$|*|&|?|]/g, "").length;

            console.log(upperCheck);
            console.log(lowerCheck);
            console.log(numCheck);
            console.log(specialCheck);

            // the while loop will run as long as any of these three conditions are true. If they are true that means the password does not contain the requirements requested by the user.
        } while (
            numCheck < 1 ||
            upperCheck < 1 ||
            lowerCheck < 1 ||
            specialCheck < 1
        );
    } else {
        join =
            "Oopps! It looks like you didn't select a number between 8 and 128! Please select the 'Generate Button' again and retry!";
    }

    // -----------------Returns Paddword-----------------
    return (document.getElementById("password").innerHTML = join);
} //end of function

//calls function writePassword when the user enters to "Generate Password" button
document.getElementById("generate").addEventListener("click", writePassword);