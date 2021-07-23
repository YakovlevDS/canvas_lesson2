//Усложнённое задание
'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const angle = (degrees = 360) => (Math.PI / 180) * degrees;
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(180, 100);
ctx.arc(100, 100, 80, angle(), false);
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(370, 100);
ctx.arc(285, 100, 80, angle(), false);
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(550, 100);
ctx.arc(470, 100, 80, angle(), false);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(270, 190);
ctx.arc(190, 195, 80, angle(), false);
ctx.strokeStyle = 'gold';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(460, 190);
ctx.arc(380, 195, 80, angle(), false);
ctx.strokeStyle = 'green';
ctx.stroke();
