function favouriteAnimal(animal) {
    return animal + " is my favourite animal"
}

console.log(favouriteAnimal("Rabbit"))

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("change", () => {
  let num = parseFloat(textBox.value);
  const original = num;
  if (isNaN(num)) {
    output.textContent = `Please enter a number`
  } else {
    if (num < 0) output.textContent = (`Please enter a positive number`);
    if (num === 0) output.textContent = (`${original}! equals 1`);;
    if (num >= 1) {
      let x = num - 1;
      while (x > 1) {
        num *= x;
        x--;
      }
      output.textContent = (`${original}! equals ${num}`);
    }
    }
  });