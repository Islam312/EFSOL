let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

c.beginPath();

c.moveTo(40, 40);
c.bezierCurveTo(80, 30, 160, 50, 200, 40);
c.lineTo(200, 140);
c.bezierCurveTo(160, 160, 80, 130, 40, 140);
c.fillStyle = 'red';
c.fill();

c.clearRect(80, 30, 80, 160);
c.closePath()



c.stroke()