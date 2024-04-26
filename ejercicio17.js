const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const valor in alien) {
    console.log(`La propiedad ${valor} tiene cómo valor: ${alien[valor]}`);
}