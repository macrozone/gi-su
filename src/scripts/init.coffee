jQuery ($) ->

	$(window).on "keypress", (event) ->
		
		$("body").toggleClass "inverted"  if event.which == 161
	

	$(".logo, #menu-button").on "click", ->
		$("body").toggleClass "menu-visible"
	###
	toggle / gallery fix *
	###
	$(".omsc-toggle-title").on "click", (event) ->
		$this = $(this)
		$parent = $this.parent()
		slider = $parent.find(".royalSlider").data("royalSlider")
		if slider? then _.defer ->
			slider.updateSliderSize()
 