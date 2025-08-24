export const useAdvantagesBlock = () => {
  const initAdvantagesBlock = () => {
    const advantages = document.querySelector('.advantages-list')
    const advantagesCiclesAnimation = document.querySelectorAll(
      '.advantages__wrapper-animation'
    )

    const startAdvantagesCircleAnimation = (entries) => {
      if (!entries[0].isIntersecting || !advantagesCiclesAnimation) {
        return
      }

      advantagesCiclesAnimation.forEach((circle, index) => {
        circle.style.animationName = 'circle' + `${index + 1}`
      })
    }
    let observer2 = new IntersectionObserver(startAdvantagesCircleAnimation, {
      threshold: 1
    })
    observer2.observe(advantages)
  }

  return { initAdvantagesBlock }
}
