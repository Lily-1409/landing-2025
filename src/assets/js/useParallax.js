export const useParallax = () => {
  const parallaxIntro = document.querySelector('.intro')
  // const parallaxYourPlan = document.querySelector('.your-plan')
  // const parallaxDiagramBox = document.querySelector('.diagram-box')
  const parallaxAiSolution = document.querySelector('.ai-solution--more')
  let windowWidth = null
  let windowHeight = null
  let windowCenterX = null
  let windowCenterY = null
  let inputX = 0
  let inputY = 0
  let offsetX = 0
  let offsetY = 0
  let scrollY = window.scrollY
  let initiated = false

  const updateDimensions = () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    windowCenterX = windowWidth / 2
    windowCenterY = windowHeight / 2
  }

  const onMouseMove = (event) => {
    const clientX = event.clientX
    const clientY = event.clientY

    if (windowCenterX && windowCenterY) {
      inputX = (clientX - windowCenterX) / windowCenterX
      inputY = (clientY - windowCenterY) / windowCenterY
    }
  }

  // const onScroll = (event) => {
  //   scrollY = window.scrollY
  //   inputY = (scrollY / windowCenterY) * 2
  // }

  const setPosition = (element, x, y) => {
    const directionMovingX = element.getAttribute('data-directionX')
    const directionMovingY = element.getAttribute('data-directionY')

    if (element.getAttribute('data-coords') === 'coordX') {
      element.style.transform =
        `translateX(` + x.toFixed(1) * `${directionMovingX}` + `px)`
    }

    if (element.getAttribute('data-coords') === 'coordY') {
      element.style.transform =
        `translateY(` + x.toFixed(1) * `${directionMovingY}` + `px)`
    }

    if (element.getAttribute('data-coords') === 'coordsXY') {
      element.style.transform =
        `translate(` +
        x.toFixed(1) * `${directionMovingX}` +
        `px,` +
        y.toFixed(1) * `${directionMovingY}` +
        `px)`
    }
  }

  const sortingLayers = (layers) => {
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i]
      const speed = layer.getAttribute('data-speed')
      const xOffset = offsetX * speed
      const yOffset = offsetY * speed

      setPosition(layer, xOffset, yOffset)
    }
  }

  const handleIntroParallax = () => {
    const layers = parallaxIntro.querySelectorAll('.intro__layer')

    sortingLayers(layers)
  }

  // const handleYourPlanParallax = () => {
  //   const layers = parallaxYourPlan.querySelectorAll('.your-plan__layer')

  //   sortingLayers(layers)
  // }

  // const handleDiagramParallax = () => {
  //   const layers = parallaxDiagramBox.querySelectorAll(
  //     '.diagram-box__parallax-item'
  //   )

  //   sortingLayers(layers)
  // }

  const handleAiSolituonParallax = () => {
    const layers = parallaxAiSolution.querySelectorAll(
      '.ai-solution__layer'
    )

    sortingLayers(layers)
  }

  const onAnimationFrame = () => {
    if (window.innerWidth <= 1023) {
      window.requestAnimationFrame(onAnimationFrame)

      return
    }

    const positionX = (inputX * windowWidth) / 10
    const positionY =
      (inputY * windowHeight) / 10 + (scrollY / windowCenterY) * 1.5

    offsetX += (positionX - offsetX) * 0.1
    offsetY += (positionY - offsetY) * 0.1

    handleIntroParallax()
    // handleYourPlanParallax()
    // handleDiagramParallax()
    handleAiSolituonParallax()

    window.requestAnimationFrame(onAnimationFrame)
  }

  const initEventListeners = () => {
    console.log('INIT')
    window.addEventListener('resize', updateDimensions)
    parallaxIntro.addEventListener('mousemove', onMouseMove)
    // parallaxYourPlan.addEventListener('mousemove', onMouseMove)
    // parallaxDiagramBox.addEventListener('mousemove', onMouseMove)
    parallaxAiSolution.addEventListener('mousemove', onMouseMove)
    // window.addEventListener('scroll', onScroll);
    window.requestAnimationFrame(onAnimationFrame)
  }

  const initParallax = () => {
    updateDimensions()

    if (initiated === false) {
      initEventListeners()

      initiated = true
    }
  }

  const watchParallax = () => {
    initParallax()

    window.addEventListener('resize', initParallax)
  }

  return {
    watchParallax
  }
}
