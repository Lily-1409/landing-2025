import $ from 'jquery'
import 'slick-carousel'

export const useSliders = () => {
  const initProjectSlider = () => {
    const $slider = $('.project-slider__wrapper')
    const $modalSlider = $('.project-modal__slider')

    if (!$slider.length) {
      return
    }

    try {
      const sliderCounter = document.querySelector('.project-slider__counter')
      const currentSlideNumber = sliderCounter.querySelector(
        '.project-slider__counter-big'
      )
      const allSlideNumber = sliderCounter.querySelector(
        '.project-slider__counter-small'
      )

      const sliderCounterModal = document.querySelector('.project-modal__counter')
      const currentSlideNumberModal = sliderCounterModal.querySelector(
        '.project-modal__counter-big'
      )
      const allSlideNumberModal = sliderCounterModal.querySelector(
        '.project-modal__counter-small'
      )

      const updateSliderCounter = function (slick, nextSlide) {
        const currentSlide = nextSlide + 1
        const slidesCount = slick.slideCount

        currentSlideNumber.textContent =
          currentSlide < 10 ? `0${currentSlide}` : currentSlide

        currentSlideNumberModal.textContent =
          currentSlide < 10 ? `0${currentSlide}` : currentSlide

        allSlideNumber.textContent = `/${slidesCount}`
        allSlideNumberModal.textContent = `/${slidesCount}`
      }



      $modalSlider.on('init', (event, slick) => {
        updateSliderCounter(slick, 0)
      })

      $slider.on('init', (event, slick) => {
        updateSliderCounter(slick, 0)
      })

      $slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        updateSliderCounter(slick, nextSlide)
      })

      $modalSlider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        updateSliderCounter(slick, nextSlide)
      })

      $slider.slick({
        asNavFor: $modalSlider,
        adaptiveHeight: true
      })
      $modalSlider.slick({
        asNavFor: $slider,
        prevArrow: $('.project-modal__button--prev'),
        nextArrow: $('.project-modal__button--next'),
      })
    } catch (e) {
      console.log(e)
    }
  }

  const initWhySlider = () => {
    const $slider = $('.why-slider__wrapper')

    if (!$slider.length) {
      return
    }

    const initiated = $slider.hasClass('slick-initialized')

    if (window.innerWidth > 767) {
      if (initiated === true) {
        $slider.slick('unslick')
      }

      return
    } else if (initiated === true) {
      return
    }

    try {
      const sliderCounter = document.querySelector('.why-slider__counter')
      const currentSlideNumber = sliderCounter.querySelector(
        '.why-slider__counter-big'
      )
      const allSlideNumber = sliderCounter.querySelector(
        '.why-slider__counter-small'
      )

      const updateSliderCounter = function (slick, nextSlide) {
        const currentSlide = nextSlide + 1
        const slidesCount = slick.slideCount

        currentSlideNumber.textContent =
          currentSlide < 10 ? `0${currentSlide}` : currentSlide

        allSlideNumber.textContent = `/${slidesCount}`
      }

      $slider.on('init', (event, slick) => {
        updateSliderCounter(slick, 0)
      })

      $slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        updateSliderCounter(slick, nextSlide)
      })

      $slider.slick({
        adaptiveHeight: true
      })
    } catch (e) {
      console.log(e)
    }
  }

  const watchWhySlider = () => {
    initWhySlider()

    window.addEventListener('resize', initWhySlider)
  }

  return {
    initProjectSlider,
    watchWhySlider
  }
}
