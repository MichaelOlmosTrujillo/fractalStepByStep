const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.save();
ctx.strokeStyle = "white";
ctx.fillStyle = "green";
ctx.lineWidth = 2;
ctx.translate(canvas.width/2, canvas.height - 50);
ctx.rotate(3 * Math.PI/180);
ctx.moveTo(0,0);
ctx.lineTo(0, -120);
ctx.stroke();

//------------------ 1rst iteration

ctx.beginPath();
ctx.save();
ctx.strokeStyle = "white";
ctx.fillStyle = "green";
ctx.lineWidth = 2;
ctx.translate(0, -120);
ctx.rotate((3+5) * Math.PI/180);
ctx.moveTo(0,0);
ctx.lineTo(0, -120 * 0.75);
ctx.stroke();
ctx.restore(); //restore of second iteration

//---------------- 1rst iteration

ctx.beginPath();
ctx.save();
ctx.strokeStyle = "white";
ctx.fillStyle = "green";
ctx.lineWidth = 2;
ctx.translate(0, -120);
ctx.rotate((3-5) * Math.PI/180);
ctx.moveTo(0, 0);
ctx.lineTo(0, -120 * 0.75);
ctx.stroke();
// ctx.restore(); // restore of second iteration

//---------------- 2nd iteration

ctx.beginPath();
ctx.save();
ctx.strokeStyle = "white";
ctx.fillStyle = "green";
ctx.lineWidth = 2;
ctx.translate(0, -120 * 0.75);
ctx.rotate((3 + 5 + 5) * Math.PI/180);
ctx.moveTo(0,0);
ctx.lineTo(0, -(120 * 0.75) * 0.75);
ctx.stroke();
ctx.restore(); //restore of second iteration
