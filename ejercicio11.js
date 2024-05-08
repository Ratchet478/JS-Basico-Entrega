const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let tmp = 0;
    for (let i = 0; i < list.length; i++) {
        if (typeof (list[i]) == "string") {
            tmp += list[i].length - 1;
        } else {
            tmp += list[i];
        }
    }
    return tmp;
}