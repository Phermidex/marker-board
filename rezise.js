function cathMENUW(){
    var mobelieW = document.body.offsetWidth - 38;
    var w = mobelieW > 310 ? 310 : mobelieW;
    document.querySelector('.close-xt').style.left = `${w}px`;
}

window.addEventListener('resize', function(){
    cathMENUW();
});

(()=>{
    cathMENUW();
})();
