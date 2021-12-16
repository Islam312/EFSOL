const $id = function (id) {
  return document.getElementById(id);
};

if (window.Worker) {
  let workerCalc = new Worker('workerCalc.js');

  document
    .querySelector('.buttons-group')
    .addEventListener('click', function (e) {
      let attrId = e.target.id;
      let inputNum1 = +$id('inputNum1').value;
      let inputNum2 = +$id('inputNum2').value;
      if (attrId && !isNaN(inputNum1) && !isNaN(inputNum2)) {
        workerCalc.postMessage([inputNum1, inputNum2, attrId]);
      } else {
        $id('output').value = 'Invalid error';
        console.error('Invalid error');
      }

      workerCalc.onmessage = function(e){
        $id('output').value = e.data;
      }
    });
}
