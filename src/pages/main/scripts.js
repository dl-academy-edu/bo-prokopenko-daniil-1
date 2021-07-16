var popupBtn = document.querySelector('.banner-js');
var popupForm = document.querySelector('.popup-form');
var popupOverlay = document.querySelector('.popup-overlay');
var popupClose = document.querySelector('.popup-form__close-btn');
var input = popupForm.querySelector('input');

popupBtn.addEventListener('click', function() {
    popupForm.classList.add('popup-form_open');
    popupOverlay.classList.add('popup-overlay_open');
    input.focus();
})

popupClose.addEventListener('click', function() {
    popupForm.classList.remove('popup-form_open');
    popupOverlay.classList.remove('popup-overlay_open');
})


window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        if(popupForm.classList.contains('popup-form_open')) {
            popupForm.classList.remove('popup-form_open');
            popupOverlay.classList.remove('popup-overlay_open');
        }
    }
});

// @import "./modal-window/modal-window";

var openBtn = document.querySelector('.header-mobile__popup-menu-open-btn_js');
var menu = document.querySelector('.header-mobile__popup-menu-wrapper_js');
var closeBtn = document.querySelector('.header-mobile__popup-menu-close-btn_js');


openBtn.addEventListener('click', function() {
    menu.classList.add('header-mobile__popup-menu-wrapper_open');
    openBtn.classList.add('header-mobile__popup-menu-open-btn_open');
    closeBtn.classList.add('header-mobile__popup-menu-close-btn_open');
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('header-mobile__popup-menu-wrapper_open');
    openBtn.classList.remove('header-mobile__popup-menu-open-btn_open');
    closeBtn.classList.remove('header-mobile__popup-menu-close-btn_open');
})


window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        if(menu.classList.contains('header-mobile__popup-menu-wrapper_open')) {
            menu.classList.remove('header-mobile__popup-menu-wrapper_open');
        };
        if(openBtn.classList.contains('header-mobile__popup-menu-open-btn_open')) {
            openBtn.classList.remove('header-mobile__popup-menu-open-btn_open');
        };
        if(closeBtn.classList.contains('header-mobile__popup-menu-close-btn_open')) {
            closeBtn.classList.remove('header-mobile__popup-menu-close-btn_open');
        };
    }
})
