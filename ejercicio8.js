const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
    let tmp = ""
    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i].length > tmp.length) {
            tmp = stringList[i];
        }
    }
    return tmp;
}

console.log(findLongestWord(avengers));