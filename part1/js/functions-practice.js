//STEP 1
function halfNumber(number) {
  result = number / 2
  console.log("Half of " + number +" is " + result)
  return result
}
halfNumber(4);

//STEP 2
function squareNumber(number) {
  result = number*number;
  console.log("The result of squaring the number " + number +" is " + result);
  return result;
}
squareNumber(3);

//STEP 3
function percentOf(number1, number2) {
  result = (number1 / number2)*100;
  console.log(number1 +" is " + result + "% of " + number2);
  return result;
}
percentOf(2, 4);

//STEP 4
function findModulus(number1, number2) {
  result = number2 % number1;
  console.log(result +" is the modulus of " + number1 + " and " + number2);
  return result;
}
findModulus(4, 10);

//STEP 5
function sumOfArguments(count) {
  var argsArray;
  var isValid = false;
  var sum = 0;
  //we prompt the user until the argument matches our requirements
  while(!isValid) {
    var args = window.prompt("Please enter " + count + " values, separated by commas:");
    argsArray = args.split(",");
    if (argsArray.length == count) {
      // check that every element is a valid number
      isValid = argsArray.every(function(item) {
        return !isNaN(item);
      })
      if (isValid) {
        sum = argsArray.reduce(function(prev, curr){
      return Number(prev) + Number(curr);
  });
      }
    }
  }
  console.log(sum);
}

sumOfArguments(3);
