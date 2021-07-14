//custom offset
    function offset__rel(rel) {
        let rect = document.querySelector(rel).getBoundingClientRect();
        const offset = {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
        };
        return offset;
    }


    function scroll_firstempty(e) {
        const BODY = (document.scrollingElement || document.body);
        const position = offset__rel(e).top;
        console.log(position, e);
        BODY.scrollTop = (position - 50);
    }

    function checkAll_requiredEmpty() {
        let blank = '';
        const allempty = [];
        const requiredFields = document.querySelectorAll('input[required]');

        requiredFields.forEach((field) => {
            if (field.value === blank) {
                allempty.push(1);
                field.parentElement.classList.add('has-error');
            } else {
                field.parentElement.classList.remove('has-error');
            }
        });

        return allempty.length;
    }

    function warning_requiredEmpty() {
        let blank = '';
        const allempty = [];
        const requiredFields = document.querySelectorAll('input[required]');
        let condition = false;
        requiredFields.forEach((field) => {
            if (field.value === blank) {
                const filterStyle = field.parentElement.parentElement.parentElement.parentElement.style.display;
                if (condition == false && filterStyle != 'none') {
                    scroll_firstempty(`#${field.getAttribute('id')}`);
                    condition = true;
                }
            }
        });

        return allempty.length;
    }

    function doCheckout_withoutEmptyFields(form) {
        if (checkAll_requiredEmpty() === 7) {
            //***>>> HERE ADD THE S4S FUNCTION:
            doCheckout(form, 'checkoutButton');
        } else {
            warning_requiredEmpty();
        }
    }
