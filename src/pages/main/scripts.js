var popupBtn = document.querySelector('.banner-js');
var popupForm = document.querySelector('.popup-form');
var popupOverlay = document.querySelector('.popup-overlay');
var popupClose = document.querySelector('.popup-close');
var input = popupForm.querySelector('input');

popupBtn.addEventListener('click', function() {
    popupForm.classList.add('popup-open');
    popupOverlay.classList.add('popup-overlay-open');
    input.focus();
})

popupClose.addEventListener('click', function() {
    popupForm.classList.remove('popup-open');
    popupOverlay.classList.remove('popup-overlay-open');
})


window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        if(popupForm.classList.contains('popup-open')) {
            popupForm.classList.remove('popup-open');
            popupOverlay.classList.remove('popup-overlay-open');
        }
    }
})