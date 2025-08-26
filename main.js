const buttonMenu = document.querySelector('.mobile-navigation__header-button');
const mobileNavigation = document.querySelector('.mobile-navigation');

buttonMenu.addEventListener('click', buttonMenuClicked);

function buttonMenuClicked(){
    mobileNavigation.classList.toggle('opened');
}

const scrollButton = document.getElementById('scroll-to-top');
scrollButton.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
