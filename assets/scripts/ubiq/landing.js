import { isMobile } from '../util/env'

const fullscreenPlayerContainer = $('.uq-landing-video-fullscreen-container')
let isPlaying = false

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

const fullscreenPlayer = $('.uq-landing-video-fullscreen')

fullscreenPlayer.on('click', togglePlay)
fullscreenPlayer.on('ended', closeFullscreen)
$('.uq-landing-play').on('click', openFullscreen)
$('.uq-landing-video-fullscreen-close').on('click', closeFullscreen)

if (isMobile()) {
  $('.uq-landing-video').remove()
  $('.uq-landing-video-container').addClass('uq-landing-video-container--mobile')
}

$(document).on('keyup', function (event) {
  if (event.keyCode === 27) { // ESC
    closeFullscreen()
  } else if (event.keyCode === 32) { // SPACE
    togglePlay()
  }
})
