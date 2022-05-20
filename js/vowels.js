
function vowelsInString(str) {
    let vowels = ['a', 'i', 'e', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (vowels[j] === str.charAt(i)) {
                count++;
            }
        }
    }
    return count;
}









let result = vowelsInString("hello");
console.log(result);
