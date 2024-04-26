const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    let tmp = 0
    for (let i = 0; i < numberList.length; i++) {
        tmp += numberList[i];
    }
    return tmp / numberList.length;
}