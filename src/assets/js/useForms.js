import Pristine from 'pristinejs'

export const useForms = () => {
  const initConsultationForm = () => {
    const elConsultationForm = document.querySelector('#consultation-form')

    async function submitConsultationForm(event) {
      event.preventDefault();

      const TELEGRAM_BOT_TOKEN = '6432422848:AAGX47YutcQQ1DmeSsEAC2RcHjhIZzNgWyc';
      const TELEGRAM_CHAT_ID = '-1002202705076';
      const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      const form = event.target;
      const formBtn = document.querySelector('.consultation__submit');
      const formSendResult = document.querySelector('.consultation__send-result');
      formSendResult.textContent = '';

      const {name, company, phone, email} = Object.fromEntries(new FormData(form).entries());

      const text = `Запрос консультации от компании ${company}\nКонтактное лицо: ${name}\nТелефон: ${phone}\nEmail: ${email}`

      try {
        formBtn.textContent = 'Отправка формы...'
        const response = await fetch(API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text
          })
        });

        if (response.ok) {
          formSendResult.innerHTML = '<p>Спасибо за обращение, мы свяжемся с вами в ближайшее время</p>';
          form.reset();

          setTimeout(() => {
            formSendResult.innerHTML = ''
          }, 5000);
        } else {
          throw new Error(response.statusText);
        }
      } catch(error) {
        console.error(error);
        formSendResult.innerHTML = '<p>Данные не отправлены! Попробуйте позже</p>';
        formSentResult.style.color = 'red';

        setTimeout(() => {
          formSendResult.innerHTML = ''
          formSentResult.style.color = '';
        }, 5000);
      } finally {
        formBtn.textContent = 'Заказать консультацию'
      }
    }

    if (elConsultationForm) {
      const pristine = new Pristine(elConsultationForm, {}, true)

      elConsultationForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const isValid = pristine.validate()

        if (isValid === false) {
          return
        }

        submitConsultationForm(event);
      })
    }
  }

  const initOrderConsultationForm = () => {
    const elOrderConsultationForm = document.querySelector(
      '#order-consultation-form'
    )

    const submitOrderConsultationForm = () => {
      alert('SUBMIT SUCCESS')
    }

    if (elOrderConsultationForm) {
      const pristine = new Pristine(elOrderConsultationForm, {}, true)

      elOrderConsultationForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const isValid = pristine.validate()

        if (isValid === false) {
          return
        }

        submitOrderConsultationForm()
      })
    }
  }

  const initGetDocumentsForm = () => {


    const elgetDocumentsForm = document.querySelector(
      '#get-document-form'
    )

    async function submitGetDocumentForm(event) {
      event.preventDefault();

      const TELEGRAM_BOT_TOKEN = '6432422848:AAGX47YutcQQ1DmeSsEAC2RcHjhIZzNgWyc';
      const TELEGRAM_CHAT_ID = '-1002202705076';
      const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      const form = event.target;
      const formBtn = document.querySelector('.get-document__submit');
      const formSendResult = document.querySelector('.get-document__send-result');
      formSendResult.textContent = '';

      const {email, name, nameCompany, fieldCompany} = Object.fromEntries(new FormData(form).entries());

      const text = `Запрос документов от компании ${nameCompany}\nКонтактное лицо: ${name}\nEmail: ${email}\nОбласть компании: ${fieldCompany}`

      try {
        formBtn.textContent = 'Отправка формы...'
        const response = await fetch(API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text
          })
        });

        if (response.ok) {
          formSendResult.innerHTML = '<p>Спасибо за обращение, документы будут направлены в ближайшее время</p>';
          form.reset();

          setTimeout(() => {
            formSendResult.innerHTML = ''
          }, 5000);
        } else {
          throw new Error(response.statusText);
        }
      } catch(error) {
        console.error(error);
        formSendResult.innerHTML = '<p>Данные не отправлены! Попробуйте позже</p>';
        formSentResult.style.color = 'red';

        setTimeout(() => {
          formSendResult.innerHTML = ''
          formSentResult.style.color = '';
        }, 5000);
      } finally {
        formBtn.textContent = 'Получить документы'
      }
    }


    if (elgetDocumentsForm) {
      const pristine = new Pristine(elgetDocumentsForm, {}, true)

      elgetDocumentsForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const isValid = pristine.validate()

        if (isValid === false) {
          return
        }

        submitGetDocumentForm(event);
      })
    }
  }

  return {
    initConsultationForm,
    initOrderConsultationForm,
    initGetDocumentsForm
  }
}
