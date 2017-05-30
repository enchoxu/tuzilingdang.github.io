var EventUtil = {
	addHandler : function(el, type , handler){
		if (el.addEventListener){
			el.addEventListener(type, handler, false);
		}
		else if (el.attachEvent){
			el.attachEvent("on"+type, handler);
		}
		else {
			el["on"+type] = handler;
		}
	},

	getButton: function(event, handler){
		if(document.implementation.hasFeature("MouseEvents","2.0")) {
			return event.button;
		}
		else
			return false;
	},

	getMousePos: function(event,ele){
		var e = event || window.event;
		var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		var initX = e.pageX || e.clientX + scrollX;
		var initY = e.pageY || e.clientY + scrollY;
		return {x: initX - ele.offsetLeft, y: initY - ele.offsetTop};
	}
};


function Element (){
	if(arguments && arguments.length != 0){
		Array.prototype.slice.apply(arguments);
		var ele = document.createElement(arguments[0]);
		console.log(arguments.length);
		ele.setAttribute("class",arguments[1]);
		ele.style.width = arguments[2];
		ele.style.height = arguments[3];
		ele.style.backgroundColor = arguments[4];
	}
	return ele;
}

Element.prototype = {
	constructor: Element,
	setPosition: function(){}
};

function addHandler(demo, menu){
	var mousedownHandler = function(event){
		var button = EventUtil.getButton(event);
		if(button === 0){
			menu.style.marginLeft = EventUtil.getMousePos(event,demo).x + 'px';
			menu.style.marginTop = EventUtil.getMousePos(event,demo).y + 'px';
			menu.style.display = "block";		
		}
	};

	var mouseoverHandler = function(event) {
		menu.style.display = "block";
	};

	var mouseoutHandler = function(event) {
		menu.style.display = "none";
	};
	EventUtil.addHandler(demo, "mousedown", mousedownHandler);
	EventUtil.addHandler(menu, "mouseover", mouseoverHandler);
	EventUtil.addHandler(menu, "mouseout", mouseoutHandler);
}


function createDemo(){

}

// function initDemoStyle(){
// 	// var menu = document.getElementsByClassName("menu");
// 	// var arrayLi = document.getElementsByClassName("menu_li");
// 	menu.style.listStyle = "none";
// 	for(let i = 0;i < arrayLi.length; i++){
// 		arrayLi.style.marginLeft = "-25%";
// 		arrayLi.style.border = "border: #607D8B 1px solid";
// 	}
// }

function init(){

	//createDemo();
	//initDemoStyle();
	var obj = document.querySelector("#一个小练习");
	var fragment = document.createDocumentFragment();
	var menu = Element("ul","menu","8rem","auto","transparent"),
	li_1 = Element("li","menu_li","125%","1.8rem","rgb(208, 208, 208);"),
	li_2 = Element("li","menu_li","125%","1.8rem","rgb(208, 208, 208);"),
	li_3 = Element("li","menu_li","125%","1.8rem","rgb(208, 208, 208);");
	li_4 = Element("li","menu_li","125%","1.8rem","rgb(208, 208, 208);");
	var demo = Element("div","demo","95%","20rem","rgba(255, 215, 0, 0.32)");

	var node_1 = document.createTextNode("功能1");
	var node_2 = document.createTextNode("功能2");
	var node_3 = document.createTextNode("功能3");
	var node_4 = document.createTextNode("功能4");
	li_1.appendChild(node_1);
	li_2.appendChild(node_2);
	li_3.appendChild(node_3);
	li_4.appendChild(node_4);
	menu.appendChild(li_1);
	menu.appendChild(li_2);
	menu.appendChild(li_3);
	menu.appendChild(li_4);
	demo.prepend(menu);
	fragment.appendChild(demo);
	obj.after(fragment);

	// menu.style.listStyle = "none";
	// var arrayLi = document.getElementsByClassName("menu_li");
	// for(let i = 0;i < arrayLi.length; i++){
	// 	// arrayLi.style.marginLeft = "-25%";
	// 	// arrayLi.style.border = "#607D8B 1px solid";
	// }
	addHandler(demo,menu);
}

init();




