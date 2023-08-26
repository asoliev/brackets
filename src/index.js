module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  bracketsConfig.map((val) => {
    openBrackets.push(val[0]);
    closeBrackets.push(val[1]);
  })

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {

      if (stack.length > 0) {
        const topElement = stack[stack.length - 1];
        const index = openBrackets.indexOf(currentSymbol);

        if (currentSymbol === topElement && openBrackets[index] === closeBrackets[index]) {
          stack.pop();
          continue;
        }
      }

      stack.push(currentSymbol);

    } else {

      if (stack.length === 0) return false;

      const topElement = stack[stack.length - 1];

      if (closeBrackets.indexOf(currentSymbol) === openBrackets.indexOf(topElement))
        stack.pop();
      else return false;

    }
  }

  return stack.length === 0;
}