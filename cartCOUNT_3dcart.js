jQuery(document).ready(function() {

    var countCart = $('#cartCOUNT');
    var intVAL = parseInt(countCart.text().replace(/[()]/g, ''));
    var cartBody = $('.cart-area');

    if(intVAL >= 1){
        $('.cart-mob-count').html('('+intVAL+')');
        cartBody.addClass('hidden');
    }else{
        $('.cart-mob-count').html('');
        cartBody.removeClass('hidden');
    }

});
