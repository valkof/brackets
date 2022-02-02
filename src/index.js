module.exports = function check(str, bracketsConfig) {
  let stack = [];
  str.split('').forEach(bracket => 
    bracketsConfig.find(twice => twice[0] === stack[stack.length - 1] && twice[1] === bracket) ? stack.pop() : stack.push(bracket)
  );
  return !stack.length;
}
