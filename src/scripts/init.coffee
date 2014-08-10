jQuery ($) ->

	$(window).on "keypress", (event) ->
		
		$("body").toggleClass "inverted"  if event.which == 161
	

	$(".logo, #menu-button").on "click", ->
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




 
	$(".products").on "click", "li", (event) ->
		startSlideId = $(this).index()
		$products =  $(event.delegateTarget).clone()
		$products.find "li"
		.removeClass()
		.find "img"
		.addClass "rsImg"
		$("#products-overlay").remove()
		$oldDetails = $products.find ".details"
		console.log $oldDetails;
		$overlay = $ '<div id="products-overlay"></div>';
		$content = $ '<div class="content-wrapper"></div>';
		$products.appendTo $content;
		$content.appendTo $overlay
		$overlay.prependTo $("body")
		$slider = $overlay.find("ul")
		$slider.addClass "rsGisu"
		$slider.royalSlider
			startSlideId: startSlideId
			autoHeight: true
			imageScaleMode: "fit"
			autoScaleSlider: true
			keyboardNavEnabled: true
			visibleNearby: 

				enabled: true,
				centerArea: 0.5,
				center: true,
				breakpoint: 640,
				breakpointCenterArea: 0.9
				navigateByCenterClick: true
		slider = $slider.data('royalSlider');
		$details = $ '<div class="product-details"></div>'
		$details.appendTo $content
		$details.append $oldDetails
		$content.append $ '<a class="btn-close">Close</a>'
		$slider.append $ '<a class="btn-toggle-details">Buy</a>'

		closeOverlay = ->
			slider.destroy()
			$overlay.remove()

		$overlay.on "click", ".btn-close", closeOverlay
		$overlay.on "click", (event)->
			#$("#products-overlay").remove()

			if ( event.target == $overlay.get 0) or (event.target == $content.get 0)
				closeOverlay

		$overlay.on "click", ".rsSlide, .btn-toggle-details", (event) ->
		
			$details.toggleClass "active"
			if $details.hasClass "active" 
				detailsHeight = $details.outerHeight()
				bottomOffset = $(window).height() - $slider.height() - 100 -100
				height = -Math.min(bottomOffset - detailsHeight,0)
				$(".btn-toggle-details").text("close")
			else
				$(".btn-toggle-details").text("buy")
				height = 0
			
			
			$slider.css "top", -height

			
			return false

		setDetails = (slideID) ->
			$details.find(".details").removeClass "active"
			$details.find(".details").eq slideID
			.addClass "active"
		

		slider.ev.on "rsAfterSlideChange", (event) ->
			setDetails event.target.currSlide.id
		setDetails startSlideId
			
		return false