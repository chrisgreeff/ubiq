(function() {
  var fullscreenPlayerContainer = $('.uq-landing-video-fullscreen-container')
  var fullscreenPlayer = $('.uq-landing-video-fullscreen')
  var fullscreenCloseButton = $('.uq-landing-video-fullscreen-close')
  var playButton = $('.uq-landing-play')
  var isPlaying = false
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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

  function togglePlay () {
    if (isPlaying) {
      fullscreenPlayer[0].pause()
      isPlaying = false
    } else {
      fullscreenPlayer[0].play()
      isPlaying = true
    }
  }

  playButton.on('click', openFullscreen)
  fullscreenCloseButton.on('click', closeFullscreen)
  fullscreenPlayer.on('click', togglePlay)

  $(document).on('keyup', function (event) {
    if (event.keyCode === 27) { // ESC
      closeFullscreen()
    } else if (event.keyCode === 32) { // SPACE
      togglePlay()
    }
  })
}())
