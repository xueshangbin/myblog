var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
autoSetCanvasSize(canvas);
listenToUser(canvas);

function setCanvasSize(){
    var pageWidth=document.documentElement.clientWidth;
    var pageHeight=document.documentElement.clientHeight;
    canvas.width=pageWidth;
    canvas.height=pageHeight;
};
function autoSetCanvasSize(canvas){
    setCanvasSize();
    window.onresize=function(){
        setCanvasSize()
    }
};

function listenToUser(canvas) {
var painting=false;
var lastPoint={x:undefined,y:undefined};  
if(document.body.ontouchstart !== undefined){
    canvas.ontouchstart=function(a){
        painting=true;
      var x=a.touches[0].clientX;
      var y=a.touches[0].clientY;
      if(eraserEnabled){
          context.clearRect(x-3,y-3,6,6)
        }else{ lastPoint={"x":x,"y":y};}
    }
    canvas.ontouchmove=function(a){
        if(painting){
        var x=a.touches[0].clientX;
        var y=a.touches[0].clientY;
        var newPoint={"x":x,"y":y};
        if(eraserEnabled){context.clearRect(x-3,y-3,6,6)}else
        {drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
            lastPoint=newPoint;
        }
       }
      }
    canvas.ontouchend=function(a){
        painting=false;
       }
}
else{canvas.onmousedown=function(a){
    painting=true;
  var x=a.clientX;
  var y=a.clientY;
  if(eraserEnabled){
      context.clearRect(x-3,y-3,6,6)
    }else{ lastPoint={"x":x,"y":y};}
}
canvas.onmousemove=function(a){
    if(painting){
    var x=a.clientX;
    var y=a.clientY;
    var newPoint={"x":x,"y":y};
    if(eraserEnabled){context.clearRect(x-5,y-5,10,10)}else
    {drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
        lastPoint=newPoint;
    }
   }
  }
canvas.onmouseup=function(a){
    painting=false;
   }
};

function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.strokeStyle="rgb(0,77,71)";
    context.moveTo(x1,y1);
    context.lineWidth=1;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();}


}


var eraserEnabled = false
xiangpica.onclick = function() {
  eraserEnabled =true
  qiehuan.className = 'qiehuan x'

}
huabi.onclick = function(){
  eraserEnabled = false
  qiehuan.className = 'qiehuan'
}