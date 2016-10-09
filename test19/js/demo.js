//事件浏览器兼容
function  addEvent(obj,fn){
	if(obj.addEventListener){
    obj.addEventListener('click',fn);
    }else if(obj.attachEvent){
    obj.attachEvent("onclick",fn);
    }else{
    	obj.onclick = fn();
    }
}
/*绑定点击事件*/
var _color = document.getElementsByClassName('color');
//console.log(_color.length);
for(var i = 0;i<_color.length;i++){
	addEvent(_color[i],inputEvent);
}

var _imColor = document.getElementsByClassName('imp');
var _bgColor = document.getElementById('nav');
var _btn = document.getElementById('btn');
var _borderStyle=document.getElementsByClassName('border-style');

/*数组循环*/
function forBorder(m,color){
    for(var i = 0;i<m.length;i++){
        m[i].style.borderColor = color;
    }
}
function forFont(fontcolor){
	for(var i = 0;i<_imColor.length;i++){
        _imColor[i].style.color = fontcolor;
    }
}

/*点击改变背景及样式*/
function inputEvent(e){
	var obj = e.srcElement || e.target;
	if (obj.value == "one"){
        _bgColor.style.backgroundColor = "#3a8e35";
        //localStorage.style = _bgColor.style.backgroundColor;
        _btn.style.backgroundColor = "#3a8e35";
        localStorage.style = _btn.style.backgroundColor && _bgColor.style.backgroundColor;
        forBorder(_borderStyle,"#3a8e35");
        forFont("#3a8e35");
	}else if(obj.value == "two"){
        _bgColor.style.backgroundColor = "#bc6cd0";
        _btn.style.backgroundColor = "#bc6cd0";
        localStorage.style = _btn.style.backgroundColor &&  _bgColor.style.backgroundColor;
        forBorder(_borderStyle,"#bc6cd0");
        forFont("#bc6cd0");
	}else if(obj.value == "thr"){
        _bgColor.style.backgroundColor = "#ccc424";
         _btn.style.backgroundColor = "#ccc424";
         localStorage.style = _btn.style.backgroundColor &&  _bgColor.style.backgroundColor;
         forBorder(_borderStyle,"#ccc424");
         forFont("#ccc424");
	}else if(obj.value == "fou"){
        _bgColor.style.backgroundColor = "#5ba4d0";
         _btn.style.backgroundColor = "#5ba4d0";
         localStorage.style = _btn.style.backgroundColor &&  _bgColor.style.backgroundColor;
         forBorder(_borderStyle,"#5ba4d0");
         forFont("#5ba4d0");
	}else if(obj.value == "fiv"){
        _bgColor.style.backgroundColor = "#43a997";
         _btn.style.backgroundColor = "#43a997";
         localStorage.style = _btn.style.backgroundColor && _bgColor.style.backgroundColor;
         forBorder(_borderStyle,"#43a997");
         forFont("#43a997");
	}else if(obj.value == "six"){
        _bgColor.style.backgroundColor = "#e26a6a";
        _btn.style.backgroundColor = "#e26a6a";
        localStorage.style = _btn.style.backgroundColor &&  _bgColor.style.backgroundColor;
        forBorder(_borderStyle,"#e26a6a");
        forFont("#e26a6a");
	}
}
/*本地存储*/
window.onload = function(){
	if(localStorage.style){
		_bgColor.style.backgroundColor = localStorage.style;
		_btn.style.backgroundColor = localStorage.style;
	}
}