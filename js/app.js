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

let footer=document.getElementById("navF");
let btns=footer.getElementsByClassName("foot-list__link");


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("foot--active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" foot--active", "");
    }
    this.className +=" foot--active";
    });
}

let header=document.getElementById("navH");
let btn=header.getElementsByClassName("nav__link");


for (let i = 0; i < btns.length; i++) {
    btn[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("link--active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" link--active", "");
    }
    this.className +=" link--active";
    });
}
