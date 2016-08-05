/*
getClass(select,[context])  获取具有指定class的元素
select 指定的className
context 指定的范围（不指定的话为document）

第一步：
    先看看有没有指定范围
第二步；
    判断浏览器类型
第三步：
    1.w3c的话直接用
    2.IE的话需要构造函数
        a.选中所有的元素
        b.声明一个空数组（用来接收指定class的元素）
        c.遍历所有的类名，如果类名与所指定的类名相同时把这个类名压入空数组中
        d.返回空数组

*/ 
// alert(1);
function getClass1(select){
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=document.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=document.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(all[i].className==select){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}




// 防止一个元素有多个类名（IE中会算少）
function getClass2(select){
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=document.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=document.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,select)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
function checkClass2(classname,select){
	var arr1=classname.split(" ")
	for(var i=0;i<arr.length;i++){
		if(arr1[i]==select){
			return true;
		}
	}
	return false;
}



// 在指定范围内选择
function getClass(select,context){
	var context = context ? context:document;
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=context.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=context.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,select)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
function checkClass(classname,select){
	var arr1=classname.split(" ")
	for(var i=0;i<arr.length;i++){
		if(arr1[i]==select){
			return true;
		}
	}
	return false;
}








/*
$(string)获取页面中的集合

".one"  获取指定类名的元素的集合
"#one"  获取指定ID的第一个元素
"div"   获取指定标签名的元素的集合

思路：
    第一步：
        判断字符串的首字符
    第二步：
        .    getClass()
        #    document.getElementById()
       标签  document.getElementsByTagName()
*/ 
// 缺陷：只能判断一个数值
function $1(selector){
	if(selector.charAt(0)=="."){
		return getClass(selector.slice(1));
	}else if(selector.charAt(0)=="#"){
		return document.getElementById(selector.slice(1));
	}else if(/^[a-z][a-z1-6]{0,8}/.test(selector)){
		return document.getElementsByTagName(selector);
	}
}

// 可以增加函数功能
function $2(selector,context){
	var context=context||document
	if(selector.charAt(0)=="."){
		return getClass(selector.slice(1),context);
	}else if(selector.charAt(0)=="#"){
		return document.getElementById(selector.slice(1));
	}else if(/^[a-z][a-z1-6]{0,8}/.test(selector)){
		return context.getElementsByTagName(selector);
	}
}


function $(selector,context){
	if(typeof selector=="string"){
		var context=context||document
	    if(selector.charAt(0)=="."){
		    return getClass(selector.slice(1),context);
	    }else if(selector.charAt(0)=="#"){
		    return document.getElementById(selector.slice(1));
	    }else if(/^[a-z][a-z1-6]{0,8}$/.test(selector)){
		    return context.getElementsByTagName(selector);
	    }

	}else if(typeof selector=="function"){
		addEvent(window,"load",selector);
		}
	}











/*
setContent(obj;val)
obj 
val 所修改的内容 （有的话是修改   没的话是返回值）
第一步：判断val有木有
第二步：判断浏览器类型
*/

function setContent(obj,val){
    for(var i=0;i<obj.length;i++){
        if(val){
            if(obj[i].innerText){
                obj[i].innerText=val;
            }else{
                obj[i].textContent=val;
            }
        }else{
            if(obj[i].innerText){
                return innerText[i];
            }else{
                return textContent[i];
            }
        }
    } 
}



// 用来获取指定元素的指定的元素
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}






// 让div在一定速度增大
function animate(obj,attr,speed){
	var t=setInterval(function(){
		for( var i in attr){
			var start=parseInt(getStyle(obj,i));
			if(start>=attr[i]){
				start=attr[i]
				clearInterval(t);
			}
		}obj.style[i]=start+speed+"px"
		
	},50)
}




// 获取指定元素的子节点
// obj：指定的对象
// type：获取子节点的类型
function getchild(obj,type){
     // 第一步：获取所有子节点
     // 第二步：声明一个空数组
     // 第三步：遍历所有的子节点
     //         通过子节点的类型
     //         true child[i].nodeType==1
     //         false  child[i].nodeType==1||(child[i].nodeType==3&&!(/^\s+$/.test(child[i].nodeValue)));
     // // 第四步：返回数组  
     var child=obj.childNodes;
     var type=type===undefined?true:type;
     var arr=[];
     for(var i=0;i<child.length;i++){
     	if(type===true){
            if(child[i].nodeType==1){arr.push(child[i])}
     	}else{
     		if(child[i].nodeType==1||(child[i].nodeType==3&&!(/^\s+$/.test(child[i].nodeValue)))){
     			{arr.push(child[i])}
     		}
     	}
     }return arr;

}



// 获取第一个子节点
function firstchild(obj,type){
   return getchild(obj,type)[0];
}
// 获取最后一个子节点
function lastchild(obj,type){
	var length=getchild(obj,type).length
	return getchild(obj,type)[length-1];
}
// 获取指定的子节点
function randomchild(obj,type,num){
	
	return getchild(obj,type)[num];
}








// getnext  获取下一个兄弟元素节点
//          第一步 ：判断obj是否有下一个兄弟元素
               // 没有  false
               // 有  更新next=next.nextSibling
               //      next判断是否为空

               function getNext(obj){
                  var next=obj.nextSibling;
                  if(next==null){
                  	return false;
                  }
                  while(next.nodeType==8||next.nodeType==3){
                  	next=next.nextSibling
                  	if(next==null){
                  		return false;

                  	}
                  }
                  return next;
               } 




               // 下一个兄弟节点带文本 

               function getNext1(obj){
                  var next=obj.nextSibling;
                  if(next==null){
                  	return false;
                  }
                  while(next.nodeType==8||next.nodeType==3&&/^\s+$/.test(next.nodeValue)){
                  	next=next.nextSibling
                  	if(next==null){
                  		return false;

                  	}
                  }
                  return next;
               } 








              // 获取上一个兄弟元素
               function getUp(obj){
                  var next=obj.previousSibling;
                  if(next==null){
                  	return false;
                  }
                  while(next.nodeType==8||next.nodeType==3){
                  	next=next.previousSibling
                  	if(next==null){
                  		return false;

                  	}
                  }
                  return next;
               }    


     


     // 将一个div插入到父元素obj1最前边
     function appendBefore(obj,obj1){
     var first=firstchild(obj1)()
     if(first){
     	obj1.insertBefore(obj,first)

     }else{
     	obj1.appendChild(obj);
     }
     }


         // 将obj插到父元素obj1的后边
     function  appendAfter(obj,obj1){
     	obj1.appendChild(obj);

     }





    // 将obj插入子元素obj1的后边
     function  insertAfter(obj,obj1){
     	// 寻找父元素
     	var parent=obj1.parentNode;
     	// 下一个兄弟元素节点
     	var next=getNext(obj1);
     	if(next){
            parent.insertBefore(obj,next)
     	}else{
     		parent.appendChild(obj);

     	}
     }




     //将obj插入子元素obj1的前边

     function  insertBefore(obj,obj1){
     	// 获取obj1的父元素
       var parent=obj1.parentNode;
       
       	parent.insertBefore(obj,obj1)
       
     }







     // 添加一个事件
     function addEvent(obj,type,fn){
        if(obj.attachEvent){
               obj.attachEvent("on"+type,fn)
        }else{
                obj.addEventListener(type,fn,false)
        }
     }




     // function offset(obj){



     //  var result={left:0,top:0}

     //  var arr=[];
     //  arr.push(obj)


     //  var parent=obj.parentNode;
     //  while(parent.nodeName!=="BODY"){

     //  }










     // }




     function  scroll(obj,down,up){

      if(obj.attachEvent){
obj.attachEvent("onmousewheel",scrollFn);  
//IE opera
     }else if(obj.addEventListener){
obj.addEventListener("mousewheel",scrollFn,false);  
//chrome,safari    -webkit-
obj.addEventListener("DOMMouseScroll",scrollFn,false);  
//firefox     -moz-
}
function scrollFn(e){

  var  ev=e||window.event;
  var  dir=ev.wheelDelta||ev.detail; 






if(ev.preventDefault){
  ev.preventDefault=true;
  }else{
  ev.preventDefault=false;


  
}

if(dir==-120){
  down.call(obj);
}else if(dir==120||dir==3){
  up.call(obj);
}

}









     }