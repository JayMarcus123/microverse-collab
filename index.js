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