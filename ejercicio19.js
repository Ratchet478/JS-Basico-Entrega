const toys = [
    { id: 5, name: 'Transformers' },
    { id: 11, name: 'LEGO' },
    { id: 23, name: 'Hot Wheels' },
    { id: 40, name: 'Rescador de gato' },
    { id: 40, name: 'FurReal Friends gato interactivo' },
    { id: 60, name: 'Nerf Blaster' },
    { id: 71, name: 'Sylvanian Families - Familia gato' }
];
let tmp = []
for (const jugete in toys) {
    if (!toys[jugete].name.includes("gato")) {
        tmp.push(toys[jugete])
    }
}
console.log(tmp)