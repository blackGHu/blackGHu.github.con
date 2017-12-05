// JavaScript Document
//    
					function nolight(){
						document.getElementById("light").src="img/nolight.gif";
					}
					function light(){
						document.getElementById("light").src="img/light.gif";
					}


//   轮播
          var index = 0;
            function change() {
                //得到所 有图片长度
                var imgs = document.querySelectorAll(".imgs").length;
                var next = index + 1;
                if (index == imgs - 2) {
                    //imgs-1为长度（从0开始）；imgs-2为index（next+1）
                    next = 0;
                }
                //得到所有图片元素
                var img = document.getElementById("imgbox").children;
                img[index].style.opacity = 0;
                img[next].style.opacity = 1;
                index = next;
                console.log(index);
				
            }
            window.setInterval("change()", 2000);
			
			
//     显示时间
			window.onload = function(){
				
				var date = document.getElementById("date");
			setInterval(function (){
						var time = new Date();
						var m = time.getMonth()+1;
						var t = time.getFullYear()+"-"+m+"-"+time.getDate()+"<==>"+time.getHours()+"："+time.getMinutes()+":"+time.getSeconds()+"";
						date.innerHTML=t;
						
			},1000);
	};
	
	

/*
		 var indexx = 0;
            function change2() {
                //得到所 有图片长度
                var imgss = document.querySelectorAll(".imgss").length;
                var nextt = indexx + 1;
                if (indexx == imgss - 2) {
                    //imgs-1为长度（从0开始）；imgs-2为index（next+1）
                    nextt = 0;
                }
                //得到所有图片元素
                var img2 = document.getElementById("imgboxx").children;
                img2[indexx].style.opacity = 0;
                img2[nextt].style.opacity = 1;
                indexx = nextt;
                console.log(indexx);
				
            }
            window.setInterval("change2()", 2000);
			*/