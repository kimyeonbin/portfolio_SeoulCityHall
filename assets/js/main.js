$(function(){
    /**
     * @사이트언어변경_버튼
     */
    $('#langBtn').click(function(){
        url=$('#langList').val();
        location.href=url;
    });
    /**
     * @메인비주얼_슬라이드
     */
    const mainSlide = new Swiper('.main-slide',{
        loop:true,
        autoplay: {
            delay: 1700,
            disableOnInteraction: false
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        pagination:{
            el:'.fraction',
            type:'fraction'
        },
        on:{
            "slideChange":function(){
                if(this.realIndex >= 5){
                    $('.sc-visual .citizen').addClass('active').siblings().removeClass('active');
                }else{
                    $('.sc-visual .news').addClass('active').siblings().removeClass('active');
                };
            }
        }
    });
    $('.main-slide .autoplay').click(function(){
        if($(this).hasClass('on')){
            mainSlide.autoplay.start();
        }else{
            mainSlide.autoplay.stop();
        }
        $(this).toggleClass('on');
    });
    $('.sc-visual .group-nav .btn-nav').click(function(){
        idx=$(this).data('index');
        $(this).addClass('active').siblings().removeClass('active');
        mainSlide.slideToLoop(idx);
    });
    /**
     * @상단으로올라가는_버튼
     */
    $(window).scroll(function(){
        curr=$(this).scrollTop();
        if(curr >= 20){
            $('.fix-btn .btn-top').addClass('show');
        }else{
            $('.fix-btn .btn-top').removeClass('show');
        };
    });
    $('.fix-btn .btn-top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"});
    });
    /**
     * @하단배너_슬라이드
     */
    const bannerSlide = new Swiper('.banner-slide',{
        slidesPerView:3,
        spaceBetween:43,
        loop:true,
        autoplay: {
            delay: 1700,
            disableOnInteraction: false
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        pagination:{
            el:'.fraction',
            type:'fraction'
        }
    });
    $('.banner-slide .autoplay').click(function(){
        if($(this).hasClass('on')){
            bannerSlide.autoplay.start();
        }else{
            bannerSlide.autoplay.stop();
        };

        $(this).toggleClass('on');
    });
    /**
     * @하단연관사이트_버튼
     */
    $('.sc-related .btn-related').click(function(){
        if($(this).hasClass('on')){
            $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').slideUp();
            return false;
        };
        $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').slideUp();
        $(this).addClass('on').siblings('.sub-area').slideDown();
    });
    $('.sc-related .sub-list li:first-child').keydown(function(e){
        keyCode = e.keyCode;
        if(keyCode === 9 && e.shiftKey){
            $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').slideUp();
        };
    });
    $('.sc-related .sub-list li:last-child').keydown(function(e){
        keyCode = e.keyCode;
        if(keyCode === 9 && !e.shiftKey){
            $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').slideUp();
        };
    });
})