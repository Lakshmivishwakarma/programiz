/**
 * 
 * @returns a valid integer number from the prompt or throws an error;
 */
function getIntegerFromUser(inputMessage) {
    let input = prompt("inputMessage")
    if (parseInt(input)) {
        return parseInt(input,10);
    } else {
        alert("You have entered non numeric data");
        throw new Error("You have entered non numeric data")
    }
}
/**
 * 
 * @returns a valid Float number from the prompt or throws an error;
 */
function getFloatFromUser(inputMessage) {
    let input = prompt(inputMessage)
    if (parseFloat(input) || input == 0) {
        return parseFloat(input);
    } else {
        alert("You have entered non numeric data");
        throw new Error("You have entered non numeric data")
    }
}
