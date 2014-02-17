<%= concat_files(@config[:javascripts][:compile]) %>

$(document).foundation();

$('[data-orbit]').on('orbit:after-slide-change', function(e, orbit_info) {
  var activeSlide = $(e.currentTarget).find('li').eq(orbit_info.slide_number);
  var currentImage = activeSlide.find('img');
  $('#imageSource').html(currentImage[0].src);
});

$(document).ready(function () {
    $(document).foundationTopBar();
});

if (!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
    return $(this).attr('src').replace('.svg', '.png');
  });
}