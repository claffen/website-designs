// dark - light mode

document.querySelector('.dark-toggle-box').addEventListener('click', lightMode = () => {

    document.body.classList.toggle('light');
    localStorage.setItem('mode', document.body.classList);
});

// dark - light mode local storage

if(localStorage.getItem('mode') != "") {

    document.body.classList.add(localStorage.getItem('mode'));
}

// down arrow click event

document.querySelector('.down-arrow').addEventListener('click', scrollEvent = () => {

    window.scrollBy(0,1000);
});

// hamburger menu

const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', hamburgerMenu = () => {

    document.querySelector('.nav-list-elements').classList.toggle('show');
});