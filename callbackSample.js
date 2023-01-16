function add(v1, v2) {
  return v1 + v2;
}

function calculate(v1, v2, callback) {
  return callback(v1, v2);
}

const addResult = calculate(1, 2, add);
console.log(addResult);

function multiply(v1, v2) {
  return v1 * v2;
}

const calculateResult = calculate(1, 2, multiply);
console.log(calculateResult);

const hello =() => {
  console.log('hello');
}

setTimeout(() => {
  hello();
}, 2000);
