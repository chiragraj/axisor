$(window).on("scroll", function () {
	if ($(window).scrollTop() > 300) {
		$(".navbar_logo").addClass("active");
	} else {
		$(".navbar_logo").removeClass("active");
	}
});