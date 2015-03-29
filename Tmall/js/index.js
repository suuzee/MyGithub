/*
    轮播图
 */

var oBImg = document.getElementById('b_img');
var aLi = document.getElementById('b_tab').getElementsByTagName('li');
var aImg = document.getElementById('b_content').getElementsByTagName('img');
var index = 0;
for(var i=0;i<aLi.length;i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className = '';
                doMove(aImg[i],{opacity:0,top:-10,left:-10,width:830,height:500});
                aLi[i].style.zIndex = 1;
            }
            aLi[this.index].className = 'active';
            aImg[this.index].style.zIndex = 2;        
            doMove(aImg[this.index],{opacity:100,top:0,left:0,width:810,height:480});
            index = this.index;
        };
    }
    oBImg.onmouseover = function(){
        clearInterval(timert);
    };
    oBImg.onmouseout = function(){
        timert = setInterval(toChanges,2400);
    };
    
    timert = setInterval(toChanges,2400);
    function toChanges(){
        if(index == aLi.length-1){
            index = 0;
        }
        else{
            index++;
        }
        
        for(var i=0;i<aLi.length;i++){
            aLi[i].className = '';
            doMove(aImg[i],{opacity:0,top:-10,left:-10,width:830,height:500});
            aLi[i].style.zIndex = 1;
            if(i == 0){
                oBanner.style.backgroundColor = '#018ed5';
            } else if(index == 1){
                oBanner.style.backgroundColor = '#e8e8e8';
            } else if(index == 2){
                oBanner.style.backgroundColor = '#fe3030';
            } else if(index == 3){
                oBanner.style.backgroundColor = '#e8e8e8';
            }
        }
        // oBanner.style.backgroundColor = '';
        aLi[this.index].className = 'active';
        aImg[this.index].style.zIndex = 2;       
        doMove(aImg[this.index],{opacity:100,top:0,left:0,width:810,height:480});
    }
    var oBanner = document.getElementById('banner');
    // function toChangesBgColor(){
    //     var index = 0;
    //     for(var i = 0; i < aLi.length; i ++){
    //         index = i;
    //     }
    //     if(index == 0){
    //         oBanner.style.backgroundColor = '#018ed5';
    //     } else if(index == 1){
    //         oBanner.style.backgroundColor = '#e8e8e8';
    //     } else if(index == 2){
    //         oBanner.style.backgroundColor = '#fe3030';
    //     } else if(index == 3){
    //         oBanner.style.backgroundColor = '#e8e8e8';
    //     }
    // }


window.onscroll = function(){ 
    var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;  
    var oFixedTop = document.getElementById( "fixed_top" ); 
    if( iScrollTop >= 300 ) { 
        oFixedTop.style.display = "block"; 
    } else { 
        oFixedTop.style.display = "none"; 
    } 
}; 


//二级侧拉菜单

var aBLi = document.getElementById('b_nav').getElementsByTagName('li');
for(var i = 0; i < aBLi.length; i ++){
    aBLi[i].onmouseover = function(){
        last(this).className = last(this).className.length > 0 ? (last(this).className + ' active2') : 'active2';
    };
    aBLi[i].onmouseout = function(){
        if(last(this).className == 'active2'){
            last(this).className = '';
        } else{
            last(this).className = 'b_navhidden';
        }
    };
}
