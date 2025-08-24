import $ from 'jquery'

export const useModals = () => {
  const elBody = document.querySelector('body')

  const initConsultationModal = () => {
    const elOrderConsultationButton = document.querySelector('.js-header-phone')
    const elOrderConsultationModal = document.querySelector(
      '.order-consultation-modal'
    )
    const elOrderConsultationModalCloseButton = document.querySelector(
      '.order-consultation-modal__close-button'
    )
    const elOrderConsultationModalOverlay = document.querySelector(
      '.order-consultation-modal__overlay'
    )

    let isOtherModalOpen = false;

    const openModal = () => {
      isOtherModalOpen = elBody.classList.contains('prevent-scroll');

      if (!isOtherModalOpen) {
        elBody.classList.add('prevent-scroll');
      }

      elOrderConsultationModal.classList.add('order-consultation-modal--open')
    }

    const closeModal = () => {
      if (!isOtherModalOpen) {
        elBody.classList.remove('prevent-scroll');
      }

      elOrderConsultationModal.classList.remove(
        'order-consultation-modal--open'
      )
    }

    elOrderConsultationButton.addEventListener('click', openModal)
    elOrderConsultationModalOverlay.addEventListener('click', closeModal)
    elOrderConsultationModalCloseButton.addEventListener('click', closeModal)
  }

  const initGetDocumentModal = () => {
    const elGetDocumentButton = document.querySelector('.your-plan__button')
    const elGetDocumentModal = document.querySelector(
      '.get-document-modal'
    )
    const elGetDocumentModalCloseButton = document.querySelector(
      '.get-document-modal__close-button'
    )
    const elGetDocumentModalOverlay = document.querySelector(
      '.get-document-modal__overlay'
    )

    const openModal = () => {
      elBody.classList.add('prevent-scroll')
      elGetDocumentModal.classList.add('get-document-modal--open')
    }

    const closeModal = () => {
      elBody.classList.remove('prevent-scroll')
      elGetDocumentModal.classList.remove(
        'get-document-modal--open'
      )
    }

    elGetDocumentButton.addEventListener('click', openModal)
    elGetDocumentModalOverlay.addEventListener('click', closeModal)
    elGetDocumentModalCloseButton.addEventListener('click', closeModal)
  }

  const initProjectModal = () => {
    const elProjectSlideButtons = document.querySelectorAll(
      '.project-slide__button'
    )

    const elProjectModal = document.querySelector('.project-modal__box')
    const elProjectModalOverlay = document.querySelector(
      '.overlay-project-modal'
    )
    const elProjectModalCloseButton = document.querySelector('.project-modal__close-button');


    const openModal = () => {
      elBody.classList.add('prevent-scroll')
      elProjectModal.classList.add('project-modal__box--open')
      elProjectModalOverlay.classList.add('overlay-project-modal--active')
      $('.project-modal__slider').slick('setPosition')
    }

    const closeModal = () => {
      elBody.classList.remove('prevent-scroll')
      elProjectModal.classList.remove('project-modal__box--open')
      elProjectModalOverlay.classList.remove('overlay-project-modal--active')
    }

    elProjectSlideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        openModal();
      })
    })

    elProjectModal.addEventListener('click', (event) => {
      const target = event.target;

      if (!target.closest('.project-modal__wrapper')) {
        closeModal();
      }
    })
    elProjectModalCloseButton.addEventListener('click', closeModal)
    elProjectModalOverlay.addEventListener('click', closeModal)
  }

  return {
    initConsultationModal,
    initProjectModal,
    initGetDocumentModal
  }
}
