(function() {
  var fullscreenPlayerContainer = $('.uq-landing-video-fullscreen-container')
  var fullscreenPlayer = $('.uq-landing-video-fullscreen')
  var fullscreenCloseButton = $('.uq-landing-video-fullscreen-close')
  var playButton = $('.uq-landing-play')
  var isPlaying = false

  function openFullscreen () {
    fullscreenPlayerContainer.addClass('visible')
    fullscreenPlayer[0].play()
    isPlaying = true
  }

  function closeFullscreen () {
    fullscreenPlayerContainer.removeClass('visible')
    fullscreenPlayer[0].load()
    isPlaying = false
  }

  playButton.on('click', openFullscreen)
  fullscreenCloseButton.on('click', closeFullscreen)

  fullscreenPlayer.on('click', function() {
    if (isPlaying) {
      fullscreenPlayer[0].pause()
      isPlaying = false
    } else {
      fullscreenPlayer[0].play()
      isPlaying = true
    }
  })

  $(document).on('keyup', function (event) {
    if (event.keyCode === 27) {
      closeFullscreen()
    }
  })
}())
