$(document).ready(function () {

  slickSliderInit();
  tabActive();
});

function tabActive() {
  var tabActive = $('.tabs__button input:checked')[0].id;
  if( tabActive === 'tenants' ) {
    $('.tabs__oweners').removeClass('tabs__active');
    setTimeout(function () {
      $('.tabs__oweners').addClass('pos__absolute');
      $('.tabs__tenants').removeClass('pos__absolute').addClass('tabs__active');
    },500);
  } else {
    $('.tabs__tenants').removeClass('tabs__active');
    setTimeout(function () {
      $('.tabs__tenants').addClass('pos__absolute');
      $('.tabs__oweners').removeClass('pos__absolute').addClass('tabs__active');
      $('.tabs__oweners').removeClass('pos__absolute').addClass('tabs__active');

    },500);
  }
}

function slickSliderInit() {
  $('.sl').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 300,
    autoplay: true
  });

  $('.tape__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    autoplay: true,
    responsive: [{
      breakpoint: 892,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 678,
      settings: {
        slidesToShow: 1,
      }
    }]
  });


}