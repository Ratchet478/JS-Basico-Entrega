const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
let short = [];
let mid = [];
let long = [];

for (const pelicula of movies) {
    if (pelicula.durationInMinutes < 100) {
        short.push(pelicula);
    } else if (pelicula.durationInMinutes > 100 && pelicula.durationInMinutes < 200) {
        mid.push(pelicula);
    } else {
        long.push(pelicula);
    }
}
console.log("Peliculas cortas")
console.log(short)
console.log("Peliculas medias")
console.log(mid)
console.log("Peliculas largas")
console.log(long)