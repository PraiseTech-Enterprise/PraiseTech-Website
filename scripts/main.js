
// all the constant variable


// getting the classes using dom in a global state ( you can also define your global variables here)
//but NOTE its going to be a constant

const menuBtn = document.querySelector('.menuBtn');
const hamburger = document.querySelector('.menuBtnBurger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menuNav');
const navItems = document.querySelectorAll('.menuNavItem')

// setting the initial state of the menu to false

let showMenu = false;

//event listener for the menu button

menuBtn.addEventListener('click', toggleMenu);

//function to toggle menu
function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));


        showMenu = true;
    }
    else{
        hamburger.classList.remove('open')
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

//other javascript code goes below here 