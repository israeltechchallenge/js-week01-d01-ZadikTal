function compareNumbers(num1, num2) {
  if (num1>num2) {
    console.log (`The number ${num1} is bigger than ${num2}`);
  } else if (num1===num2) {
    console.log (`The number ${num1} is equal to ${num2}`);
  } else {
    console.log (`The number ${num1} is less than ${num2}`);
  }
}

export { compareNumbers };