$(function() {

    let productSlider=$('#productSlider');
    productSlider.slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5
                }
              },
              {
                breakpoint: 1040,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 830,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 650,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
        ]
        
        
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
        arrows: false,
        responsive: [
          {
              breakpoint: 950,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
        ]
    });

    $('#slideLeftComp').on('click',function(){
        sliderCompany.slick('slickPrev');
    });

    $('#slideRightComp').on('click',function(){
        sliderCompany.slick('slickNext');
    });
//================Add to Cart========================

    $('.btn-prod').on("click", function(){
        $('.cart span').addClass('summ--active')
        let count = $('#count').html();
        count = Number(count) + 1;
         $('#count').html(count);
        });

});
//================Active To Click=====================
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

//==================Scroll to Top========================
let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

//================================Modal============================
$(function() {
    $('[data-modal]').on('click',function(event){
        event.preventDefault();

        let modal=$(this).data('modal');
        $('body').addClass('no-scroll');
        $(modal).addClass('show');
    });

    $('[data-modal-close]').on('click',function(event){
        event.preventDefault();

        let modal=$(this).parents('.mod');
        $('body').removeClass('no-scroll');
        $(modal).removeClass('show');
    });

    $('.mod').on('click',function(){
        $('body').removeClass('no-scroll');
        $(this).removeClass('show');
    });

    $('.mod__inner').on('click',function(event){
        event.stopPropagation();
    });
});