function remove(elem){
	elem.parentNode.removeChild(elem);
}


/**
 * 根据元素的class查找元素
 * @param className 查找的类的名字
 * @param context 查找的范围
 * @param tag 限定的标签名
 */
function getByClass(className, context, tag){
    var aResult = [];
    context = context || document;//如果传了context参数，就使用该参数，否则默认document
    if(document.getElementsByClassName && !tag){
        return context.getElementsByClassName(className);
    }

    tag = tag || '*';//如果传了tag参数，就使用该参数，否则默认是所有标签
    var aElem = context.getElementsByTagName(tag);
    for(var i=0; i<aElem.length; i++){
        //if(aElem[i].className == className){
        var re = new RegExp("\\b" + className + "\\b");
        if( re.test(aElem[i].className) ){//使用正则来判断当前元素的className中是否包含指定的className
            aResult.push(aElem[i]);
        }
    }

    return aResult;
}
function last(elem){
	elem = elem.lastChild;
	return elem && elem.nodeType != 1 ? prev(elem) : elem;
}

function first(elem){
	elem = elem.firstChild;
	return elem && elem.nodeType != 1 ? next(elem) : elem;
}
/**
	获取元素前一个元素兄弟节点
	@elem 当前元素
	@return 当前元素前一个元素兄弟节点
*/
function prev(elem){
	do{
		elem = elem.previousSibling;
	}while(elem && elem.nodeType != 1);
	return elem;
}
/**
	获取元素下一个元素兄弟节点
	@elem 当前元素
	@return 当前元素下一个元素兄弟节点
*/
function next(elem){
	do{
		elem = elem.nextSibling;
	}while(elem && elem.nodeType != 1);
	return elem;
}
/**
	获取元素的样式
	@elem 当前元素
	@attr 某个css属性
	@return 当前元素的样式
*/
function getStyle(elem, attr){
	//通过能力检测的方式来测试当前浏览器是否支持该语法
	if(elem.currentStyle){//IE
		return elem.currentStyle[attr];
	}else if(window.getComputedStyle){
		return window.getComputedStyle(elem, false)[attr];
	}
}
/**
	运动函数
	@elem 当前元素
	@attr 某个css属性
	@target 目标点
*/
function doMove(elem, obj, fn){// elem, attr, target, fn
	clearInterval(elem.timer);
	elem.timer = setInterval(function(){
		var bStop = true;//一个标识，用来标识是否停止定时器，true代表停止，false代表不停止
		for(var p in obj){//p=attr, obj[p]=target
			var currentStyle;
			if( p == 'opacity' ){
				currentStyle = parseInt(getStyle(elem, 'opacity') * 100);
			}else{
				currentStyle = parseInt(getStyle(elem, p));
			}
			var iSpeed = (obj[p] - currentStyle)/8;
			iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			if(currentStyle != obj[p]){
				bStop = false;//表示某一个属性还没有到达目标点
			}

			if( p == 'opacity' ){
				elem.style.opacity = (currentStyle + iSpeed)/100;
				elem.style.filter = 'alpha(opacity:'+(currentStyle + iSpeed)+')';
			}else{
				elem.style[p] = currentStyle + iSpeed + 'px';
			}
		}

		if(bStop){
			clearInterval(elem.timer);
			if(fn) {
				fn();
			}
		}
	
	}, 30);
}