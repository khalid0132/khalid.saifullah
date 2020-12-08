$(function(){

    var html_body = $('html,body');
    var back2top = $('.back2top');
    
    back2top.click(function(){
        html_body.animate({scrollTop:0},1000);
    });
 
    // testimonial slide
    $('.testimonial_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });
    
    //scrolling;
    $(window).scroll(function(){
        
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 50){
           $('.navbar').addClass("bg");
        }
        else{
            $('.navbar').removeClass("bg");
        }

        if(scrolling > 300){
            back2top.fadeIn(500);
        }  
        else{
            back2top.fadeOut(500);
        }
        
    });
    
    //animation scroll js
    $('.navbar-nav .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 800);
                return false;
            }
        }
    });
});