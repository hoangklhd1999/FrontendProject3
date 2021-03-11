$(document).ready(function(){
    $(".navigation").click(function(){
        $(".dark-bg").addClass("dark-bg__active");
        $(".navigation-bar").addClass("navigation-bar__active");
        $(".close-nav").addClass("close-nav__active");
        $("body").attr("style","overflow: hidden");
    });
    
    $(".dark-bg, .close-nav").click(function(){
        $(".dark-bg").removeClass("dark-bg__active");
        $(".navigation-bar").removeClass("navigation-bar__active");
        $(".close-nav").removeClass("close-nav__active");
        $("body").attr("style","overflow: auto");
    });
    if($(document).width() <= 576){
        $(".social").removeClass("justify-content-end"); 
        $(".social").addClass("justify-content-center");
    }
    if($(document).width() > 576){
        if($(".social").hasClass("justify-content-center")){
            $(".social").removeClass("justify-content-center"); 
            $(".social").addClass("justify-content-end");
        }
    }
});
