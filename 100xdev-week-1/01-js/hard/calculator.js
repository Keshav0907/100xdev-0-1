// /*
//   Implement a class `Calculator` having below methods
//     - initialise a result variable in the constructor and keep updating it after every arithmetic operation
//     - add: takes a number and adds it to the result
//     - subtract: takes a number and subtracts it from the result
//     - multiply: takes a number and multiply it to the result
//     - divide: takes a number and divide it to the result
//     - clear: makes the `result` variable to 0
//     - getResult: returns the value of `result` variable
//     - calculate: takes a string expression which can take multi-arithmetic operations and give its result
//       example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
//       Points to Note: 
//         1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
//         2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

//   Once you've implemented the logic, test your code by running
// */

// class Calculator {

//   result = 0;

//   constructor() {
//     this.result = 0
//   }
  
//   add(input) {
//     this.result += input;
//   }

//   subtract(input) {
//     this.result -= input;
//   }

//   multiply(input) {
//     this.result *= input;
//   }

//   divide(input) {
//     if (input === 0) {
//       throw new Error("Cannot divide by 0");
//     } else {
//       this.result /= input;
//     }
//   }
  
//   clear() {
//     this.result = 0;
//   }
  
//   getResult() {
//     return this.result;
//   }

// calculate(expression) {
//     let result = 0;
//     let currentNumber = 0;
//     let currentOperator = "+";
//     let stack = [];
//     let i = 0;
//     while (i < expression.length) {
//       if (expression[i] === " ") {
//         i++;
//         continue;
//       }
//       if (expression[i] === "(") {
//         stack.push(currentNumber);
//         stack.push(currentOperator);
//         currentNumber = 0;
//         currentOperator = "+";
//       } else if (expression[i] === ")") {
//         currentNumber = this.calculateSimpleExpression(currentNumber, currentOperator, stack.pop());
//         currentOperator = stack.pop();
//       } else if (expression[i] === "+" || expression[i] === "-" || expression[i] === "*" || expression[i] === "/") {
//         currentNumber = this.calculateSimpleExpression(currentNumber, currentOperator, expression[i]);
//         currentOperator = expression[i];
//       } else {
//         currentNumber = currentNumber * 10 + parseInt(expression[i]);
//       }
//       i++;
//     }

//     this.result = currentNumber;
//   }

//   calculateSimpleExpression(currentNumber, currentOperator, nextOperator) {
//     if (currentOperator === "+") {
//       return currentNumber;
//     } else if (currentOperator === "-") {
//       return -currentNumber;
//     } else if (currentOperator === "*") {
//       return currentNumber * nextOperator;
//     } else if (currentOperator === "/") {
//       return currentNumber / nextOperator;
//     }
//   }


// }

module.exports = Calculator;

/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  result = 0;
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by 0");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
  
  calculate(expression) {
    let result = 0;
    let currentNumber = 0;
    let currentOperator = "+";
    let stack = [];
    let i = 0;
    while (i < expression.length) {
      if (expression[i] === " ") {
        i++;
        continue;
      }
      if (expression[i] === "(") {
        stack.push(currentNumber);
        stack.push(currentOperator);
        currentNumber = 0;
        currentOperator = "+";
      } else if (expression[i] === ")") {
        currentNumber = this.calculateSimpleExpression(currentNumber, currentOperator, stack.pop());
        currentOperator = stack.pop();
      } else if (expression[i] === "+" || expression[i] === "-" || expression[i] === "*" || expression[i] === "/") {
        currentNumber = this.calculateSimpleExpression(currentNumber, currentOperator, expression[i]);
        currentOperator = expression[i];
      } else {
        currentNumber = currentNumber * 10 + parseInt(expression[i]);
      }
      i++;
    }

    this.result = currentNumber;
  }

  calculateSimpleExpression(currentNumber, currentOperator, nextOperator) {
    if (currentOperator === "+") {
      return currentNumber;
    } else if (currentOperator === "-") {
      return -currentNumber;
    } else if (currentOperator === "*") {
      return currentNumber * nextOperator;
    } else if (currentOperator === "/") {
      return currentNumber / nextOperator;
    }
  }
  

}

module.exports = Calculator;