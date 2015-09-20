$(function () {
  var player = $f($('#uq-landing-video-fullscreen-iframe')[0]);

  $('.uq-landing-play').on('click', function() {
    $('.uq-landing-video-fullscreen-container').addClass('visible')
    player.api('play')
  })

  $('.uq-landing-video-fullscreen-close').on('click', function() {
    $('.uq-landing-video-fullscreen-container').removeClass('visible')
    player.api('unload')
  })
})
