
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    navText:['<div class="nav-btn prev-slide"> <i class="fas fa-arrow-alt-circle-left"></i> </div>'  ,  '<div class="nav-btn next-slide"> <i class="fas fa-arrow-alt-circle-right"></i> </div>'],
    //navText:[nexticon,previcon],
    
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})
 