// contents could have been anything numbers, booleans, objects etc
const pets = ["dog", "cat", "rabbit", "hamster"];

const petsLength = pets.length;

console.log('Pets length', petsLength);

pets[2] = "snake";

console.log(pets);

pets.forEach((pet, idx) => {
    console.log(`${idx} => ${pet}`);
});

