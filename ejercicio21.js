const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
let minus = [];
let major = [];
for (const user of users) {
  if (user.years < 18) {
    minus.push(user);
  } else {
    major.push(user);
  }
}
console.log("Usuarios mayores de edad:");
for (const user of major) {
  console.log(user.name);
}
console.log("Usuarios menores de edad:");
for (const user of minus) {
  console.log(user.name);
}
