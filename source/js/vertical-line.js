$(document).ready(function (){
    $(window).scroll(function(){
        var $win = $(window);
        var scrolltop = $win.scrollTop();
        var upHeight = 80 - (scrolltop/2);
        var downHeight = (scrolltop/2);
        
        var $upLine = $(".vert-line");
        var $downLine = $(".vert-line-sec");
        var $scrollText = $(".scroll-text p");
        
        $upLine.height(upHeight);
        
        if (downHeight <= 80){
            $downLine.height(downHeight);
        }
        
        if($upLine.height() === 0){
            $scrollText
                .removeClass('animated slideUp')
                .addClass('animated slideDwon');
        }
        if($upLine.height() === 80){
            $scrollText
                .removeClass('animated slideDwon')
                .addClass('animated slideUp');
        }
    });
});


