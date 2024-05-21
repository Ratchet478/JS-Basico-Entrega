const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];
let i = 0;
for (const comida of foodSchedule) {
    if (!comida.isVegan) {
        comida.name = fruits[i];
        comida.isVegan = true;
        i++;
    }
}
console.log(foodSchedule);