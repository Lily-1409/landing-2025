export const useHowWorkBlock = () => {
  const initHowWorkBlock = () => {
    const elHowWorkBlock = document.querySelector('.how-work__loading-bar')
    const elProgressBar = document.getElementById('progress-bar')
    const blocks = document.querySelectorAll('.how-work__item')

    // function buildThresholdList() {
    //   const thresholds = []
    //   for (let i = 0; i <= 1.0; i += 0.01) {
    //     thresholds.push(Number(i.toFixed(2)))
    //   }
    //   return thresholds
    // }

    const updateProgressBar = () => {
      const viewportHeight = window.innerHeight
      const elementHeight = elHowWorkBlock.offsetHeight
      const { top, bottom } = elHowWorkBlock.getBoundingClientRect()
      let progressPercent = 0

      // Верх блока выше середины экрана
      if (top <= viewportHeight / 2 && bottom >= viewportHeight / 2) {
        // Насколько % блок "прошел" середину экрана (от 0% до 100%)
        progressPercent = ((viewportHeight / 2 - top) / elementHeight) * 100
      }
      // Блок полностью вышел за верх экрана
      else if (top < 0) {
        progressPercent = ((-top + viewportHeight / 2) / elementHeight) * 100
      }

      // Ограничиваем от 0% до 100%
      progressPercent = Math.max(0, Math.min(100, progressPercent))

      elProgressBar.style.height = `${progressPercent}%`

      checkBlocksHighlight(progressPercent)
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        updateProgressBar()
      })
    }

    window.addEventListener('scroll', updateProgressBar)

    const observer = new IntersectionObserver(
      handleIntersect,
      // buildThresholdList()
    )

    observer.observe(elHowWorkBlock)

    const checkBlocksHighlight = () => {
      const progressBarRect = elProgressBar.getBoundingClientRect()
      // текущая позиция нижней и верхней части прогресс-бара
      const progressBarTop = progressBarRect.top + window.scrollY
      const progressBarBottom = progressBarRect.bottom + window.scrollY

      blocks.forEach((block) => {
        const bgImage = block.querySelector('.how-work__image-wrapper')
        const pinProgressBar = block.querySelector('.how-work__progress-pin')

        const pinRect = pinProgressBar.getBoundingClientRect()
        const topPin = pinRect.top + window.scrollY
        const bottomPin = pinRect.bottom + window.scrollY

        if (bottomPin >= progressBarTop && topPin <= progressBarBottom) {
          bgImage.classList.add('how-work__image-wrapper--active')
          pinProgressBar.classList.add('how-work__progress-pin--colored')
        } else {
          bgImage.classList.remove('how-work__image-wrapper--active')
          pinProgressBar.classList.remove('how-work__progress-pin--colored')
        }
      })
    }
  }

  return { initHowWorkBlock }
}
