const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];
function repeatCounter(list) {
    let tmp = {}
    for (let i of list) {
        if (tmp[i]) {
            tmp[i]++;
        } else {
            tmp[i] = 1;
        }
    }
    return tmp;
}
console.log(repeatCounter(words));