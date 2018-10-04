/***************************************************************************/
/********************       Window Resize       ****************************/
/***************************************************************************/

$('.news-wrap.owl-carousel').owlCarousel({
    loop: false,
    items:4,
    nav: true,
    dot: false,
    rewind: false,
    margin : 30,
    mouseDrag :false
});

$('.programs-wrap.owl-carousel').owlCarousel({
    loop: false,
    items:3,
    nav: true,
    dot: false,
    rewind: false,
    margin : 20,
    mouseDrag :false
});

$('.teachers--main .owl-carousel').owlCarousel({
    loop: false,
    items:2,
    nav: true,
    dot: false,
    rewind: false,
    margin : 20,
    mouseDrag :false
});



var lastResolution = 0;

resize();
window.onresize = resize;

function resize(){
  
  // console.time('name');
  
  windowWidth = window.innerWidth;
  clientWindowWidth = document.documentElement.clientWidth;
  
  console.log("resize");

  // owlCarouselResize(owlMobileNews, owlMobileNewsSettings, windowWidth, lastResolution,850);




if( windowWidth <= 750){
    //  ... mobile device
    if ($('.scroll_table').size() == 0){
      $('table').each(function(){
        if($(this).outerWidth() > $(this).parent().width()){
          $(this).wrap("<div class='scroll_table'></div>");
      }

  });
      $('.scroll_table').scroll(function () {
          $(this).addClass('seen');
      });
  }

} else {
    // ... desktop device

}



  lastResolution = windowWidth;



  // console.timeEnd('name');
}

function owlCarouselResize(element, options, currResolution, prevResolution, switchResolution){
	console.log('sdfsd');
	console.log('currResolution ',currResolution);
	console.log('prevResolution ',prevResolution);
  if(  prevResolution > 0 ) {
      // riseze ...
      if( (currResolution <= switchResolution) && ( prevResolution > switchResolution ) ){
        // ... desktop -> mobile
        element.addClass('owl-carousel');
        element.owlCarousel(options);
        console.log('1');
      }
      if( (currResolution > switchResolution) && ( prevResolution <= switchResolution ) ){
        //  ... mobile -> desktop
        element.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        element.find('.owl-stage-outer').children().unwrap();
        console.log('2');
      }
    } else {
      // onload ... 
      if( currResolution <= switchResolution){
        //  ... mobile device
        element.addClass('owl-carousel');
        element.owlCarousel(options);
        console.log('3');
      } else {
        // ... desktop device
        element.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        element.find('.owl-stage-outer').children().unwrap();
        console.log('4');
      }

    }
  }

// Обёртка над фотосвайпом
photoswipeWrapper.init('.js-photoswipe-gallery', 'a:not(.no-photoswipe)');




