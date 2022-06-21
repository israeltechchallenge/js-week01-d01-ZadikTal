function moduloEx5(num1, num2) {
  let result = num1 % num2;
  let sentence = "";

  if (num1 > num2) {
    sentence = `The number ${num1} is bigger than ${num2}`;
    if (result !== 0) {
      sentence += `. But the modulo of ${num1} % ${num2} is ${result}`;
    }
  } else if (num1 === num2) {
    sentence = `The number ${num1} is equal to ${num2}`;
  } else {
    sentence = `The number ${num1} is less than ${num2}`;
  }
  console.log (sentence)
}

export { moduloEx5 };
