import { useSliders } from './useSliders.js'
import { useParallax } from './useParallax.js'
import { useMenu } from './useMenu.js'
import { useModals } from './useModals.js'
// import { useHorizontalScroll } from './useHorizontalScroll.js'
import { useForms } from './useForms.js'
// import { useAccordeon } from './useAccordeon.js'
import { useAutoSwitchTab } from './useAutoSwitchTab.js'
// import { useVariantTabs } from './useVariantTabs.js'
// import { useVennDiagram } from './useVennDiagram.js'
import { useScrollToElement } from './useScrollToElement.js'
// import { useStatisticsBlock } from './useStatisticsBlock.js'
import { useAdvantagesBlock } from './useAdvantagesBlock.js'
import { useHowWorkBlock } from './useHowWorkBlock.js'

const { initProjectSlider, watchWhySlider } = useSliders()
const { watchParallax } = useParallax()
const { initMenu } = useMenu()
const { initConsultationModal, initProjectModal, initGetDocumentModal } =
useModals()
// const { initAiListScroll } = useHorizontalScroll()
const {
initConsultationForm,
initOrderConsultationForm,
initGetDocumentsForm
} = useForms()
// const { initAccordeon } = useAccordeon()
const { initSwitchTab } = useAutoSwitchTab()
// const { initVariantTabs } = useVariantTabs()
// const { initVennDiagram } = useVennDiagram()
const { initScrollToElement } = useScrollToElement()
// const { initStatisticsBlock } = useStatisticsBlock()
const { initAdvantagesBlock } = useAdvantagesBlock()
const { initHowWorkBlock } = useHowWorkBlock()

document.addEventListener('DOMContentLoaded', () => {
  initProjectSlider()
  watchWhySlider()
  watchParallax()
  initMenu()
  initConsultationModal()
  initProjectModal()
  // initGetDocumentModal()
  // initAiListScroll()
  initConsultationForm()
  initGetDocumentsForm()
  initOrderConsultationForm()
  // initAccordeon()
  initSwitchTab()
  // initVariantTabs()
  // initVennDiagram()
  initScrollToElement()
  // initStatisticsBlock()
  initAdvantagesBlock()
  initHowWorkBlock()
})