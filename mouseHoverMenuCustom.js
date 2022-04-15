const menuDesktop = document.querySelectorAll(".header__inline-menu details");

function handleEventShow(link) {
  
    link.addEventListener('click', () => {
        window.location.href = link.querySelector('span').dataset.url;
    });

    link.addEventListener('mouseover', (e) => {
        
        if (e.target.className.indexOf) {
            if (e.target.className.indexOf('caption-large') === -1) {
                [...menuDesktop].map(linkClean => linkClean.removeAttribute('open'))
            }
        }
    
  		link.setAttribute('open', true);
    
    });

    link.addEventListener('mouseout', (e) => {
        if (e.target.className.indexOf) {
            if (e.target.className.indexOf('caption-large') === -1) {
                link.removeAttribute('open');
            }
        }
    });

}

const isNotMobile = window.matchMedia('(min-width: 991px)');


if(isNotMobile){
    [...menuDesktop].map(link => handleEventShow(link));
    
    document.getElementById('MainContent').addEventListener('mouseover', (e) => {
        if (e.target.className.indexOf('caption-large') === -1) {
            [...menuDesktop].map(linkClean => linkClean.removeAttribute('open'));
        }
    });
}
