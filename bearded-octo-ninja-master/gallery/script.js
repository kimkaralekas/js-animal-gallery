
$("#monkey").click(function(){
	$("this").toggle();
	$(".monkey").toggle();
});

$("#dog").on("click", function(){
	$(this).toggleClass("active");
	$(".dog").toggle();
});

$("#cat").on("click", function(){
	$(this).toggleClass("active");
	$(".cat").toggle();
});

