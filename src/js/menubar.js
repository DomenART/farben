(function () {

    let menubar = document.querySelector('.menubar');

    if (menubar) {

        if (window.matchMedia("(max-width: 960px)").matches) {
            menubar.setAttribute('uk-offcanvas', 'overlay: false');
        }

    }

}) ();