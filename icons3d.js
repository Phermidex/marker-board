const paymentList = [
  "Sezzle",
  "eCheck",
  "PayPal",
  "Venmo",
  "ZELLE",
  "Money Order"
];

function findAndDetect(string) {

  let variants = {
    return: false,
    word: ''
  };

  paymentList.forEach((key) => {
    if (string.includes(key)) {
      const classCSS = key.replace(' ', '_');
      variants = {
        return: true,
        word: classCSS
      };
    }
  });

  return variants;
}

const sezzle_banner = `<div class="promo-info hidden">
  <img src="/assets/images/Banners/sezzle-info.png">
</div>`;


function iconsPayments(indentity) {

  const allPaymentab = document.querySelectorAll(`#divPaymentMethods ${indentity}`);

  allPaymentab.forEach((payment) => {

    const string = payment.innerText;
    const detected = findAndDetect(string);
    if (detected.return === true) {
      payment.classList.add(`${detected.word}-icon`);
      if(string == "Sezzle"){
           payment.insertAdjacentHTML('beforeend', sezzle_banner);
       }
    }

  });

}


iconsPayments('div.dpm-provider');
iconsPayments('.customGateway');
