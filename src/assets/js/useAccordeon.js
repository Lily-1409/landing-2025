export const useAccordeon = () => {
  const buttonAccordion = document.querySelectorAll('.js-button-accordion')

  const initAccordeon = () => {
    buttonAccordion.forEach((elAccordion) => {
      elAccordion.addEventListener('click', function () {
        const elParent = elAccordion.closest('.js-tabs')
        const cards = elParent.querySelectorAll('.js-tabs-card')
        const elCard = elAccordion.closest('.js-tabs-card')

        cards.forEach(($el) => {
          if ($el === elCard) {
            $el.classList.add('variants-card--active')
            $el.classList.add('strategy__card--active')
            return
          }

          $el.classList.remove('variants-card--active')
          $el.classList.remove('strategy__card--active')
        })
      })
    })
  }

  return {
    initAccordeon
  }
}
