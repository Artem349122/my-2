$(function() {

    let productSlider=$('#productSlider');
    productSlider.slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false
        
    });

    $('#slideLeftProd').on('click',function(){
        productSlider.slick('slickPrev');
    });

    $('#slideRightProd').on('click',function(){
        productSlider.slick('slickNext');
    });

    //===========Slider Company===========

    let sliderCompany=$('.slider-company');
    sliderCompany.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
    });

    $('#slideLeftComp').on('click',function(){
        sliderCompany.slick('slickPrev');
    });

    $('#slideRightComp').on('click',function(){
        sliderCompany.slick('slickNext');
    });

});

