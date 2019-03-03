$(document).ready(function() {

    $('.carousel').carousel({
        interval: false
    })

    $(".slider").slick({

        // normal options...
        autoplay: false,
        slidesToShow: 4,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: "35px",
        mobileFirst: true,

        // the magic
        responsive: [
            {
                
                breakpoint: 320,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    infinite: true,
                    focusOnSelect: true,
                    centerMode: true,
                    centerPadding: "35px",
                    mobileFirst: true
                }
            },
            {
                
                breakpoint: 768,
                settings: {
                    autoplay: false,
                    slidesToShow: 2,
                    infinite: true,
                    focusOnSelect: true,
                    centerMode: true,
                    centerPadding: "35px",
                    mobileFirst: true
                }
            },
            {
                
                breakpoint: 1200,
                settings: {
                    autoplay: false,
                    slidesToShow: 4,
                    infinite: true
                }
            }
            
        ]
    });

    $('input[type="number"]').niceNumber({

        // auto resize the number input
        autoSize: true,
      
        // the number of extra character
        autoSizeBuffer: 1,
      
        // custom button text
        buttonDecrement: "",
        buttonIncrement: "",
      
        // 'around', 'left', or 'right'
        // buttonPosition: 'around'
        
    });

    $('.show-more').showMore({
        minheight: 640,
        buttontxtmore: 'Показать ещё',
        buttontxtless: 'Скрыть',
        animationspeed: 1000
    });

    $('body').showMoreItems();
    // $( "#accordion" ).accordion();
    var icons = {
        header: "iconClosed",    // custom icon class
        activeHeader: "iconOpen" // custom icon class
    };
    $( "#accordion" ).accordion({
            icons: icons
        }
    );
    
});