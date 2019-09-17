$(document).ready(function() {
  iconsHover();
  navbarCollapse();
  menuSlidedown();
});

$(window).scroll(function() {
  navbarScroll();

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass('come-in');
    }
  });
});

$(window).resize(function() {
  navbarCollapse();
});

// Add changing size to navbar when scrolled
function navbarScroll() {
  var NavHeight = parseInt($('.navbar').outerHeight(), 10);
  var ScrolledFromTop = parseInt($(window).scrollTop(), 10);

  if (ScrolledFromTop >= NavHeight) {
    $('.navbar').addClass('navbar--scrolled');
  } else {
    $('.navbar').removeClass('navbar--scrolled');
  }
}

// Add green effect to icons
function iconsHover() {
  $('.container__content').hover(
    function() {
      $('h3', this).addClass('content-subtitle--green');
    },
    function() {
      $('h3', this).removeClass('content-subtitle--green');
    }
  );
}

// Add navbar collapse
function navbarCollapse() {
  var windowWidth = parseInt($(window).width(), 10);
  $('.hamburger').hide();
  if (windowWidth <= 960) {
    $('.navbar__nav').css('display', 'none');
    $('.navbar__nav').addClass('show');
    $('.hamburger').show();
    $('.nav__item').css('display', 'block');
  } else {
    $('.navbar__nav').css('display', 'block');
    $('.navbar__nav').removeClass('show');
    $('.hamburger').hide();
    $('.nav__item').css('display', 'inline-block');
  }
}

// Add hamburger slidedown
function menuSlidedown() {
  $('.hamburger').click(function() {
    $('.navbar__nav').slideToggle('slow');
  });
}

// Add smooth scrolling
$('#main-nav a').on('click', function(e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});

(function($) {
  $.fn.visible = function(partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

var allMods = $('.slide');

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass('already-visible');
  }
});
