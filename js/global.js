$(document).ready(function(){

var col = $("#totalcol").val();
var row = $("#totalrow").val();
var addHeight = 5;
var addWidth = 5;
var zIndex = 1;
var array = new Array();

var color = ["aquamarine","red","green","violet","yellow","orange","wheat","mediumseagreen","deeppink","yellowgreen","aquamarine","red","green","violet","yellow","orange","wheat","mediumseagreen","deeppink","yellowgreen"];
$(document).ready(function(){
	$('#body').ready(function(){
		var x = 1;
		var name = new Array();
		timeOut(1);
	});
});
function timeOut(x){
	if(x <= col){
		setTimeout(function(){
			var j = x;
			timeOut2(1,j,x,row);
		},100);
	}
	
}
function timeOut2(i,j,x,row){
	if(i<=row){
		setTimeout(function(){
		var a=0;
		$('#line-' + i + "-" + j).css({
			'border-left' : '5px solid '+color[x-1],
			"width" : $('#line-' + i + "-" + j).parent().width() + addWidth,
			"height" : $('#line-' + i + "-" + j).parent().height() + addHeight,
			"margin-left": "-5px"
		});
		$('#line-' + i + "-" + j).html('<div class="overlay"></div>');
		if($('#way-'+i+"-"+(j-1)).attr('style')){
			j--;
			$('#line-' + i + "-" + j).css({
				'border-bottom' : '5px solid '+color[x-1],
				'width' : $('#line-' + i + "-" + j).parent().width() + addWidth,
				"height" : $('#line-' + i + "-" + j).parent().height() + addHeight,
				"z-index" : zIndex
			});
			$('#line-' + i + "-" + j).attr("position", "left");
			
			// $('#line-' + i + "-" + j).find(".overlay").css({
				// "position" : "absolute",
				// "margin-left" : "-5px",
				// 'width' : 5,
				// "height" : 5,
				// "background" : color[x-1],
				// "z-index" : zIndex
			// });
			//$('#line-' + i + "-" + j).parents("tr").prev("tr").find(".colorDiv").remove();
			//alert($('#line-' + i + "-" + j).parents("tr").prev("tr").find(".colorDiv").css("border-bottom-color") + " = " + $('#line-' + i + "-" + j).css("border-left-color"))
			//$('#line-' + i + "-" + j).find(".overlay:first").css({"background" : color[x-1]});
			
		}
		else if($('#way-' + i + "-" + j).attr('style')){
			$('#line-' + i + "-" + j).css({
				'border-bottom' : '5px solid '+color[x-1],
				"height" : $('#line-' + i + "-" + j).parent().height() + addHeight,
				"z-index" : zIndex
			});
			$('#line-' + i + "-" + j).attr("position", "right");
			
			j++;

		}
		zIndex = zIndex + 2;
		 timeOut2(i+1,j,x,row);
		}, 100);
	}
	else timeOut(x+1);
}

});