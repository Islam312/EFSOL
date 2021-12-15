let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
context.save();
context.translate(100, 150);

context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 200);
context.lineTo(200, 200);
context.lineTo(200, 100);
context.closePath();

context.stroke();

context.restore();
