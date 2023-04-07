"use strict;"

const canvasElement = document.querySelector('canvas');
const ctx = canvasElement.getContext('2d');

ctx.canvas.width = 1000;
ctx.canvas.height = 500;
ctx.lineWidth = 30;


let drawing = false

document.addEventListener('mousedown', start)
document.addEventListener('mouseup', end)
document.addEventListener('mousemove', draw)
document.querySelector(".button").addEventListener('click', action)
document.querySelector(".color").addEventListener('input', color)
document.querySelector('.size').addEventListener('input', change)


function start (event) {
    console.log(event.clientX, event.clientY)
    drawing = true
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
}
function end (event) {
    drawing = false
    ctx.stroke();
}
function draw (event) {
    if (drawing === true){
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
        start()
    }
}
function action (event) {
    ctx.fillStyle = 'antiquewhite';
    ctx.fillRect(0,0,1000,500);
}
function color (event) {

    ctx.strokeStyle = document.querySelector('.color').value
}
function change (event) {
    ctx.lineWidth = document.querySelector('.size').value;
}


