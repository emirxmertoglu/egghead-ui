$(document).ready(function () {
    var burgerMenu = $('.burger-menu')
    var mobileHeader = $('.mobile-header');

    burgerMenu.click(() => {
        mobileHeader.toggleClass('active')
    })
})