$(document).ready(function(){
    $(".input-email, .input-message").click(function(){
        $(this).parent('.input-field').addClass('is-active');
    });
    $(".input-email, .input-message").blur(function(){
        if( !$(this).val() ) {
            $(this).parent('.input-field').removeClass('is-active');
        }
    });

    $(".btn-write").click(function(){
        $(".contact-form").slideToggle("slow");
    });
    $('.close-form').click(function() {
      $(".contact-form").slideUp("slow");
    });

    $(".quick-links-f").click(function(){
        $(this).find('ul').slideToggle("fast");
        $(this).find('.icon').toggleClass("icon-active");
    });
    $('.menu-trigger').click(function(){
        $('.menu').addClass('visible-nav');
        $('#page-top').css('overflow','hidden');
    });
    $('.close-nav').click(function(){
        $('.menu').removeClass('visible-nav');
        $('#page-top').css('overflow','auto');
    });

    // grab an element
    var myElement = document.querySelector("#header");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init({
      tolerance: 5,
      offset: 50,
      classes: {
          initial: "header--animated",
          pinned: "header--slideDown",
          unpinned: "header--slideUp",
          notTop: "header--not-top",
          top: "header--top"
      }
    });
});

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<div class="slick-prev"><img src="static/img/arrow_t.svg"></div>',
  nextArrow: '<div class="slick-next"><img src="static/img/arrow_t.svg"></div>'
});

// Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
      // On-page links
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
      ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top-150
              }, 850, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                  } else {
                      $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                  };
              });
          }
      }
  });
  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
      if (scroll >= 150) {
          $(".back-to-top").addClass("visible");
      }else {
          $(".back-to-top").removeClass("visible");
      }
    });

    				var $animation_elements = $('.animation-element');
    				var $window = $(window);

    				function check_if_in_view() {
    				  var window_height = $window.height();
    				  var window_top_position = $window.scrollTop();
    				  var window_bottom_position = (window_top_position + window_height);

    				  $.each($animation_elements, function() {
    				    var $element = $(this);
    				    var element_height = $element.outerHeight();
    				    var element_top_position = $element.offset().top;
    				    var element_bottom_position = (element_top_position + element_height);

    				    //check to see if this current container is within viewport
    				    if ((element_bottom_position >= window_top_position) &&
    				        (element_top_position <= window_bottom_position)) {
    				      $element.addClass('in-view');
    				    } else {
    				      // $element.removeClass('in-view');
    				    }
    				  });
    				}

    				$window.on('scroll resize', check_if_in_view);
    				$window.trigger('scroll');

    				    $('.map-container')
    					.click(function(){
    							$(this).find('iframe').addClass('clicked')})
    					.mouseleave(function(){
    							$(this).find('iframe').removeClass('clicked')});
