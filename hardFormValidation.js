
    const FORM_GETAQUOTE = document.forms.namedItem('getAquote');
    const MESSAGESCONTAINER = document.querySelector('.message_getaquote');
    const SUCCESSSTATUS = 200;
    const ZEROABSOLUTE = 0;
    const BLANKVALUE = '';
    const MESSAGESUCCESSFULLY =
      `<div class="cssanimation fadeIn alert-success">Thanks for contacting us and submitting your request. We'll get
        back to you as soon as</div>`;
    const MESSAGEDANGEROUS =
      `<div class="alert-danger">Sorry, your form isn't sent. check again please later</div>`;
    const MESSAGEEMPTYFIELDS = `<div class="alert-warning">UPS! Please verify the required empty fields marked
      with "*"</div>`;

    //custom show alert
    function SHOWALERT(MESSAGE, SHOW, DELAY) {
      MESSAGESCONTAINER.innerHTML = MESSAGE;
      if (SHOW) {
        MESSAGESCONTAINER.classList.add('show');
      }
      setTimeout(() => {
        MESSAGESCONTAINER.innerHTML = BLANKVALUE;
        if (SHOW) {
          MESSAGESCONTAINER.classList.remove('show');
        }
      }, DELAY);
    }

    /* SCROLL EMPTY FIELDS */
    function offset__rel(rel) {
      let rect = document.querySelector(rel).getBoundingClientRect();
      const offset = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      };
      return offset;
    }

    function scroll_firstempty(e) {
      const BODY = document.scrollingElement;
      const position = offset__rel(e).top;
      BODY.scrollTop = (position - 250);
    }

    function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email)
    }
    /* SCROLL EMPTY FIELDS */

    //NOT EMPTY FIELDS METHOD
    function notEmptyfields() {
      let emptyS = 0;
      let CONDITIONEMPTY = false;
      document.querySelectorAll('.contact-form input[required]').forEach((field) => {
        if (field.attributes.TYPE.value === 'email') {
          if (emailIsValid(field.value) === false) {
            emptyS++;
            field.parentElement.classList.remove('has-valid-email');
            field.parentElement.classList.add('has-invalid-email');
          } else {
            field.parentElement.classList.add('has-valid-email');
            field.parentElement.classList.remove('has-invalid-email');
          }

        }

        if (field.value == BLANKVALUE) {
          emptyS++;
          field.classList.add('has-error');
          if (CONDITIONEMPTY === false) {
            scroll_firstempty(`#${field.getAttribute('id')}`);
            CONDITIONEMPTY = true;
          }

        } else {
          if (field.attributes.TYPE.value !== 'email') {
            field.classList.remove('has-error');
          }
        }
      });

      return emptyS;
    }

    //METHOD FOR SEND REQUEST
    async function sendDATA(URL, DATA, TYPE) {
      return await fetch(URL, {
        method: TYPE,
        body: DATA
      });
    }

    //PROCESS
    async function METHODOFSENDDATAandATEMPMODAL(FORM) {
      const CANONICAL = window.location.origin;
      const REQUEST = '/contact#contact_form';
      const response = await sendDATA(`${CANONICAL}/${REQUEST}`, FORM, 'POST');

      if (response.status === SUCCESSSTATUS) {
        openEvent();
        FORM_GETAQUOTE.reset();
        SHOWALERT(MESSAGESUCCESSFULLY, false, 3000);

        setTimeout(() => {
          window.location.reload();
        }, 6000);
      }

      if (response.status !== SUCCESSSTATUS) {
        SHOWALERT(MESSAGEDANGEROUS, true, 5000);
      }
    }

    //EVENT LISTENING FOR ACTION: SUBMIT
    document.getElementById('BTN_getaquote').addEventListener('click', (event) => {
      event.preventDefault();
      const DATA = new FormData(FORM_GETAQUOTE);

      if (notEmptyfields() <= ZEROABSOLUTE) {
        METHODOFSENDDATAandATEMPMODAL(DATA);
      } else {
        SHOWALERT(MESSAGEEMPTYFIELDS, true, 4000);
      }
    });
  
