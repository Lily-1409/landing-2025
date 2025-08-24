export const useAutoSwitchTab = () => {
  const initSwitchTab = () => {
    const buttonTabs = document.querySelectorAll('.js-button-accordion')
    const images = document.querySelectorAll('.strategy__image')
    const interval = 5000

    let tabInterval
    let tabIntervalIndex = 0

    function switchTab(index) {
      const currentTab = buttonTabs[index]
      const inner = currentTab.querySelector('.strategy-card__inner')
      const content = currentTab.querySelector('.strategy-card__content')
      const height = content.clientHeight

      buttonTabs.forEach((btn) => {
        const inner = btn.querySelector('.strategy-card__inner')

        btn.classList.remove('strategy-card--active')

        inner.style.height = '0px'
      })

      images.forEach((img) => {
        img.classList.remove('strategy__image--active')
      })

      currentTab.classList.add('strategy-card--active')

      inner.style.height = `${height}px`

      images[index].classList.add('strategy__image--active')
    }

    function startInterval() {
      tabInterval = setInterval(() => {
        tabIntervalIndex =
          tabIntervalIndex < buttonTabs.length - 1 ? tabIntervalIndex + 1 : 0

        switchTab(tabIntervalIndex)
      }, interval)
    }

    switchTab(0)
    startInterval()

    buttonTabs.forEach((item, index) => {
      item.addEventListener('click', () => {
        const loadingBar = item.querySelector('.loading-progress')

        loadingBar.classList.add('loading-progress--fill')

        clearInterval(tabInterval)

        switchTab(index)
      })
    })
  }

  return {
    initSwitchTab
  }
}
