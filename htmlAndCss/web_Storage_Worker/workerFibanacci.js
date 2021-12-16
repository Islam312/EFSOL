onmessage = function (e) {
  const result = fib(e.data);
  console.log('ef =>>', e);
  postMessage(result);
};

function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}
