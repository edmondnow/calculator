
var exp = '';
var res = '';

$("#clear").click(function (){
	$(".result-text").text('0');
	$(".type-text").text('');
	exp = '';
	res = '';
	this.blur();
});

$("#equal").click(function() {
		this.blur()
})



$(".btn").css('outline','none');

$("#clear, #equal").click(function(){
	this.focus();
	this.blur();
	}
)
$(".type").click(function(){
	this.blur();
	exp += $(this).text();
	res += $(this).text();
	$(".btn").css('outline','none');
	$(".type-text").text(exp);
	if(res.match(/\/|\*|\+|\-/g)!=null){
		res = $(this).text();
		$(".result-text").text(res);
		res = '';
	} else {
		$(".result-text").text(res);
	}

	if(res.length>13||exp.length>25){
		$(".result-text").text('Limit Reached');
		$('.type-text').text('');
		res = '';
		exp = '';
	}

});


$("#equal").click( function() {
	if(exp.match(/\/{2}|\+{2}|\-{2}|\*{2}|\/\*|\*\//g)){
		$(".result-text").text('Syntax Error');
		$(".type-text").text('');
		res = '';
		exp = '';

	}

	try {
		var result = eval(exp);
		exp = result.toString();
		if (result.toString().length>9){
			result = parseInt(result).toExponential()
			if(result.toString().length>13){ 
				$(".result-text").text('Limit Reached')
				$('.type-text').text('');
		} else {
				$(".result-text").text(result);
				$(".type-text").text(result);
			}
		 } else{
		 	$(".result-text").text(result);
		 	$(".type-text").text(result);
		 }
	}
	catch(err){
		console.log();
		if($(".result-text").text()=="0"){
			$(".result-text").text('0');
		} else {
		$(".result-text").text('Syntax Error');
		$(".type-text").text('');
	}
	}
})


$(".btn-none").click(function (e) {

  $(".ripple").remove();

  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();

  $(this).prepend("<span class='ripple'></span>");



  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }

  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;

  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});


$('html').keydown(function(e){
 	switch(e.keyCode){
 		case 8: //backspace
	 		exp = exp.substr(0, exp.length-1);
	 		res = res.substr(0, res.length-1);
	 		$('.type-text').text(exp);
	 		if(res.length>0){
	 			$('.result-text').text(res);
	 		} else {
	 			$('.result-text').text('0');
	 		}
	 		break;
 		case 13: //enter
 			$("#equal").click().focus();
 			setTimeout(function() {$("#equal").blur()}
 				, 200);
 			break;
 		case 96: //num 0 
 		case 48: //0
 			$("button[val='0']").click().focus();
 			setTimeout(function() {$("button[val='0']").blur()}
 				, 200);
 			break;
 		case 49: //1
 		case 97: //num1
 			 $("button[val='1']").click().focus();
 			setTimeout(function() {$("button[val='1']").blur()}
 				, 200);
 			break;
 		case 50: //2
  		case 98://num 2
  			 $("button[val='2']").click().focus();
 			setTimeout(function() {$("button[val='2']").blur()}
 				, 200);
 			break;
 		case 51: //3
 		case 99://num 3
   			 $("button[val='3']").click().focus();
 			setTimeout(function() {$("button[val='3']").blur()}
 				, 200);
 			break;
 		case 52: //4
 		case 100://num 4
   			 $("button[val='4']").click().focus();
 			setTimeout(function() {$("button[val='4']").blur()}
 				, 200);
 			break;
 		case 53: //5
 		case 101: //num 5
   			 $("button[val='5']").click().focus();
 			setTimeout(function() {$("button[val='5']").blur()}
 				, 200);
 			break;
 		case 54://6
 		case 102: //num 6
   			 $("button[val='6']").click().focus();
 			setTimeout(function() {$("button[val='6']").blur()}
 				, 200);
 			break;
 		case 55://7
 		case 103://num 7
   			 $("button[val='7']").click().focus();
 			setTimeout(function() {$("button[val='7']").blur()}
 				, 200);
 			break;
 		case 56: //8
 		case 104: //num 8
   			 $("button[val='8']").click().focus();
 			setTimeout(function() {$("button[val='8']").blur()}
 				, 200);
 			break;
 		case 57://9
 		case 105://num 9 
   			 $("button[val='9']").click().focus();
 			setTimeout(function() {$("button[val='9']").blur()}
 				, 200);
 			break;
 		case 106: //multiply
 		   	$("button[val='*']").click().focus();
 			setTimeout(function() {$("button[val='*']").blur()}
 				, 200);
 			break;
 		case 111: //divide
 		   	$("button[val='/']").click().focus();
 			setTimeout(function() {$("button[val='/']").blur()}
 				, 200);
 			break;
 		case 107: // add
  		   	$("button[val='+']").click().focus();
 			setTimeout(function(){$("button[val='+']").blur()}
 				, 200);
 			break;
 		case 109://subtract
  		   	$("button[val='-']").click().focus();
 			setTimeout(function() {$("button[val='-']").blur()}
 				, 200);
 			break;
 		case 110: //decimal point
  		   	$("button[val='.']").click().focus();
 			setTimeout(function() {$("button[val='.']").blur()}
 				, 200);
 			break;
 		case 46: //'delete'
   		   	$("#clear").click().focus();
 			setTimeout(function() {$("#clear").blur()}
 				, 200);
 				break;
 	};

})

