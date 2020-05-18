var canvas  = document.querySelector('#house');
var context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.fillRect(100, 100, 300, 200);

context.fillStyle = 'grey';
context.fillRect(120, 130, 50, 50);

context.fillStyle = 'grey';
context.fillRect(320, 130, 50, 50);

context.fillStyle = 'grey';
context.fillRect(220, 210, 50, 90);

context.fillStyle = 'red';
context.beginPath();
context.moveTo(100, 100);
context.lineTo(250, 10);
context.lineTo(400, 100);
context.closePath();
context.stroke();
context.fill();
