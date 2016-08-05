$(function(){
	var images=$("a",$(".box")[0]);
	var lis=$("li",$(".window")[0]);
	var win=$(".window")[0];
	var left=$(".Left")[0];
    var right=$(".Right")[0];
    var ul=$("ul",$(".window")[0])
    var gdyx=$(".gdyx")[0];
    /*获取图片宽度*/
    var widths=parseInt(getStyle(win,"width"));
    /*初始化状态*/
    lis[0].style.background="red";
	for (var i = 0; i < images.length; i++) {
		if (i==0) {
			continue;
		}
		images[i].style.left=widths+"px";
	}
	var index=0;
	var next=0;
	var flag=true;
	var t=setInterval(moveR,1800);
	function moveL(){
		// 更新next
		next--;
		// 判断边界
		if (next<0) {
			next=images.length-1;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=-widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		// 更新index
		index=next;
	}
	function moveR(){
		// 更新next
		next++;
		// 判断边界
		if (next==images.length) {
			next=0;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});
        
		// 更新index
		index=next;
	}
	win.onmouseover=function(){
		clearInterval(t);
		animate(left,{opacity:1})
		animate(right,{opacity:1})
		animate(lis,{opacity:1})

	}
	win.onmouseout=function(){ 
		t=setInterval(moveR,1800);
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		animate(lis,{opacity:0})
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onclick=function(){
			if (index==this.index) {return};
			if (this.index>index) {
                images[this.index].style.left=widths+"px";
		        animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}else if(this.index<index){
				images[this.index].style.left=-widths+"px";
		        animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}
		    
		    next=this.index;
		    index=this.index;   
	    }
	}
	right.onclick=function(){
		if (flag) {
			flag=false;
			moveR();
		}
				
	}
	left.onclick=function(){
		if (flag) {
			flag=false;
			moveL();
		}
				
	}



	gdyx.onmouseover=function(){
		var right=gdyx.style.right;
		var top=gdyx.style.top;
   	animate(gdyx,{right:12})
   }
   gdyx.onmouseout=function(){
   	animate(gdyx,{right:0})
   }




var gdyx=$(".gdyx")[0];
   gdyx.onmouseover=function(){
   	animate(gdyx,{right:12})
   }
   gdyx.onmouseout=function(){
   	animate(gdyx,{right:0})
   }




   var bianks=$(".biank");
   var bianks1=$(".biank1");
   var bianks2=$(".biank2");
   for(var i=0;i<bianks.length;i++){

       bian(bianks[i]) 
   }
  for(var i=0;i<bianks1.length;i++){

       bian(bianks1[i]) 
   }
     for(var i=0;i<bianks2.length;i++){

       bian(bianks2[i]) 
   }
      
 
 function bian(obj){
      var left=$(".left",obj)[0];
      var right=$(".right",obj)[0];
      var top=$(".top",obj)[0];
      var bottom=$(".bottom",obj)[0];
      var w=obj.offsetWidth;
      var h=obj.offsetHeight;

      // console.log(lefts);


   

    obj.onmouseover=function(){

         
     animate(left,{height:h})
     animate(right,{height:h})
     animate(top,{width:w})
     animate(bottom,{width:w})
     

      }
      
    obj.onmouseout=function(){
          
     animate(left,{height:0})
     animate(right,{height:0})
     animate(top,{width:0})
     animate(bottom,{width:0})


      }


    
     }








    // 超值特卖动画
     var cztm4=$(".cztm4");
     var sjzx=$(".sjzx")[0];
     var sjzx60=$(".sjzx60")[0];
     var sjzx61=$(".sjzx61")[0];
     var cztm6=$(".cztm6");
   cztm4[0].style.borderBottom="5px solid #e70050"
   sjzx.style.zIndex=5;
     cztm4[0].onmouseover=function(){

         sjzx.style.zIndex=5;
         
          sjzx60.style.zIndex=0;
          sjzx61.style.zIndex=0;
          cztm4[0].style.borderBottom="5px solid #e70050"
          cztm4[1].style.borderBottom="none"
          cztm4[2].style.borderBottom="none"
        
          cztm6[0].style.borderBottomColor="#e70050";
          cztm6[1].style.borderBottomColor="#fff";
          cztm6[2].style.borderBottomColor="#fff";
     }
    


     cztm4[1].onmouseover=function(){

     	
        sjzx.style.zIndex=0;
         
          sjzx60.style.zIndex=1;
           sjzx61.style.zIndex=0;
          // console.log(2222222222222222)
          cztm4[0].style.borderBottom="none"
        cztm4[1].style.borderBottom="5px solid #e70050"
          cztm4[2].style.borderBottom="none"
          cztm6[0].style.borderBottomColor="#fff";
          cztm6[1].style.borderBottomColor="#e70050";
          cztm6[2].style.borderBottomColor="#fff";
     }
     
     cztm4[2].onmouseover=function(){


         sjzx.style.zIndex=0;
         
          sjzx60.style.zIndex=0;
           sjzx61.style.zIndex=1;
            cztm4[0].style.borderBottom="none"
        cztm4[2].style.borderBottom="5px solid #e70050"
          cztm4[1].style.borderBottom="none"
          cztm6[0].style.borderBottomColor="#fff";
          cztm6[1].style.borderBottomColor="#fff";
          cztm6[2].style.borderBottomColor="#e70050";
         
     }
     



// 时尚名品右侧动画
var ssmp23=$(".ssmp23");
for(var i=0;i<ssmp23.length;i++){
  ssmp23[i].index=i;
  ssmp23[i].onmouseover=function(){
     var slis=$("li",ssmp23[this.index])
    var simages=$("img",ssmp23[this.index]);
    var zuojt=$(".zuojt",ssmp23[this.index])[0];
    var youjt=$(".youjt",ssmp23[this.index])[0];
     console.log(zuojt);
// slis[0].style.background="red"
    slis[0].onclick=function(){
  // console.log(1111111111111)
  animate(simages[0],{left:0})
  animate(simages[1],{left:390})
  slis[0].style.background="red"
  slis[1].style.background="#ccc"

}

slis[1].onclick=function(){
    animate(simages[0],{left:-390})
  animate(simages[1],{left:0})
  slis[1].style.background="red"
  slis[0].style.background="#ccc"
  // console.log(22222222222)
}



youjt.onclick=function(){
  animate(simages[0],{left:-390})
  animate(simages[1],{left:0})
  slis[1].style.background="red"
  slis[0].style.background="#ccc"


}
zuojt.onclick=function(){
  animate(simages[0],{left:0})
  animate(simages[1],{left:390})
  slis[0].style.background="red"
  slis[1].style.background="#ccc"

}


zuojt.style.display="block"
  youjt.style.display="block"
  }

  ssmp23[i].onmouseout=function(){
 
  var zuojt=$(".zuojt",ssmp23[this.index])[0];
    var youjt=$(".youjt",ssmp23[this.index])[0];
  zuojt.style.display="none"
  youjt.style.display="none"
}
 
}
// console.log(simages);



// 初始化状态










// 时尚名品左侧四个图片动画


var zuojt6=$(".zuojt1")
var youjt6=$(".youjt1")

var ssmp27=$(".ssmp27")
   var siflag=true;

for (var i = 0; i < zuojt6.length; i++) {
     zuojt6[i].index=i;

  zuojt6[i].onclick=function(){
        if(siflag){
          siflag=false

      aa(ssmp27[this.index])}
       }

};
for (var i = 0; i < youjt6.length; i++) {
     youjt6[i].index=i;

  youjt6[i].onclick=function(){
      if(siflag){

        siflag=false;
      bb(ssmp27[this.index])}
       }

};

// function moveL88(obj){
//   animate(obj,{left:-200},function(){
//     var first66=firstchild(obj)
//     obj.appendChild(first66)

//     obj.style.left=0;})
  
// }

// function moveR88(obj){
//   var last=lastchild(obj);
//   var first=lastchild(obj);
//   insertBefore(last,first);
//   obj.style.left=-200+"px"
//   animate(obj,{left:0})
// }


   function aa(obj){
      animate(obj,{left:-200},function(){
        obj.style.left=0;

       var first=firstchild(obj);
     obj.appendChild(first);
         siflag=true;

      })


      

   }
 
      function bb(obj){
        
       var first=firstchild(obj);
        
        var last=lastchild(obj);
      insertBefore(last,first);

      obj.style.left=-200+"px"
      animate(obj,{left:0},function(){siflag=true})
      
     
   }







  









// 楼层跳转动效


	// 获取每个楼层及每个楼层的scrolltop

	// alert(1)
  console.log(2222222222)
	var lctz1=$(".lctz1")
	var obj=document.body.scrollTop?document.body:document.documentElement;
    var scrollTop=obj.scrollTop;
    var floor=$(".floor")
    var ssxxlc=$(".ssxxlc")
    // console.log(ssxxlc);
    // 声明一个空数组，放楼层的scrolltop
    var arr=[];
    for(var i=0;i<floor.length;i++){
    	arr.push(floor[i].offsetTop)
    }
    // console.log(arr)

var wflag=true
    for( var i=0;i<arr.length;i++){
              lctz1[i].index=i;
            lctz1[i].onclick=function(){
              var obj=document.body.scrollTop?document.body:document.documentElement;
              var scrollTop=obj.scrollTop;

              animate(obj,{scrollTop:arr[this.index]})
              
          }

          
      }


for( var i=0;i<arr.length;i++){
	  lctz1[i].index=i;
      lctz1[i].onmouseover=function(){
          	
          	for(var i=0;i<ssxxlc.length;i++){
          	ssxxlc[this.index].style.display="block"
          }
          }



          lctz1[i].onmouseout=function(){
          	
          	for(var i=0;i<ssxxlc.length;i++){
          	ssxxlc[i].style.display="none"
          }
          }



}
// 返回顶部
lctz1[9].onclick=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
    var scrollTop=obj.scrollTop;
	animate(obj,{scrollTop:0})
}







      // 获取右侧楼层跳转命名开关

         var ssflag=true;
         var lctz=$(".lctz")[0]

// 滚轮滚到哪层，哪层灯自动亮
window.onscroll=function(){
    for(var i=0;i<ssxxlc.length;i++){
    	
    	
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var scrollTop=obj.scrollTop;
    if(scrollTop>=arr[i]){
          if(ssflag){ssflag=false;
    	 animate(lctz,{opacity:1})}
    for(var j=0;j<ssxxlc.length;j++){
                     
   ssxxlc[j].style.display="none"
   
     }
         
        ssxxlc[i].style.display="block"

             
          	}
     if(scrollTop<arr[0]){
                if(!ssflag){ssflag=true;
     	        animate(lctz,{opacity:0})}
          		for(var i=0;i<ssxxlc.length;i++){
          			ssxxlc[i].style.display="none"
                   
          		}
          	}
              
          	}


         
    


      


      


}








var mzzc3=$(".mzzc3")[0];
var jdv=$(".jdv")[0]
      var mzzc4=$(".mzzc4")[0];
      var jdv66=$(".jdv66")[0];
      console.log(jdv)
      mzzc4.onmouseover=function(){
      	// alert(1)
      	jdv66.style.zIndex=99
        jdv.style.zIndex=-1
        mzzc3.style.borderBottom="none"
         mzzc4.style.borderBottom="3px solid #e70050" 
      }
         
            mzzc3.onmouseover=function(){
        // alert(1)
        jdv.style.zIndex=99
        jdv66.style.zIndex=-1
        mzzc3.style.borderBottom="3px solid #e70050"
          mzzc4.style.borderBottom="none"
      }
                  mzzc3.onmouseout=function(){
        // alert(1)
        
        mzzc3.style.borderBottom="3px solid #e70050"
        mzzc4.style.borderBottom="none"  
      }
      mzzc4.onmouseout=function(){
        // alert(1)
        
        mzzc4.style.borderBottom="3px solid #e70050"
         mzzc3.style.borderBottom="none" 
      }
         
      


// 上部选项卡
var wxxlk=$(".wxxlk")[0];
var wxxlk6=$(".wxxlk6")[0];
var ytsy7=$(".ytsy7")[0];
var wxxlk1=$(".wxxlk")[1];

var ytsy71=$(".ytsy7")[1];
var ytsy81=$(".ytsy81")[0];

wxxlk.onmouseover=function(){
  ytsy7.style.display="block"
  wxxlk.style.background="#fff"
}
wxxlk.onmouseout=function(){
  ytsy7.style.display="none"
  wxxlk.style.background="#eee"
}
wxxlk6.onmouseover=function(){
  ytsy81.style.display="block"
  wxxlk6.style.background="#fff"

}
wxxlk1.onmouseover=function(){
  ytsy71.style.display="block"
  wxxlk1.style.background="#fff"
}
wxxlk1.onmouseout=function(){
  ytsy71.style.display="none"
  wxxlk1.style.background="#eee"
}
wxxlk6.onmouseout=function(){
  ytsy81.style.display="none"
  wxxlk6.style.background="#eee"
}


var zuoce99=$(".zuoce99");
var mp61=$(".mp61")[0];
var mp62=$(".mp62")[0];

for (var i = 0; i < zuoce99.length; i++) {
  zuoce99[i].onmouseover=function(){
    mp61.style.display="block"
    mp62.style.display="block"
  }
    zuoce99[i].onmouseout=function(){
    mp61.style.display="none"
    mp62.style.display="none"
  }
};













































})
	












