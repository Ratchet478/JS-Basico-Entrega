const placesToTravel = [{ id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' }, { id: 23, name: 'Murcia' }, { id: 40, name: 'Santander' }, { id: 44, name: 'Filipinas' }, { id: 59, name: 'Madagascar' }]

let tmp = [];
for (const lugar in placesToTravel) {
    let ciudad = placesToTravel[lugar];
    for (const valor in ciudad) {
        if (valor == 'id') {
            if (ciudad[valor] != 11 && ciudad[valor] != 40) {
                tmp.push(ciudad);
            }
        }

    }
}
console.log(tmp)