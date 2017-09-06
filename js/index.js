//大轮播图
 
var mySwiper = new Swiper ('.bigPic', {
    direction: 'horizontal',
    loop: true,
    effect:'fade',
    autoplay:2000,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
     pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    fade: {
          crossFade: false,
    },
    onSlideChangeEnd: function(swiper){
//  console.log(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
       let num = swiper.activeIndex;
      $(".a img").css({"transform":"scale(1.1)"})
      $(".a img").eq(1).css({"transform":"scale(1.051)"})
      $(".a img").eq(num).css({"transform":"scale(1.051)"})
      
    }
}) ;
//第一个小轮播图
 var mySwiper = new Swiper ('.littlePic1', {
direction: 'horizontal',
loop: true,
effect:'fade',
autoplay:2000,
autoplayDisableOnInteraction : false,
// 如果需要分页器
 pagination: '.swiper-pagination',
// 如果需要前进后退按钮
nextButton: '.swiper-button-next',
prevButton: '.swiper-button-prev',
fade: {
      crossFade: false,
},
onSlideChangeEnd: function(swiper){
//console.log(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
   let num = swiper.activeIndex;
  $(".b img").css({"transform":"scale(1.1)"})
  $(".b img").eq(1).css({"transform":"scale(1.051)"})
  $(".b img").eq(num).css({"transform":"scale(1.051)"})
  
}
 }) 
 
 //第二个小轮播图
 var mySwiper = new Swiper ('.littlePic2', {
direction: 'horizontal',
loop: true,
effect:'fade',
autoplay:2000,
autoplayDisableOnInteraction : false,
// 如果需要分页器
 pagination: '.swiper-pagination',
// 如果需要前进后退按钮
nextButton: '.swiper-button-next',
prevButton: '.swiper-button-prev',
fade: {
      crossFade: false,
},
onSlideChangeEnd: function(swiper){
//console.log(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
   let num = swiper.activeIndex;
  $(".c img").css({"transform":"scale(1.1)"})
  $(".c img").eq(1).css({"transform":"scale(1.051)"})
  $(".c img").eq(num).css({"transform":"scale(1.051)"})
  
}
 }) 
 //第三个小轮播图
 var mySwiper = new Swiper ('.littlePic3', {
direction: 'horizontal',
loop: true,
effect:'fade',
autoplay:2000,
autoplayDisableOnInteraction : false,
// 如果需要分页器
 pagination: '.swiper-pagination',
// 如果需要前进后退按钮
nextButton: '.swiper-button-next',
prevButton: '.swiper-button-prev',
fade: {
      crossFade: false,
},
onSlideChangeEnd: function(swiper){
//console.log(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
   let num = swiper.activeIndex;
  $(".d img").css({"transform":"scale(1.1)"})
  $(".d img").eq(1).css({"transform":"scale(1.051)"})
  $(".d img").eq(num).css({"transform":"scale(1.051)"})
  
}
 }) 
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

