(function () {
  var player = $f($('.uq-landing-video-fullscreen-iframe')[0])

  player.addEvent('ready', function() {
    console.log(arguments)
    player.api('play')
  })

  $('.uq-landing-play').on('click', function() {
    $('.uq-landing-video-fullscreen-container').addClass('visible')
  })

  $('.uq-landing-video-fullscreen-close').on('click', function() {
    $('.uq-landing-video-fullscreen-container').removeClass('visible')
  })
}())
