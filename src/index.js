function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  var array = expr.split(" ");
  var expressionsArray = [];
 var numberFirstOperations = 0;
 var numberSecondOperations = 0;
 var numberBrackets = 0;
  for (var i = 0; i < array.length; i ++) {
    if (array[i] !== "") {
     expressionsArray.push(array[i]);
    }
    if (array[i] === "/" || array[i] === "*") {
      numberFirstOperations += 1;
    }
    if (array[i] === "+" || array[i] === "-" ) {
      numberSecondOperations += 1;
    }
  }
var split;
var result;
for (var j = 1; j <= numberFirstOperations; j++) {
  for (var k = 0; k < expressionsArray.length; k++) {
    if (expressionsArray[k-1] === "*") {
      result =  Number(expressionsArray[k-2]) * Number(expressionsArray[k]);
      expressionsArray.splice(k-2, 3, result);
    }
    if (expressionsArray[k-1] === "/") {
     result =  Number(expressionsArray[k-2]) / Number(expressionsArray[k]);
     expressionsArray.splice(k-2, 3, result);
   }
 }
 for (var k = 0; k < expressionsArray.length; k++) {
   if (expressionsArray[k-1] === "*") {
     result =  Number(expressionsArray[k-2]) * Number(expressionsArray[k]);
     expressionsArray.splice(k-2, 3, result);
   }
   if (expressionsArray[k-1] === "/") {
     result =  Number(expressionsArray[k-2]) / Number(expressionsArray[k]);
     expressionsArray.splice(k-2, 3, result);
   }
 }
}

for (var m = 1; m <= numberSecondOperations; m++) {
for (var z = 0; z < expressionsArray.length; z++) {
  if (expressionsArray[z-1] === "+") {
     result =  Number(expressionsArray[z-2]) + Number(expressionsArray[z]);
     expressionsArray.splice(z-2, 3, result);

  }
  if (expressionsArray[z-1] === "-") {
     result =  Number(expressionsArray[z-2]) - Number(expressionsArray[z]);
     expressionsArray.splice(z-2, 3, result);

  }
}
}
var calculation = 0;
for (var l = 0; l < expressionsArray.length; l ++) {
  calculation += expressionsArray[l];
}
return calculation;
}

module.exports = {
    expressionCalculator
}
