function designerPdfViewer(h, word) {
    // Write your code here
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let letterHeight = [];
    for(let i = 0; i < word.length; i++){
        letterHeight.push(h[letters.indexOf(word[i])]);
    }
    let tallest = letterHeight.sort()[letterHeight.length - 1]
return tallest * word.length;
}

// second challenge

function findDigits(n) {
    // Write your code here
let counter = 0;
let string = n.toString();
let array = string.split('');
for (let i =0; i< array.length; i++){
if(n % Number(array[i])===0){
    counter++;
}
}
return counter;
}