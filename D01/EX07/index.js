function randomNum (){
  return (Math.floor(Math.random() * 100))
}

function moduloEx7(number, comparer) {
  let result = number % comparer;
  let sentence = "";

  if (number > comparer) {
    sentence = `The number ${number} is bigger than ${comparer}`;
    if (result !== 0) {
      sentence += `. But the modulo of ${number} % ${comparer} is ${result}`;
    }
  } else if (number === comparer) {
    sentence = `The number ${number} is equal to ${comparer}`;
  } else {
    sentence = `The number ${number} is less than ${comparer}`;
  }
  return sentence;
}

document.getElementById("output").innerText=moduloEx7(randomNum(), randomNum());
