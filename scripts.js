var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;

for (var i = 0; i <= cw; i++){
  context.beginPath()
  context.moveTo(i, ch/2);
  if (i%4 === 0) {
    context.lineTo(0, 0);
  } else if (i%4 === 1) {
    context.lineTo(cw, 0);
  } else if (i%4 === 2) {
    context.lineTo(0, ch);
  } else if (i%4 === 3) {
    context.lineTo(cw, ch);
  }
  context.strokeStyle = 'rgba(100, 130, 240, 1)';
  context.stroke();
}
