$(function(){
    var sl=$("ul.wi-topline-cont1")
    sl.ready(function autoPlay(){
        sl.animate({bottom:'.5rem'},2000);
        sl.animate({bottom:'+=.5rem'},2000);
        sl.animate({bottom:'+=.5rem'},2000);
        sl.animate({bottom:'0'},0);
        setTimeout(autoPlay,2000)
    })

})