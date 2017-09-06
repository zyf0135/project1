
//验证电话号码	
$("#phone").blur(function(){
	if(!checkAll("phone",this.value)){
		$(".judge").css("display","block");
		$("#regist")[0].disabled = "disabled";
		return false;
	}else{
		$.ajax({
			type:"get",
			url:"",
			async:true
			
		})
	$(".judge").css("display","block");
	$(".judge").html();
	$("#regist").removeAttr("disabled");
  }

});
//验证密码
$("#pas").blur(function() {
			if(this.value.length < 6 || this.value.length > 20) {
				$(".judge1").css({
					display: "block"
				});
				$("#regist")[0].disabled = "disabled";
			} else {
				$(".judge1").css({
					display: "none"
				});
				$("#regist").removeAttr("disabled");
			}
})
//再次验证密码
$("#pas1").blur(function() {
			if(this.value != $("#pas").val()) {
				$(".judge2").css({
					display: "block"
				});
				$("#regist")[0].disabled = "disabled";
			} else {
				$(".judge2").css({
					display: "none"
				});
				$("#regist").removeAttr("disabled");
			}
})
//产生验证码
$(".reg").focus(function() {
			replace;
})

$(".reg").blur(function() {
	let str1 = this.value.toUpperCase();
			let str2 = $("#loadcode").html().toUpperCase();
			if(str1 != str2) {
				$("form span").eq(2).css({
					display: "block"
				});
				$("#loadbtn")[0].disabled = "disabled";
			} else {
				$("form span").eq(2).css({
					display: "none"
				});
				$("#loadbtn").removeAttr("disabled");
	}
	
			
})
	
	
	
	
	
function checkAll(type, value) {
		switch(type) {
			case "phone":
				if((/^1[34578]\d{9}$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			case "email":
				if((/^\w+@\w+(\.\w+)+$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			case "postcode":
				if((/^[1-9]\d{5}$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			case "chinese":
				break;
			case "img":
				if((/^\w+\.(gif|png|jpg)$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			case "username":
				if((/^[a-zA-Z_]\w{5,14}$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			default:
				break;
		}
	}　
function replace(){
 var code="";
 var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 for(i=0;i<4;i++){
    
   var index=parseInt(Math.random()*36);
   code=code+arr[index];
}
 $("#zhuce_code").html(code);
}
