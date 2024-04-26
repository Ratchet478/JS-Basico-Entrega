const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function nameFinder(nameList, find) {
    let found = false;
    let pos = 0;
    if (nameList.includes(find)) {
        pos = nameList.indexOf(find);
        found = true;
    }
    return { found: found, position: pos }
};
console.log(nameFinder(names, "Tony"));