jQuery(function($)
{
	var $body = $("body");
	var autoSetHashEnabled = true;

	var selectPageInMenu = function(page)
	{
		$("#main-menu a").removeClass("active");
		$("#main-menu a[href='#"+page+"']").addClass("active");
	}
	$(document).on('scroll',_.throttle(function(e){

		if(autoSetHashEnabled)
		{
			var offset = $(window).height()/2;
			$('section.page.depth-0').each(function(){
				if ($(this).offset().top < window.pageYOffset + offset && $(this).offset().top + $(this).height() > window.pageYOffset + offset) 
				{
					var id = $(this).attr('id');
					if(id)
					{
						page = id.substring(5);
						selectPageInMenu(page);
						window.location.hash = page;
					}
					else
					{
						window.location.hash = "";
						selectPageInMenu("");
					}
				}

			});
		}
	},300));
	var adjustHeight = function(index, element)
	{

		var height = $(window).height();
		if (index == 0)
			height -= $(element).offset().top ; // 20 tbd
		$(element).css("min-height", height);
	}
	var adjustPageHeights = function()
	{

		$(".page.depth-0").each(adjustHeight);
	}
	var scrollToPage = function(page)
	{
		
		if(page && page.length > 0)
		{
			autoSetHashEnabled = false;

			var $target = $("#page_"+page);
			var padding = parseInt($target.css("padding-top"),10);
			var offset = 150 - padding;
			if($target.length > 0)
			{

				jQuery.scrollTo($target, "slow", {offset: -offset, onAfter:function()
					{
						_.delay(function()
						{
							autoSetHashEnabled = true;
						},600);

					}});
			}
		}
	}
	$("#main-menu li a").on("click", function()
	{
		//$body.removeClass("menu-visible");
		var target = $(this).attr("href").substring(1);
		scrollToPage(target)
	});





	

	$(".page.depth-2").on("click", ".pageTitle",function(event)
	{
		var $page = $(event.delegateTarget);
		var $content = $page.find(".content");

		var height = $content.find(".wrapper").outerHeight()+10;
		
		// little trick for max-height
		if($page.hasClass("open"))
		{
			$page.removeClass("open");
			$content.css("max-height",0);
		}
		else
		{

			$page.addClass("open");
			$content.css("height", "auto").css("max-height",height);
		}
		
		return false;
	});
	$(window).on("resize", _.debounce(adjustPageHeights,300));

	adjustPageHeights();
	scrollToPage(window.location.hash.substring(1))
	

	$(window).on("keypress", function(event)
	{
		if(event.which == 105)
		{
			$body.toggleClass("inverted");
		}
	});

	/** toggle / gallery fix **/


	$(".omsc-toggle-title").on("click", function(event){

		var $this = $(this);
		var $parent = $this.parent();

		var slider = $parent.find(".royalSlider").data('royalSlider');
		_.defer(function()
		{
slider.updateSliderSize(); 
		});

});



	/** fading background **/

	var addFadingBodyBackground = function()
	{
		var $container = $('<div class="fadingBackground" />');
		var backgrounds = _.shuffle(["wp-content/uploads/backgrounds/1.jpg","wp-content/uploads/backgrounds/2.jpg","wp-content/uploads/backgrounds/3.jpg", "wp-content/uploads/backgrounds/4.jpg"]);
		var index = 0;
		var $inner1 = $('<div class="inner"/>');
		var $inner2 = $('<div class="inner"/>');
		$container.append($inner1).append($inner2);
		$body.append($container);
		var fade = function()
		{

			var $active = $container.find(".inner.active");
			var $inactive = $container.find(".inner:not(.active)");
			if($active.length == 0)
			{
			// this will add the active class later, creating an initial fading effect
			$active = $inner1;
			$inactive = $inner2;

		}

		background = backgrounds[index];
		$inactive.css("background-image", "url("+background+")");
		
		index = (index+1)%backgrounds.length;

		$active.removeClass("active");

		$inactive.addClass("active");


	}

	window.setInterval(fade, 8000);
	_.defer(fade);

	

}


addFadingBodyBackground();


});