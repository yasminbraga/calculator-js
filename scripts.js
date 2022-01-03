let resultField = document.getElementById("result-field");

function insertValue(number) {
  resultField.value = resultField.value + number;
}

function calc() {
  let exp = resultField.value;
  console.log(exp);
  let result = eval(exp);
  resultField.value = result;
}

function eraseAll() {
  resultField.value = "";
}

function eraseOne() {
  let exp = resultField.value;
  const sub = exp.slice(0, -1);
  resultField.value = sub;
}
