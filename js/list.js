//左边轮播图
window.onload = function() {       
  var mySwiper = new Swiper ('.little_pic', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    autoplay:2000
    
  });       
}
// 表友晒单
var mySwiper = new Swiper ('.watchmate', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    autoplay:2000
    
  });   
//列表收起
$(".options").click(function(){
	   
	  $(".add").css({"display":"block"});
	  $(".options1").css({"display":"block"});
	  $(".options").css({"display":"none"});
	
})
$(".options1").click(function(){
	   
	  $(".add").css({"display":"none"});
	  $(".options1").css({"display":"none"});
	  $(".options").css({"display":"block"});
	
})
//列表
for(var i=0;i<48;i++){
var liobj=$("<li></li>");
$(".goods_list").append(liobj);
}
$(".goods_list li").append($("<dl><dd><a><img/></a></dd><dt></dt></dl>"));
$(".goods_list li dd a img").attr("src","images/list/813_73215.jpg")
$(".goods_list li dt").append($("<span class='lover'></span>"));
$(".goods_list li dt .lover").html("巴黎恋人");
$(".goods_list li dt").append($("<span class='quartz'></span>"));
$(".goods_list li dt .quartz").append($("<a href='#'>石英</a><a href='#'>不锈钢</a><a href='#'>不透底</a><a href='#'>日期显示</a><a href='#'>银白</a>"));
$(".goods_list li dt .quartz").css("display","block")
$(".goods_list li dt").append($("<div class='Perles'></div>"));
$(".goods_list li dt .Perles").append($("<a href='#'>赫柏林(Michel Herbelin) Perles 珍珠系列16873/B08 女士石英表</a>"));
$(".goods_list li dt").append($("<div class='count'></div>"));
$(".goods_list li dt .count").append($("<span class='sales'>销量4718</span><span class='rmb'>￥3600</span><span class='discount'>[6.5折]</span>"));
$(".goods_list li dt").append($("<div class='ask'></div>"));
$(".goods_list li dt .ask").append($("<a href='#' class='lowest'>询最低价</a><a href='#' class='compare'>对比</a>"));
$(".goods_list li dt .lowest").append($("<em></em>"));
$(".goods_list li dt .compare").append($("<input type='checkbox'/>"));
$(".goods_list li").mouseenter(function(){
	
	$(this).find(".quartz").css("display","block");
	$(this).find(".lover").css("display","none");
	$(this).css("border","1px solid #b32424");
	$(this).find(".ask").css("display","block");
	
	
})
$(".goods_list li").mouseleave(function(){
	
	$(this).find(".quartz").css("display","none");
	$(this).find(".lover").css("display","block");
	$(this).css("border","1px solid transparent");
	$(this).find(".ask").css("display","none");
})


$(".armWatch").mouseenter(function(){
	
	  $(".menu_two").slideDown(3000);
})
$(".armWatch").mouseleave(function(){
	
	  $(".menu_two").slideUp(3000);
})