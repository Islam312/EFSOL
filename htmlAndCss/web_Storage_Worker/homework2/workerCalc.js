onmessage = function (e) {
  let workerResult = switchCase(e.data);

  console.log('worker =>>', workerResult);
  postMessage(workerResult);
};
function switchCase(data) {
  switch (data[2]) {
    case 'add':
      return data[0] + data[1];
    case 'subtract':
      return data[0] - data[1];
    case 'multiply':
      return data[0] * data[1];
    case 'divide':
      return data[0] / data[1];
  }
}
