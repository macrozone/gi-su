(function() {
  jQuery(function($) {
    var $body, adjustHeight, adjustPageHeights, autoSetHashEnabled, scrollToPage, selectPageInMenu;
    $body = $("body");
    autoSetHashEnabled = true;
    selectPageInMenu = function(page) {
      $("#main-menu a").removeClass("active");
      $("#main-menu a[href='#" + page + "']").addClass("active");
    };
    $(document).on("scroll", _.throttle(function(e) {
      var offset;
      if (autoSetHashEnabled) {
        offset = $(window).height() / 2;
        $("section.page.depth-0").each(function() {
          var id, page;
          if ($(this).offset().top < window.pageYOffset + offset && $(this).offset().top + $(this).height() > window.pageYOffset + offset) {
            id = $(this).attr("id");
            if (id) {
              page = id.substring(5);
              selectPageInMenu(page);
              window.location.hash = page;
            } else {
              window.location.hash = "";
              selectPageInMenu("");
            }
          }
        });
      }
    }, 300));
    adjustHeight = function(index, element) {
      var height;
      height = $(window).height();
      if (index === 0) {
        height -= $(element).offset().top;
      }
      $(element).css("min-height", height);
    };
    adjustPageHeights = function() {
      $(".page.depth-0").each(adjustHeight);
    };
    scrollToPage = function(page) {
      var $target, offset, padding;
      if (page && page.length > 0) {
        autoSetHashEnabled = false;
        $target = $("#page_" + page);
        padding = parseInt($target.css("padding-top"), 10);
        offset = 150 - padding;
        if ($target.length > 0) {
          return jQuery.scrollTo($target, "slow", {
            offset: -offset,
            onAfter: function() {
              _.delay((function() {
                autoSetHashEnabled = true;
              }), 600);
            }
          });
        }
      }
    };
    $("#main-menu li a").on("click", function() {
      var target;
      target = $(this).attr("href").substring(1);
      scrollToPage(target);
    });
    $(".page.depth-2").on("click", ".pageTitle", function(event) {
      var $content, $page, height;
      $page = $(event.delegateTarget);
      $content = $page.find(".content");
      height = $content.find(".wrapper").outerHeight() + 10;
      if ($page.hasClass("open")) {
        $page.removeClass("open");
        $content.css("max-height", 0);
      } else {
        $page.addClass("open");
        $content.css("height", "auto").css("max-height", height);
      }
      return false;
    });
    $(window).on("resize", _.debounce(adjustPageHeights, 300));
    adjustPageHeights();
    scrollToPage(window.location.hash.substring(1));
    $(window).on("keypress", function(event) {
      if (event.which === 105) {
        $body.toggleClass("inverted");
      }
    });

    /*
    toggle / gallery fix *
     */
    $(".omsc-toggle-title").on("click", function(event) {
      var $parent, $this, slider;
      $this = $(this);
      $parent = $this.parent();
      slider = $parent.find(".royalSlider").data("royalSlider");
      _.defer(function() {
        slider.updateSliderSize();
      });
    });
  });

}).call(this);
