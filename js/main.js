$( document ).ready( function () {

    //****    Настройки слайдеров    ****
    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            480: {
                items: 1
            },
        }
    });

    $('.carousel--featured').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: [],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            680: {
                items: 3
            },
            1024: {
                items: 4
            },
        }
    });

    $('.carousel--types').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            540: {
                items: 2,
                margin: 20
            },
            768: {
                items: 3,
            },
        }
    });

    $('.carousel--blog').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            540: {
                items: 2,
                margin: 20
            },
            768: {
                items: 2,
            },
            1024: {
                items: 2,
            }
        }
    });

    //****    Форма поиска    ****

    const iconSearch = document.querySelector('.icons__search' );
    const body = document.querySelector('body' );

    iconSearch.addEventListener('click', function ( event ) {
        event.stopPropagation();
        this.classList.add('icons__search--active');
    });

    body.addEventListener('click', function ( event ) {
        iconSearch.classList.remove('icons__search--active' );
    });
});