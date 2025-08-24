import { useMenu } from './useMenu.js'

export const useScrollToElement = () => {
  const { handleCloseMenu } = useMenu()

  const initScrollToElement = () => {
    const triggers = document.querySelectorAll('a[href^="#"]')

    triggers.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        try {
          e.preventDefault()

          const href = e.target.getAttribute('href')
          const target = document.querySelector(href)

          if (!target) {
            return
          }

          handleCloseMenu()

          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } catch (e) {
          console.log(e)
        }
      })
    })
  }

  return {
    initScrollToElement
  }
}
