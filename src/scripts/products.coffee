jQuery ($) ->
	
	$(".products").each (index, item) ->
		visibleIndex = 0
		fade = ->
			$lis = $(item).find("li")
			$lis.removeClass "visible"
			$lis.eq(visibleIndex).addClass "visible"
			visibleIndex = (visibleIndex+1) % $lis.length
			
		setTimeout ->
			fade()
		#	setInterval fade, 10000
		, index*500

		
	$(".products").on "click", "li", (event) ->
		maxWidth = $(window).height() / 3 *2
		startSlideId = $(this).index()
		$products =  $(event.delegateTarget).clone()
		$products.find "li"
		.removeClass()
		.find "a"
		
		.find "img"
		.addClass "rsImg"
		$("#products-overlay").remove()
		$oldDetails = $products.find ".details"
		
		$overlay = $ '<div id="products-overlay"></div>';
		$content = $ '<div class="content-wrapper"></div>';
		$controlWrapper = $ '<div class="controls-wrapper"></div>'
		$controls = $ '<div class="controls"></div>'

	
	
		$products.appendTo $content;
		$content.appendTo $overlay
		
		$overlay.prependTo $("body")
		$slider = $overlay.find("ul")
		$slider.addClass "rsGisu"
		$slider.royalSlider
			startSlideId: startSlideId
			autoHeight: true
			autoScaleSliderHeight: 400

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

		$controls.append $ '<a class="btn-close">Back</a>'
		$controls.append $ '<a class="btn-toggle-details">Buy</a>'
		$controls.appendTo $controlWrapper
		$controlWrapper.appendTo $content

		closeOverlay = ->
			slider.destroy()
			$overlay.remove()

		$overlay.on "click", (event) ->
			$target = $(event.target)
			if($target.is($overlay) or $target.is($content))
				closeOverlay()

		$overlay.on "click", ".btn-close", closeOverlay
		$overlay.on "click", (event)->
			if ( event.target == $overlay.get 0) or (event.target == $content.get 0)
				closeOverlay

		

		toggleDetails = (event) ->
		
			$details.toggleClass "active"
			
			if $details.hasClass "active" 
				detailsHeight = $details.outerHeight()
				bottomOffset = $(window).height() - $slider.height() - 100 -100
				height = -Math.min(bottomOffset - detailsHeight,0)
				controlBottomOffset = detailsHeight
				$(".btn-toggle-details").text("close")
			else
				$(".btn-toggle-details").text("buy")
				height = 0
				controlBottomOffset = 0
			
			$controlWrapper.css "bottom", controlBottomOffset
			$slider.css "top", -height
			return false

		$overlay.on "click", ".btn-toggle-details", toggleDetails
		$overlay.on "click", ".rsSlide", (event)->
			unless $details.hasClass "active"
				toggleDetails event
			else
				$overlay.toggleClass "zoomed"
			return false



		setDetails = (slideID) ->
			$details.find(".details").removeClass "active"
			$details.find(".details").eq slideID
			.addClass "active"
		
		slider.ev.on "rsBeforeAnimStart", (event) ->
			$(".rsSlide").removeClass "rsActiveSlide"
			$(event.target.currSlide.holder[0]).addClass "rsActiveSlide"
			
		slider.ev.on "rsAfterSlideChange", (event) ->
			setDetails event.target.currSlide.id
		setDetails startSlideId
			
		return false