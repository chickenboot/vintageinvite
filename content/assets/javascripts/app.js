<%= concat_files(@config[:javascripts][:compile]) %>

$(document).ready(function () {
    $(document).foundationTopBar();
});

if (!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
    return $(this).attr('src').replace('.svg', '.png');
  });
}