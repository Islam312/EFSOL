// let worker = new Worker('webWorker1.js');

// worker.postMessage('Hello word');

// worker.addEventListener(
//   'message',
//   function (e) {
//     document.getElementById('output').innerHTML = e.data;
//     console.log('e.data =>>', e.data);
//   },
//   false
// );

document.querySelector('#button').addEventListener('click', function () {
  if (window.Worker) {
    let workerFib = new Worker('workerFibanacci.js');
    let inputNumber = +document.getElementById('input').value;

    workerFib.postMessage(inputNumber);

    workerFib.addEventListener('message', function (e) {
      document.getElementById('output').value = e.data;
    });
  }
});
