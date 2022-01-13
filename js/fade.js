


// function fadeAll() {
//     if($(window).width() < 768)  {
//                 function fadeBottom() {
//                     let windowBottom = $(window).scrollTop() + $(window).height();
                    
//                     $('.fade.bottom').each(function () {
//                     let playHeight = $(this).position().top + $(this).outerHeight();
                    
//                     if(windowBottom > playHeight) {
                        
//                         $(this).css({'transform':'translateY(0px)'});
//                         $(this).animate({'opacity': '1'}, 1);
//                     } else if(windowBottom < playHeight) {
                        
//                         $(this).css({'transform':'translateY(50px)'});
//                         $(this).animate({'opacity': '0'}, 1);
//                     }
//                     })
                    
//                     }
                
                
//                 $(window).on('scroll', fadeBottom);

//                 function fadeMiddle() {
//                     let windowBottom = $(window).scrollTop() + $(window).height();
                    
//                     $('.fade.middle').each(function () {
//                     let playHeight = $(this).position().top + $(this).outerHeight() * 2 /3;
                    
//                     if(windowBottom > playHeight) {
                        
//                         $(this).css({'transform':'translateY(0px)'});
//                         $(this).animate({'opacity': '1'}, 1);
//                     } else if(windowBottom < playHeight) {
                        
//                         $(this).css({'transform':'translateY(50px)'});
//                         $(this).animate({'opacity': '0'}, 1);
//                     }
//                     })
                    
//                     }
                
//                 $(window).on('scroll', fadeMiddle);

//                 function fadeTop() {
//                     let windowBottom = $(window).scrollTop() + $(window).height();
                    
//                     $('.fade.top').each(function () {
//                     let playHeight = $(this).position().top + $(this).outerHeight() * 1 /3
                    
//                     if(windowBottom > playHeight) {
                        
//                         $(this).css({'transform':'translateY(0px)'});
//                         $(this).animate({'opacity': '1'}, 1);
//                     } else if(windowBottom < playHeight) {
                        
//                         $(this).css({'transform':'translateY(50px)'});
//                         $(this).animate({'opacity': '0'}, 1);
//                     }
//                     })
                    
//                     }
                
//                 $(window).on('scroll', fadeTop);


//                 function scalePin() {
//                     let windowBottom = $(window).scrollTop() + $(window).height();
                    
//                     $('.pin').each(function () {
//                     let playHeight = $(this).position().top + $(this).parent().outerHeight();
                    
//                     if(windowBottom > playHeight) {
                        
//                         $(this).css({'transform':'scaleX(1)'});
//                         $(this).animate({'opacity': '1'}, 1);
//                     } else if(windowBottom < playHeight) {
                        
//                         $(this).css({'transform':'scaleX(0)'});
//                         $(this).animate({'opacity': '0'}, 1);
//                     }
//                     })
                    
//                     }
                
//                 $(window).on('scroll', scalePin);


//     }

// })

// fadeAll();

function fadeBottom() {
    let windowBottom = $(window).scrollTop() + $(window).height();
    
    $('.fade.bottom').each(function () {
    let playHeight = $(this).position().top + $(this).outerHeight();
    
    if(windowBottom > playHeight) {
        
        $(this).css({'transform':'translateY(0px)'});
        $(this).animate({'opacity': '1'}, 1);
    } else if(windowBottom < playHeight) {
        
        $(this).css({'transform':'translateY(50px)'});
        $(this).animate({'opacity': '0'}, 1);
    }
    })
    
    }


$(window).on('scroll', fadeBottom);

function fadeMiddle() {
    let windowBottom = $(window).scrollTop() + $(window).height();
    
    $('.fade.middle').each(function () {
    let playHeight = $(this).position().top + $(this).outerHeight() * 2 /3;
    
    if(windowBottom > playHeight) {
        
        $(this).css({'transform':'translateY(0px)'});
        $(this).animate({'opacity': '1'}, 1);
    } else if(windowBottom < playHeight) {
        
        $(this).css({'transform':'translateY(50px)'});
        $(this).animate({'opacity': '0'}, 1);
    }
    })
    
    }

$(window).on('scroll', fadeMiddle);

function fadeTop() {
    let windowBottom = $(window).scrollTop() + $(window).height();
    
    $('.fade.top').each(function () {
    let playHeight = $(this).position().top + $(this).outerHeight() * 1 /3
    
    if(windowBottom > playHeight) {
        
        $(this).css({'transform':'translateY(0px)'});
        $(this).animate({'opacity': '1'}, 1);
    } else if(windowBottom < playHeight) {
        
        $(this).css({'transform':'translateY(50px)'});
        $(this).animate({'opacity': '0'}, 1);
    }
    })
    
    }

$(window).on('scroll', fadeTop);


function scalePin() {
    let windowBottom = $(window).scrollTop() + $(window).height();
    
    $('.pin').each(function () {
    let playHeight = $(this).position().top + $(this).parent().outerHeight();
    
    if(windowBottom > playHeight) {
        
        $(this).css({'transform':'scaleX(1)'});
        $(this).animate({'opacity': '1'}, 1);
    } else if(windowBottom < playHeight) {
        
        $(this).css({'transform':'scaleX(0)'});
        $(this).animate({'opacity': '0'}, 1);
    }
    })
    
    }

$(window).on('scroll', scalePin);


