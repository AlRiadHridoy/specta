//******** Target Navbar
const hamburger = document.querySelector('.toggle');
const main = document.querySelector(".top-banner img");
const nav = document.querySelector("nav ul")
const navAnchor = document.querySelectorAll("nav ul li a");
const cards = document.querySelector('.pricing-cards');
const miniCards = document.querySelector('.choice-cards');
const header = document.querySelector('header');
const banner = document.querySelector('.home-container');

//*************************** Menu Animation
// Hmaburger Function
let arr = ['top', 'middle', 'bottom'];
const hamburgerFunc = function() {
    i = 0;
    for (let element of hamburger.children) {
        element.classList.toggle(arr[i]);
        i ++;
    };
};

hamburger.addEventListener('click', function() {
    hamburgerFunc();
    nav.classList.toggle("toggle-left");
});

for (let element of nav.children) {
    element.addEventListener("click", function(){
        hamburgerFunc();
        nav.classList.toggle("toggle-left");
    });
};

navAnchor.forEach(ele => {
    ele.addEventListener('click', function(){
        navAnchor.forEach(li => li.classList.remove('temp'));
        ele.classList.add('temp');
    })
})

option = {
    rootMargin: '-150px'
};
const menuDown = new IntersectionObserver(function(entries, menuDown){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('header-clr');
        }
        else {
            header.classList.remove('header-clr');
        }
    });
}, option);
menuDown.observe(banner);

//*************************** Banner Animation
const mainObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'bannerAnimation 1s';
        }
    });
});

mainObserver.observe(main);

//***************************  Cards/miniCards Animations
const func = {
    treshold: 10,
    rootMargin: '150px',
}
var a = .1;
const observer = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `cardAnime .8s ${a+'s'} forwards ease-in-out`;
            a += .2;
        }
    });
    a = .1;
});

let arrElement = [cards.children, miniCards.children];
for (let child of arrElement) {
    for (let element of child) {
        observer.observe(element);
    }
}
