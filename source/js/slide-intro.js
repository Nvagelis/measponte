$(window).load(function(){
    
    var $win = $(window);
    var $slider = $('.slider');
    var $arrow = $('.arrow-big');
    
    var $slides = $slider.find('li');
    var current = 0;
    var $view = $('.viewpoint');
    var $prev = $('.control-button .prev');
    var $next = $('.control-button .next');
    
    function sliderWidth(){
        var sliderWdth = $win.width()/2;
        var arrowWdth = $win.width()/5;
        
        $slider.width(sliderWdth);
        var slederHeight = $slider.find('img').height();
        
        $slider.height(slederHeight);
        $arrow.width(arrowWdth);
        $arrow.css({right: (320 + sliderWdth - arrowWdth/2) + 'px'});
        
    }
    
    $slides.each(function (i){
        $(this).css({transform: 'translate(' + i*100 + '%, 0%)'});
    });
    
    function move(pos){
        $view.animate({  view: (100*pos) }, {
            step: function(now) {
            $(this).css('transform','translate(-' + now + '%, 0%)');  
        },
        duration:'500'
        },'linear');
    }
    
    $next.on('click', function (e){
        e.preventDefault();
    if(current >= $slides.length-1 || $view.is(':animated')){return false;}
        current ++;
        move(current);
    });
    $prev.on('click', function (e){
        e.preventDefault();
        if(current <= 0 || $view.is(':animated')){return  false;}
        current --;
        move(current);
    });
    
    sliderWidth();
    $win.resize(sliderWidth);
    

});


