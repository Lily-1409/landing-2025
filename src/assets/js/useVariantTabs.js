export const useVariantTabs = () => {
  const initVariantTabs = () => {
    const elApplicationOptions = document.querySelector('.variants')
    const elIndustryBlockRender =
      elApplicationOptions.querySelector('.js-industry')
    const elRoleBlockRender = elApplicationOptions.querySelector('.js-role')
    const elIndustryInput = elApplicationOptions.querySelector('#industry')
    const elRoleInput = elApplicationOptions.querySelector('#role')
    const elSwitchRender = elApplicationOptions.querySelector('.js-variants')

    if (elIndustryInput) {
      elIndustryInput.addEventListener('change', () => {
        elIndustryBlockRender.classList.toggle('variants__list--active')
        elRoleBlockRender.classList.toggle('variants__list--active')
      })
    }

    if (elRoleInput) {
      elRoleInput.addEventListener('change', () => {
        elRoleBlockRender.classList.toggle('variants__list--active')
        elIndustryBlockRender.classList.toggle('variants__list--active')
      })
    }

    if (elSwitchRender) {
      elSwitchRender.addEventListener('click', () => {
        elIndustryBlockRender.classList.toggle('variants__list--active')
        elRoleBlockRender.classList.toggle('variants__list--active')

        if (elIndustryInput.checked) {
          elIndustryInput.checked = false
          elRoleInput.checked = true
        } else {
          elRoleInput.checked = false
          elIndustryInput.checked = true
        }
      })
    }
  }

  return {
    initVariantTabs
  }
}
