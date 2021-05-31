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
})