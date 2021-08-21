var math_it_up = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '/': function (x, y) { return (x / y)},
  '*': function (x, y) { return (x * y)},
};

function eval(expression) {
  while (expression.length > 1){
    while (expression.includes("/")) {
      let operator = expression.indexOf("/");
      if (expression[operator + 1] == 0) {
        throw "TypeError: Division by zero.";
      }
      let result = math_it_up["/"](expression[operator - 1], expression[operator + 1]);
      expression.splice(operator-1, 3, result);
    } 
    while (expression.includes("*")) {
      let operator = expression.indexOf("*");
      let result = math_it_up["*"](expression[operator - 1], expression[operator + 1]);
      expression.splice(operator-1, 3, result);
    } 
    while (expression.includes("-")) {
      let operator = expression.indexOf("-");
      let result = math_it_up["-"](expression[operator - 1], expression[operator + 1]);
      expression.splice(operator-1, 3, result);
    } 
    while (expression.includes("+")) {
      let operator = expression.indexOf("+");
      let result = math_it_up["+"](Number(expression[operator - 1]), Number(expression[operator + 1]));
      expression.splice(operator-1, 3, result);
    } 
  } 
  return expression.join("");
}

function expressionCalculator(expr) {
  let arr = [];
  if (expr.length === 3) {
    arr = expr.trim().split("");
  } else {
    arr = expr.trim().split(" ");
  }
  let clearArr = [];
  let bracketsLeft = 0;
  let bracketsRight = 0;
  arr.forEach(el => {
    if (el !== "") {
      clearArr.push(el);
      if (el.includes(`((`)) {
        bracketsLeft = bracketsLeft + 2;
    } else if (el.includes(`(`)) {
      bracketsLeft ++;
    }else if (el.includes(`)`)) {
      bracketsRight++;
    }
    } 
  })
if (bracketsLeft !== bracketsRight) {
  throw "ExpressionError: Brackets must be paired";
}
while (bracketsLeft > 0) {
  let beginBracket = clearArr.lastIndexOf("(");
  let finishBracket = clearArr.indexOf(`)`, beginBracket);
  let numberOfEl = finishBracket - beginBracket + 1;
  let resultExpression = clearArr.splice(beginBracket + 1, numberOfEl-2);
  clearArr.splice(beginBracket, 2, eval(resultExpression));
  bracketsLeft--;
}
let result = eval(clearArr);
  return Number(result);
}

module.exports = {
    expressionCalculator
}
