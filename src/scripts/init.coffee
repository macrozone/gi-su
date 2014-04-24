jQuery ($) ->

	$(window).on "keypress", (event) ->
		$("body").toggleClass "inverted"  if event.which is 105
	

	###
	toggle / gallery fix *
	###
	$(".omsc-toggle-title").on "click", (event) ->
		$this = $(this)
		$parent = $this.parent()
		slider = $parent.find(".royalSlider").data("royalSlider")
		_.defer ->
			slider.updateSliderSize()
 
