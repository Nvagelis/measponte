$(window).load(function() {
    var $win = $(window);
    var $insta = $('.instagram-1');
    var $el = $('.facebook').find('.fb-wrap');
    
    function fixHeight(){
        var winwidth = $win.width();
        var elHeight = $insta.height();
        if (winwidth < 650){
            $el.innerHeight(elHeight/2);
        } else{
            $el.innerHeight(elHeight);
        }
    }
    
    fixHeight();
    $win.resize(fixHeight);
    
});


