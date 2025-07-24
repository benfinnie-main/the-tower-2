function favouriteAnimal(animal) {
    return animal + " is my favourite animal"
}

console.log(favouriteAnimal("Rabbit"))

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});