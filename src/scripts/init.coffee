jQuery ($) ->

	

	$(document).on "click", ".logo, #menu-button", ->
		$("body").toggleClass "menu-visible"
	###
	toggle / gallery fix *
	deprecated?
	###
	$(".omsc-toggle-title").on "click", (event) ->
		$this = $(this)
		$parent = $this.parent()
		slider = $parent.find(".royalSlider").data("royalSlider")
		if slider? then _.defer ->
			slider.updateSliderSize()




 
	