(function() {
  var fullscreenPlayer = $('.uq-landing-video-fullscreen')[0]

  $('.uq-landing-play').on('click', function() {
    $('.uq-landing-video-fullscreen-container').addClass('visible')
    fullscreenPlayer.play()
  })

  $('.uq-landing-video-fullscreen-close').on('click', function() {
    $('.uq-landing-video-fullscreen-container').removeClass('visible')
    fullscreenPlayer.load()
  })
}())
