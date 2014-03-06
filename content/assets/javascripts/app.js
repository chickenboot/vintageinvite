<%= concat_files(@config[:javascripts][:compile]) %>

$('[data-orbit]').on('orbit:after-slide-change', function(e, orbit_info) {
  var activeSlide = $(e.currentTarget).find('li').eq(orbit_info.slide_number);
  var currentImage = activeSlide.find('img');
  $('#imageSource').html(currentImage[0].src);
});

$(document).ready(function () {
  $(document).foundationTopBar();
});

$(function() {
  $("a[data-set-image]").on("click", function() {
    $('#' + $(this).data("set-image")).attr('src', $(this).data('set-image-src'));
  });

  if (!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }
});