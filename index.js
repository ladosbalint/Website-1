$(document).ready(function(){
	var about = $("article.about");
	var aboutOffset = about.offset().top / 2;
	
	$(document).on("scroll", function(){
		if ($(document).scrollTop() > aboutOffset && about.hasClass("hideBox")) {
			about.removeClass("hideBox");
			$("#arrowDown").remove();
		}
	});
});