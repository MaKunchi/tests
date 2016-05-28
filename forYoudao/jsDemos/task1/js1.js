function addLoadEvent(func) {
    var oldLoadEvent=window.onload;
    if(typeof window.onload!="function"){
      window.onload=func;
    }
    else{
      window.onload=function(){
        oldLoadEvent();
        func();
      }
    }
}
addLoadEvent(movement);
var leftIn=document.getElementById('left-in'),
rightIn=document.getElementById('right-in'),
leftOut=document.getElementById('left-out'),
rightOut=document.getElementById('right-out'),
textBox=document.getElementById('textBox'),
myul=document.getElementsByTagName('ul')[0];
var numMove;
function movement() {
  leftIn.onclick=function(){
    numMove=textBox.value.trim();
    if(!numMove.match(/^[0-9]+$/)){
      alert("请输入数字好嘛？")
    }
    else{
      var newLi=document.createElement('li');
      newLi.innerHTML=numMove;
      if(!myul.childNodes[0]){
        myul.appendChild(newLi);
      }
      else{
        myul.insertBefore(newLi,myul.firstChild);
      }
    }
  }
  rightIn.onclick=function(){
    numMove=textBox.value.trim();
     if(!numMove.match(/^[0-9]+$/)){
      alert("请输入数字好嘛？")
    }
    else{
       var newLi=document.createElement('li');
        newLi.innerHTML=numMove;
        myul.appendChild(newLi);
    }
  }
  leftOut.onclick=function(){
    numMove=textBox.value.trim();
     if(!numMove.match(/^[0-9]+$/)){
      alert("请输入数字好嘛？")
    }
    else{
      if(!myul.childNodes[0]){
        alert("别闹了，现在队列里啥都没！")
      }
      else{
        myul.removeChild(myul.firstChild)
      }
    }
  }
    rightOut.onclick=function(){
    numMove=textBox.value.trim();
     if(!numMove.match(/^[0-9]+$/)){
      alert("请输入数字好嘛？")
    }
    else{
      if(!myul.childNodes[0]){
        alert("别闹了，现在队列里啥都没！")
      }
      else{
        myul.removeChild(myul.lastChild);
      }
    }
  }
}