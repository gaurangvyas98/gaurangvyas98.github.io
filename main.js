
// stick navbar on top
var yourNavigation = $(".navbar");
    // stickyDiv = "sticky";
    yourHeader = $('#home').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass('navbar-fixed');
  } else {
    yourNavigation.removeClass('navbar-fixed');
  }
});

// skills section % values
(function(document) {
    var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));
    _bars.map(function(bar, index) {
      setTimeout(function() {
          bar.style.width = bar.dataset.percent;
      }, index * 1000);
      
    });
  })(document)
  
