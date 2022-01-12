(function () {
  'use strict';
  window.addEventListener('load', function () {
    let forms = document.getElementsByClassName('needs-validation');

    const validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (e) {
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add('was-validated');
      });
    });
  });
})();
