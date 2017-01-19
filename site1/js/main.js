$(document).ready(function(){
	$(window).load(function(){	
		$('#bg-2-center').pan({fps: 30, speed: 1, dir: 'right'});
		
		$('section>ul>li').each(function(e){
			if($(this).find(".scrollbar").length ==1){
				$(this).tinyscrollbar({axis: 'y', sizethumb:"69", size:"289"});
			}
		})
		$('#airShipSmoke').sprite({fps: 24, no_of_frames: 48});
		
		magicBallAnim();
		function magicBallAnim(){
			$('#magicBall').sprite({fps: 24, no_of_frames: 47, play_frames: 47});
			setTimeout(magicBallAnim, 6000);
		}
		
		airship1();
		function airship1(){
			$('#airship-1, #airship-1-shadow').animate({left:-$('#airship-1').width()}, 50000, "linear", function(){
				$('#airship-1, #airship-1-shadow').css({left:$(document).width()})
				airship1();
			});
		}
		airship2();
		function airship2(){
			$('#airship-2').animate({left:$(document).width()}, 100000, "linear", function(){
				$('#airship-2').css({left:-$('#airship-2').width()})
				airship2();
			});
		}
		airship3();
		function airship3(){
			$('#airship-3').animate({left:-$('#airship-3').width()}, 120000, "linear", function(){
				$('#airship-3').css({left:$(document).width()})
				airship3();
			});
		}
		
		$("#portfolio ul>li>a").each(function(){
			$(this).prepend("<div class='imgOver'></div>");
		}).hover(function(){
			$(this).find("div").stop(true).fadeTo(500, 0.5)
		}, function(){
			$(this).find("div").stop(true).fadeTo(500, 0)
		}).fancybox({'speedIn'  : 300, 'speedOut'  : 300}).find("div").stop(true).fadeTo(0, 0)
		
		
  	 	var content=$("section"),
 	  		nav=$("footer> nav"),
			MSIE8 = ($.browser.msie) && ($.browser.version <= 8),
			splashPage = "#!/splash";
			
 	 	//menu  			
   	   	$("footer> nav > ul").superfish({
   	   		hoverClass: "sfHover",
   	     	delay:       100,
   	      	speed:       400,
   	       	autoArrows:  false,
   	        dropShadows: false,
   			onInit: function(){
   				$("footer> nav > ul > li > a").each(function(){
   					$(this).append("<div class='overButton'></div>");
   				});	
   	 		}
   	   });
   	  
   	  	nav.navs({
   	  		useHash:true,
   	  		defHash:splashPage,
   	  		hoverIn:function(li){
  				if (!li.hasClass('sfHover')) {
					if(!MSIE8){
						$(".overButton", li).stop(true).animate({opacity:1}, 500, "easeOutCubic").spState();
					}else{
						$(".overButton", li).css({display:"block"});
					}
  				}
   	 		},
   	  		hoverOut:function (li){
		 		if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
					
					if(!MSIE8){
						$(".overButton", li).animate({opacity:0}, 500, "easeOutCubic")	
					}else{
						$(".overButton", li).css({display:"none"});
					}
 				}
   	 		},
   	 		hover:true
   	  	}) 	
   	  	//content switch
   	  	content.tabs({
   	  		show:0,
   	  		defHash:splashPage,
   	  		actFu:function(_){
   	  			$("#magicBall>li").stop(true).animate({top:150}, 500, "easeInCubic");
	  			if(_.curr) {
	  				var currPage = _.curr;
	  				currPage.css({display:"block"})
  					$("#magicBall>li").eq(currPage.index()).stop(true).delay(400).animate({top:50}, 500, "easeOutBack");
  					currPage.find(".box").eq(1).css({top:-440}).stop(true).delay(250).animate({top:0}, 700, "easeOutBack");
  					currPage.find(".box").eq(0).css({top:440}).stop(true).delay(250).animate({top:0}, 700, "easeOutBack");
		   		}
	  			if(_.prev) {
	  				var prevPage=_.prev;
  					prevPage.find(".box").eq(1).stop(true).animate({top:340}, 400, "easeInCubic");
  					prevPage.find(".box").eq(0).stop(true).animate({top:-340}, 400, "easeInCubic", function(){prevPage.css({display:"none"})});
		   		}
		   		if(splashPage==window.location.hash){
		   			$("h1>a").stop(true).delay(200).animate({marginLeft:-401}, 500, "easeOutCubic");
		   			$("h2>a").stop(true).animate({marginLeft:-3000}, 500, "easeInCubic");
		   			$("section>ul").stop(true).animate({marginLeft:3000}, 500, "easeInCubic");
		   			
		   		}else{
	   				$("h1>a").stop(true).animate({marginLeft:-3000}, 500, "easeInCubic");
		   			$("h2>a").stop(true).delay(200).animate({marginLeft:-288}, 500, "easeOutCubic");
		   			$("section>ul").stop(true).delay(200).animate({marginLeft:-516}, 500, "easeOutCubic");
		   		}
   	  		},
   	  		preFu:function(_){
   				_.li.find(".box").css({top:340});
   				_.li.css({display:"none"});
   	  		}
   	  	});
   	  	nav.navs(function(n){
    			content.tabs(n);
   	  	});
   	  	
	 	setTimeout(hideSpinner, 0)
		function hideSpinner (){
			$("#spinner").animate({opacity:0}, 800, "easeInOutCubic", function(){
				$("#spinner").remove();
				$('.overButton').sprite({fps:30, no_of_frames:72});
			});
		}	
   	});
})