// JavaScript Document
function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){
var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
var openTip = oOpenTip || "";
var shutTip = oShutTip || "";
if(targetObj.style.display!="none"){
   if(shutAble) return;
   targetObj.style.display="none";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = shutTip; 
   }
} else {
   targetObj.style.display="block";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = openTip; 
   }
}
}

//    


$(function () { 
var content = ""; 
    $("#p1").html();
   $("#btn1").toggle(function () {
   $("#p1").slideDown("slow"); 
      }, function () { 
$("#p1").slideUp("slow"); 
});

    });
	$(function () { 
var content = ""; 
    $("#p2").html();
   $("#btn2").toggle(function () {
   $("#p2").slideDown("slow"); 
      }, function () { 
$("#p2").slideUp("slow"); 
});

    });
	$(function () { 
var content = ""; 
    $("#p3").html();
   $("#btn3").toggle(function () {
   $("#p3").slideDown("slow"); 
      }, function () { 
$("#p3").slideUp("slow"); 
});

    });
	$(function () { 
var content = ""; 
    $("#p4").html();
   $("#btn4").toggle(function () {
   $("#p4").slideDown("slow"); 
      }, function () { 
$("#p4").slideUp("slow"); 
});

    });
		$(function () { 
var content = ""; 
    $("#p5").html();
   $("#btn5").toggle(function () {
   $("#p5").slideDown("slow"); 
      }, function () { 
$("#p5").slideUp("slow"); 
});

    });
	
	//
	
	$(function () {
		$("#box1").html();
		$("#one").mouseover(function(){
			$("#box1").slideDown("slow");
			});
		$("#one").click(function (){
			$("#box1").slideUp("slow");
			});
	});
	$(function () {
		$("#box2").html();
		$("#two").mouseover(function(){
			$("#box2").slideDown("slow");
			});
		$("#two").click(function (){
			$("#box2").slideUp("slow");
			});
	});

$(function () {
		$("#box3").html();
		$("#three").mouseover(function(){
			$("#box3").slideDown("slow");
			});
		$("#three").click(function (){
			$("#box3").slideUp("slow");
			});
	});

$(function () {
		$("#box4").html();
		$("#four").mouseover(function(){
			$("#box4").slideDown("slow");
			});
		$("#four").click(function (){
			$("#box4").slideUp("slow");
			});
	});
$(function () {
		$("#box5").html();
		$("#five").mouseover(function(){
			$("#box5").slideDown("slow");
			});
		$("#five").click(function (){
			$("#box5").slideUp("slow");
			});
	});

//    显示时间

			window.onload = function(){
				
				var date = document.getElementById("date");
			setInterval(function (){
						var time = new Date();
						var m = time.getMonth()+1;
						var t = time.getFullYear()+"-"+m+"-"+time.getDate()+"<==>"+time.getHours()+"："+time.getMinutes()+":"+time.getSeconds()+"";
						date.innerHTML=t;
						
			},1000);
	};