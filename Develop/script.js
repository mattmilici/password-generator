function writePassword() {

    var pLength = prompt("How many characters do you want your password to be? Please enter a number between 8 and 128.");
    // var pLower = prompt("Do you want to include lowercase characters? y or n");
    // var pUpper = prompt("Do you want to include uppercase characters? y or n");
    // var pNumeric = prompt("Do you want to include numeric characters? y or n");
    // var pSpecial = prompt("Do you want to include special characters? y or n");

    if (pLength >= 8 && pLength <= 128) {
        var array = [];
        for (let i = 0; i < pLength; i++) {
            var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var letter = letters.charAt(Math.floor((Math.random() * letters.length)));
            array.push(letter)
        }
        var join = array.join("")

    } else { join = "Please enter your criteria again and be sure to not misstype anything!"; }

    return document.getElementById("password").innerHTML = join;
}
document.getElementById("generate").addEventListener("click", writePassword);