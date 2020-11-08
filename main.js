window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
          {
            // screens greater than >= 800px
            breakpoint: 800,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 2,
              itemWidth: 150,
              duration: 0.25
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          }
        ]
    });
});

document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

