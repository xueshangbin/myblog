var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
autoSetCanvasSize(canvas);
listenToUser(canvas);
context.strokeStyle="black";
var lineWidth=1;
var h=1,w=2;
function clearRect(h,w){context.clearRect(x-h,y-h,w,w)}


var eraserEnabled = false

pencil.onclick = function(){
  eraserEnabled = false
  pencil.classList.add('active')
  xiangpica.classList.remove('active')
}
xiangpica.onclick = function() {
  eraserEnabled =true
  xiangpica.classList.add('active')
  pencil.classList.remove('active')
}
green.onclick=function(){
  green.classList.add('active')
  context.strokeStyle="green";
  red.classList.remove('active');
  yellow.classList.remove('active');
  blue.classList.remove('active');
  grey.classList.remove('active');
  black.classList.remove('active');
  purple.classList.remove('active');
  peru.classList.remove('active');
}
red.onclick=function(){
  red.classList.add('active')
  context.strokeStyle="red";
  green.classList.remove('active');
  yellow.classList.remove('active');
  blue.classList.remove('active');
  grey.classList.remove('active');
  black.classList.remove('active');
  purple.classList.remove('active');
  peru.classList.remove('active');
}
yellow.onclick=function(){
  yellow.classList.add('active')
  context.strokeStyle="yellow";
  red.classList.remove('active');
  green.classList.remove('active');
  blue.classList.remove('active');
  grey.classList.remove('active');
  black.classList.remove('active');
  purple.classList.remove('active');
  peru.classList.remove('active');
}
blue.onclick=function(){
  blue.classList.add('active')
  context.strokeStyle="blue";
  red.classList.remove('active');
  yellow.classList.remove('active');
  green.classList.remove('active');
  grey.classList.remove('active');
  black.classList.remove('active');
  purple.classList.remove('active');
  peru.classList.remove('active');
}
grey.onclick=function(){
  grey.classList.add('active')
  context.strokeStyle="grey";
  red.classList.remove('active');
  yellow.classList.remove('active');
  blue.classList.remove('active');
  green.classList.remove('active');
  black.classList.remove('active');
  purple.classList.remove('active');
  peru.classList.remove('active');
}
black.onclick=function(){
  black.classList.add('active')
  context.strokeStyle="black";
  red.classList.remove('active');
  yellow.classList.remove('active');
  blue.classList.remove('active');
  grey.classList.remove('active');
  green.classList.remove('active');
  purple.classList.remove('active');
  peru.classList.remove('active');
}
purple.onclick=function(){
  purple.classList.add('active')
  context.strokeStyle="purple";
  red.classList.remove('active');
  yellow.classList.remove('active');
  blue.classList.remove('active');
  grey.classList.remove('active');
  black.classList.remove('active');
  green.classList.remove('active');
  peru.classList.remove('active');
}
peru.onclick=function(){
  peru.classList.add('active')
  context.strokeStyle="peru";
  red.classList.remove('active');
  yellow.classList.remove('active');
  blue.classList.remove('active');
  grey.classList.remove('active');
  black.classList.remove('active');
  purple.classList.remove('active');
  green.classList.remove('active');
}
one.onclick=function(){
  lineWidth=1;
  h=1,w=2;
  one.classList.add('active');
  four.classList.remove('active');
  six.classList.remove('active');
  eight.classList.remove('active');
}
four.onclick=function(){
  lineWidth=4;
  h=2,w=4;
  four.classList.add('active');
  one.classList.remove('active');
  six.classList.remove('active');
  eight.classList.remove('active');
}
six.onclick=function(){
  lineWidth=6;
  h=3,w=6;
  six.classList.add('active');
  four.classList.remove('active');
  one.classList.remove('active');
  eight.classList.remove('active');
}
eight.onclick=function(){
  lineWidth=8;
  h=4,w=8;
  eight.classList.add('active');
  four.classList.remove('active');
  six.classList.remove('active');
  one.classList.remove('active');
}
download.onclick=function(){
  var url=canvas.toDataURL('image/png')
  var a=document.createElement('a')
  document.body.appendChild(a)
  a.href=url
  a.target="_blank"
  a.download="我的作品"
  a.click()
}
clear.onclick=function(){
 context.clearRect(0,0,canvas.width,canvas.height);
}




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
          context.clearRect(x-h,y-h,w,w)
        }else{ lastPoint={"x":x,"y":y};}
    }
    canvas.ontouchmove=function(a){
        if(painting){
        var x=a.touches[0].clientX;
        var y=a.touches[0].clientY;
        var newPoint={"x":x,"y":y};
        if(eraserEnabled){context.clearRect(x-h,y-h,w,w)}else
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
      context.clearRect(x-h,y-h,w,w)
    }else{ lastPoint={"x":x,"y":y};}
}
canvas.onmousemove=function(a){
    if(painting){
    var x=a.clientX;
    var y=a.clientY;
    var newPoint={"x":x,"y":y};
    if(eraserEnabled){context.clearRect(x-h,y-h,w,w)}else
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
    
    context.moveTo(x1,y1);
    context.lineWidth=lineWidth;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();}


}


