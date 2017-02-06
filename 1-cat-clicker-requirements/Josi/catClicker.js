$(document).ready(function() {
	var count = 0;
	var countElement = $(".count strong")[0];
	$(".cat img").click(function(event) {
		countElement.textContent = count +=1;
	});
});