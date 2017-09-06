// 二级菜单
$(".armWatch").mouseenter(function(){
	
	  $(".menu_two").slideDown(3000);
})
$(".armWatch").mouseleave(function(){
	
	  $(".menu_two").slideUp(3000);
})
// 放大镜
var arr=["images/detail/pic1.jpg","images/detail/pic5.jpg","images/detail/pic4.jpg","images/detail/pic3.jpg","images/detail/pic2.jpg"];
$(".ul-pic li").click(function(){
 var num=$(this).index();
 $("#box").append($("<img/>"));
$("#box img").attr("src",arr[num]);
$("#box").bigMirror({boxDom:$("#box")[0],bigImg:arr[num]});
})
// $(".change").click(function(){
// $(".buy_group").css({"display":"none"});
// $(".buy_group1").css({"display":"block"});
//})
//---------------------选项卡-------------
$(".history").click(function(){
	$(".artical2").css({"display":"block"});
	$(".artical1").css({"display":"none"});
	$(".artical3").css({"display":"none"});
	$(".artical4").css({"display":"none"});
	$(".history").css({"border-top":"2px solid #b01330"})
	$(".commodity").css({"border-top":"0"})
	$(".assess").css({"border-top":"0"})
	$(".upkeep").css({"border-top":"0"})
	
})
$(".upkeep").click(function(){
	$(".artical2").css({"display":"none"});
	$(".artical1").css({"display":"none"});
	$(".artical3").css({"display":"block"});
	$(".artical4").css({"display":"none"});
	$(".upkeep").css({"border-top":"2px solid #b01330"})
	$(".commodity").css({"border-top":"0"})
	$(".history").css({"border-top":"0"})
	$(".assess").css({"border-top":"0"})
	
})
$(".assess").click(function(){
	$(".artical2").css({"display":"none"});
	$(".artical1").css({"display":"none"});
	$(".artical3").css({"display":"none"});
	$(".artical4").css({"display":"block"});
	$(".assess").css({"border-top":"2px solid #b01330"})
	$(".commodity").css({"border-top":"0"})
	$(".upkeep").css({"border-top":"0"})
	$(".history").css({"border-top":"0"})
})	
$(".commodity").click(function(){
	$(".artical2").css({"display":"none"});
	$(".artical1").css({"display":"block"});
	$(".artical3").css({"display":"none"});
	$(".artical4").css({"display":"none"});
	$(".upkeep").css({"border-top":"0"})
	$(".history").css({"border-top":"0"})
	$(".assess").css({"border-top":"0"})
	$(".commodity").css({"border-top":"2px solid #b01330"});
	
})
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