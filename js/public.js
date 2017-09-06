//header
//搜索框
$(".search").focusin(function(){
	
	this.placeholder="";
});
//$(".search").focusout(function()	
//	.placeholder="搜索 品牌/系列/型号";
//});
//小广告
$(".error").click(function(){
	
	$("#wrap").hide();
})
//footer
//二维码选项卡
   $("#ls2").mouseover(function(){
	$(".QuickMark1").css({"display":"block"});
	$(".QuickMark").css({"display":"none"});
	$("#ls2").css({"background":"#ccc"});
	$("#ls1").css({"background":"#fff"});
	
})
$("#ls1").mouseover(function(){
	$(".QuickMark1").css({"display":"none"});
	$(".QuickMark").css({"display":"block"});
	$("#ls1").css({"background":"#ccc"});
	$("#ls2").css({"background":"#fff"});
})
 $("#ls3").mouseover(function(){
	$(".QuickMark3").css({"display":"none"});
	$(".QuickMark2").css({"display":"block"});
	$("#ls4").css({"background":"#ccc"});
	$("#ls3").css({"background":"#fff"});
	
})
 $("#ls4").mouseover(function(){
	$(".QuickMark3").css({"display":"block"});
	$(".QuickMark2").css({"display":"none"});
	$("#ls3").css({"background":"#ccc"});
	$("#ls4").css({"background":"#fff"});
	
})

 $(".watch").mouseover(function(){
	$(".ewm").css({"display":"block"});
	$(".watch").css({"background":"#fff"});
	
})
  $(".watch").mouseout(function(){
	$(".ewm").css({"display":"none"});
	$(".watch").css({"background":"#333"});
	
})
