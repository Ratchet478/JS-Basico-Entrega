const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
function removeDuplicates(list) {
    let retorno = [];
    for (let i = 0; i < list.length; i++) {
        if (!retorno.includes(list[i])) {
            retorno.push(list[i]);
        }
    }
    return retorno
}
console.log(removeDuplicates(duplicates))