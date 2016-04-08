var $banner = $('.banner');
var $width = $banner.outerWidth();
var $addStars;
var $height = $banner.outerHeight();

var $body = $('.banner');
var width = $body.outerWidth();
var $star;
var height = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    top: Math.random() * height,
    left: Math.random() * width,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  });

  $body.append($star);
}
