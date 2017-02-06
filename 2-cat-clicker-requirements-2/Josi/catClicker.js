$(document).ready(function() {
	var countCat1 = 0;
	var countCat2 = 0;
	var cat1 = $(".cat-1");
	var cat2 = $(".cat-2");
	$(cat1).click(function(event) {
		$(this).find("strong")[0].textContent = countCat1 +=1;
	});
	$(cat2).click(function(event) {
		$(this).find("strong")[0].textContent = countCat2 +=1;
	});
	//cat's name
	$(".cat-1 img").before("<p>Mi</p>");
	$(".cat-2 img").before("<p>Au</p>");
});