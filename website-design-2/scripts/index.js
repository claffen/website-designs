// responsive menu

const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.responsive-navbar');

menuToggle.addEventListener('click', responsiveNavBar = () => {
    navBar.classList.toggle('show');

    if(navBar.classList.contains('show')) {
        menuToggle.classList.add('fa-times');
        menuToggle.classList.remove('fa-bars');
    } else {
        menuToggle.classList.add('fa-bars');
        menuToggle.classList.remove('fa-times');
    }
});

// dark / light mode

const darkToggle = document.querySelector('.dark-toggle');

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('mode', document.body.classList);
});

if(localStorage.getItem('mode') != '') {
    document.body.classList.add(localStorage.getItem('mode'))
}