var img=new Image();  
    img.onload=function(){alert("img is loaded")};  
    img.onerror=function(){alert("error!")};  
    img.src="../img/mobile/m_1t.jpg";  
    function show(){alert("body is loaded");};  
    window.onload=show; 