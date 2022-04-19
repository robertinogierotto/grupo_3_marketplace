window.onload = function(){
    
let burgerMenu = document.querySelector('.burger-menu');
let burgerDropDown = document.querySelector('.dropdown-burger');
let userDropDown = document.querySelector('.userAll');
let userActions = document.querySelector('.userAcctions');

burgerMenu.addEventListener('click', e => {
    burgerDropDown.style.display = 'block';
})

burgerDropDown.addEventListener('mouseleave', e => {
    burgerDropDown.style.display = 'none';
})

userDropDown.addEventListener('click', e => {
    userActions.style.display = 'block';
})

userActions.addEventListener('mouseleave', e => {
    userActions.style.display = 'none';
})
};