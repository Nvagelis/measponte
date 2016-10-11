$(document).ready(function (){
    
    var $win = $(window);
    var $body = $('body');
    var $slides = $('.pg-slider').find('.phts');
    var active = 1;

    var hh = 100+'vh';
    var ww = $win.width();
    
    function setParallax(number){
        function parallax(e, target, layer) {
            var layer_coeff = 20 / layer;
            var x = Math.round(0.1 * (e.pageX - (ww / 2)) / layer_coeff);
            var y = Math.round(0.1 * (e.pageY - (ww / 2)) / layer_coeff);
            target.css({'-webkit-transform': 'translateX('+x+'px) translateY('+y+'px)',
                        '-ms-transform': 'translateX('+x+'px) translateY('+y+'px)',
                        'transform': 'translateX('+x+'px) translateY('+y+'px)'});
        }
        $body.mousemove(function (e) {
            parallax(e, $(".photo"+number+" .m"), 1);
            parallax(e, $(".photo"+number+" .e"), 2);
            parallax(e, $(".photo"+number+" .a"), 3);
            parallax(e, $(".photo"+number+" .s"), 4);
            parallax(e, $(".photo"+number+" .p"), 5);
            parallax(e, $(".photo"+number+" .o"), 6);
            parallax(e, $(".photo"+number+" .n"), 7);
            parallax(e, $(".photo"+number+" .t"), 8);
            parallax(e, $(".photo"+number+" .ee"), 9);
            parallax(e, $(".photo"+number+" img"), 10);
        });
    }
    
    function brurInvOut(){
        $('.active img, .active .letter').removeClass('blurInv');
        $('.active img').addClass('blur');
    }
    function  blurInvIn(number){
        $('.active').removeClass('active');
        $(".photo"+number+" img, .photo"+number+" .letter").removeClass("blur");
        $(".photo"+number+" img").addClass("blurInv");
        $(".photo"+number+" .first-l").addClass("blurInv1");
        $(".photo"+number+" .second-l").addClass("blurInv2");
        $(".photo"+number+" .third-l").addClass("blurInv3");
        $(".photo"+number+" .fourth-l").addClass("blurInv4");
        $(".photo"+number+" .fifth-l").addClass("blurInv5");
    }
    function showHideArrow($el1, $el2, num){
        if($el1.hasClass('hideimg')){$el1.removeClass('hideimg');}
        if(active === num){$el2.addClass('hideimg');}
    }
    
    function nextsub(number){
        blurInvIn(number);
        $('.photo'+number+' img').animate({top: "-="+hh}, 500);
        $(".photo"+number+" .letter").each(function(i){
                var li = $(this);
                setTimeout(function(){
                    li.addClass('blurInv');
                    li.animate({top: "-="+hh}, (i+1)*50);
                }, (i+1)*50);
            });
        
        $('.photo'+number).addClass('active');
        setTimeout(function(){
            setParallax(number);
        },1500);
    } 
    
    function prevsub(number){
        blurInvIn(number);
        $(".photo"+number+" img").animate({top: "+="+hh}, 500);
        $(".photo"+number+" .letter").each(function(i){
            var li = $(this);
            setTimeout(function(){
                    li.addClass('blurInv');
                    li.animate({top: "+="+hh}, (i+1)*50);
            }, (i+1)*50);
        });
        $(".photo"+number).addClass("active");
        setTimeout(function(){
            setParallax(number);
        },1500);
    }
    
    function nextcol(active){
        $body.off('mousemove');
        brurInvOut();
        $('.active img').animate({top: "-="+hh}, 500);
        
        $($('.active .letter').get().reverse()).each(function(i){
            var li = $(this);
            setTimeout(function(){
                    li.addClass('blur');
                    li.animate({top: "-="+hh}, (i+1)*50);
            }, (i+1)*50);
        });
        showHideArrow($('.prev'),$('.next'), $slides.length);
        setTimeout(function(){
                nextsub(active);
        },500);
    }
    
    function prevcol(){
        $body.off('mousemove');
        brurInvOut();
        $(".active img").animate({top: "+="+hh}, 500);
        
        $($('.active .letter').get().reverse()).each(function(i){
            var li = $(this);
            setTimeout(function(){
                    li.addClass('blur');
                    li.animate({top: "+="+hh}, (i+1)*50);
            }, (i+1)*50);
        });
        showHideArrow($('.next'),$('.prev'), 1);
        setTimeout(function(){
                prevsub(active);
        },500);
    }
    
    function scroll(k){
        if(k < 0){
            if(active > $slides.length-1 || $('.pg-slider').find('img').is(':animated')){return;}
                active ++;
                nextcol(active);
        }else{
            if(active <= 1 || $('.pg-slider').find('img').is(':animated')){return;}
                active --;
                prevcol(active);
        }
    }
    
    $('.pg-slider').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
    e.preventDefault();
    var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        scroll(delta);
    });
    $('.prev').click(function(){
        if(active <= 1 || $('.pg-slider').find('img').is(':animated')){return;}
        active --;
        prevcol(active);
    });
    $('.next').click(function(){
        if(active > $slides.length-1 || $('.pg-slider').find('img').is(':animated')){return;}
        active ++;
        nextcol(active);
    });
    
    setTimeout(function (){
        nextsub(1);
    }, 1600);
});


