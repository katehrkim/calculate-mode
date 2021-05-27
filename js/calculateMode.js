function calculateMode(numbers) {
  let dictionary = [];
  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] in dictionary) {
      dictionary[numbers[i]] = dictionary[numbers[i]] + 1;
    }
    else {
      dictionary[numbers[i]] = 1;
    }
  }
  let max = 0;
  let output = [];
  for (let key in dictionary) {
    if (dictionary[key] == max) {
      output.push(key);
    }
    else if (dictionary[key] > max) {
      max = dictionary[key];
      output = [];
      output.push(key);
    }
  }
  if (typeof numbers[0] == "number") {
    for (let k = 0; k < output.length; ++k) {
      output[k] = parseFloat(output[k]);
    }
  }
  return output;
};
module.exports = calculateMode;