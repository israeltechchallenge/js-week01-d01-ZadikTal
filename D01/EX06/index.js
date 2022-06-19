function moduloEx6(number, comparer) {
  let result = number % comparer;
  let sentence = "";

  if (number > comparer) {
    sentence = `The number ${number} is bigger than ${comparer}`;
    if (result !== 0) {
      sentence += `. But the modulo of ${number} % ${comprare} is ${result}`;
    }
  } else if (number === comparer) {
    sentence = `The number ${number} is equal to ${comparer}`;
  } else {
    sentence = `The number ${number} is less than ${comparer}`;
  }
  return sentence;
}

document.getElementById("output").innerText=moduloEx6(5, 10);
console.log('hello');