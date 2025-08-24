export const useMenu = () => {
  const elBody = document.querySelector('body')
  const elMenuButton = document.querySelector('.js-header-menu-button')
  const elMenu = document.querySelector('.menu')
  const elOverlay = document.querySelector('.js-menu-overlay')

  const MENU_ANIMATION_DURATION = 1000
  const MENU_MOBILE_ANIMATION_DURATION = 500

  let isAnimationActive = false

  const getAnimationDuration = () =>
    window.innerWidth >= 768
      ? MENU_ANIMATION_DURATION
      : MENU_MOBILE_ANIMATION_DURATION

  const getAnimationDelay = () => getAnimationDuration() / 2

  const toggleClasses = () => {
    elBody.classList.toggle('prevent-scroll')
    elMenuButton.classList.toggle('open')
    elMenu.classList.toggle('menu--open')
  }

  const handleOpenMenu = () => {
    const animationDuration = getAnimationDuration()

    isAnimationActive = true

    toggleClasses()

    elOverlay.classList.add('menu-overlay--active')

    setTimeout(() => {
      isAnimationActive = false
    }, animationDuration)
  }

  const handleCloseMenu = () => {
    if (elMenu.classList.contains('menu--open')) {
      const animationDuration = getAnimationDuration()
      const animationDelay = getAnimationDelay()

      isAnimationActive = true

      toggleClasses()

      elMenu.classList.add('menu--close')

      setTimeout(() => {
        elMenu.classList.remove('menu--close')

        isAnimationActive = false
      }, animationDuration)

      setTimeout(() => {
        elOverlay.classList.remove('menu-overlay--active')
      }, animationDelay)
    }
  }

  const initMenu = () => {
    elMenuButton.addEventListener('click', () => {
      if (isAnimationActive === true) {
        return
      }

      if (elMenu.classList.contains('menu--open')) {
        handleCloseMenu()

        return
      }

      handleOpenMenu()
    })

    elOverlay.addEventListener('click', handleCloseMenu)
  }

  return {
    handleCloseMenu,
    initMenu
  }
}
