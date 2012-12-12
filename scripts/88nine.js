jQuery(document).ready(function($) {

	// John, this will add an ellipsis to the end of a paragraph or line if text overflows
	$(".addEllipsis").ellipsis();
	//test

	// $(".expandButton").click(function() {
	// 	$(this).slideUp();
	//   $(".expandMegaAd").css({ height: 440px; })
	// });

	  // $(".expandButton").click(function(){
	  //   $(this).fadeOut();
	  //   $(".expandMegaAd").css('height','440px')
	  // });

	  $(".expandButton").click(function(){
		    $(this).fadeOut();
		    $(".closeButton").fadeIn();

		    // $(".expandMegaAd").animate({height: "440px"}, { duration: "1000" });
		    $(".expandMegaAd").css({height: "440px"});
	  });

	  $(".closeButton").click(function(){
		    $(this).fadeOut();
		    $(".expandButton").fadeIn();

		    // $(".expandMegaAd").animate({height: "440px"}, { duration: "1000" });
		    $(".expandMegaAd").css({height: "120px"});
	  });

	// $(".programListing:last-child").css({ border-bottom: none; });
});
