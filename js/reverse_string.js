
function reverse(word) {
    let newword='' ;

    for (let i = word.length-1; i >= 0; i--) {
        newword = newword + word[i];

    }
    return newword;
}














let rev = reverse("hello");
console.log(rev);
