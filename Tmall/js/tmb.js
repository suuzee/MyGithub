/* 
* @Author: anchen
* @Date:   2014-11-26 09:21:39
* @Last Modified by:   anchen
* @Last Modified time: 2014-11-26 13:06:42
*/

var aLi = document.getElementById('tcc3t_tab').getElementsByTagName('li');
var aDiv = document.getElementById('tcc3t_content').getElementsByTagName('div');
for(var i = 0; i < aLi.length; i ++){
    aLi[i].index = i;
    aLi[i].onmouseover = function(){
        for(var i = 0; i < aLi.length; i ++){
            aLi[i].className = "";
            aDiv[i].className = "";
        }
        this.className = 'active1';
        aDiv[this.index].className = 'active1';
    }
}