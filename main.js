var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="pink";
var mousemovement="";

canvas.addEventListener("mousedown",md);
function md(e){
    mousemovement="mouse is clicked"
    console.log(mousemovement);
    color = document.getElementById("color").value; width_of_line = document.getElementById("width_of_line").value;

}

canvas.addEventListener("mouseup",mu);
function mu(e){
    mousemovement="mouse is up";
    console.log(mousemovement);
}

canvas.addEventListener("mouseleave",ml);
function ml(e){
    mousemovement="mouse left the canvas";
    console.log(mousemovement);

}

var lastX,lastY;
canvas.addEventListener("mousemove",mm);
function mm(e){
    currentX=e.clientX -canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mousemovement=="mouse is clicked" ){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
       ctx.arc(currentX,currentY,40,0,2*Math.PI);
        ctx.stroke();
    }

    lastX=currentX;
    lastY=currentY;
    
    
    
}

function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }


