export const useStatisticsBlock = () => {
  const initStatisticsBlock = () => {
    const statisticsAnimation = document.querySelectorAll(
      '.statistics__item-animation'
    )
    const statistics = document.querySelector('.statistics__list')
    const statisticsCiclesAnimation = document.querySelectorAll(
      '.statistics__wrapper-animation'
    )

    const startStatisticsAnimation = (entries) => {
      if (!entries[0].isIntersecting || !statisticsAnimation) {
        return
      }

      statisticsAnimation.forEach((statisticsAnimationBlock) => {
        statisticsAnimationBlock.style.display = 'block'
      })
    }

    const startStatisticsCircleAnimation = (entries) => {
      if (!entries[0].isIntersecting || !statisticsCiclesAnimation) {
        return
      }

      statisticsCiclesAnimation.forEach((circle, index) => {
        circle.style.animationName = 'circle' + `${index + 1}`
      })
    }

    let observer1 = new IntersectionObserver(startStatisticsAnimation, {
      threshold: 1
    })

    let observer2 = new IntersectionObserver(startStatisticsCircleAnimation, {
      threshold: 1
    })

    observer1.observe(statistics)
    observer2.observe(statistics)

    const diagramBoxAnimation = document.querySelector('.diagram-box__wrapper')
    const diagramBoxAnimationItem = document.querySelectorAll(
      '.diagram-box__parallax-item'
    )

    const startDiagramBoxAnimation = (entries) => {
      if (!entries[0].isIntersecting || !diagramBoxAnimationItem) {
        return
      }

      diagramBoxAnimationItem.forEach((item, index) => {
        item.style.animationName = 'hand' + `${index + 1}`
      })
    }

    let observerDiagramBox = new IntersectionObserver(
      startDiagramBoxAnimation,
      {
        threshold: 0.7
      }
    )

    observerDiagramBox.observe(diagramBoxAnimation)
  }

  return { initStatisticsBlock }
}
