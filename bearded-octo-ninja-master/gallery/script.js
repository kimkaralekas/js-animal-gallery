// Add your code here
$("#.filter-button").on("click", function(){
	$(this).toggleClass("active");
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

 