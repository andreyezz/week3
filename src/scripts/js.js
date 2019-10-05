 $('.slider1').slick();




 $('.slider2').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 2,
     centerMode: true,
     variableWidth: true
 });


 $('.js-button-campaign').click(function() {

     $('.js-overlay-campaign').fadeIn();
     $('.js-overlay-campaign').addClass('disabled');
 });

 $('.js-close-campaign').click(function() {
     $('.js-overlay-campaign').fadeOut();

 });

 $(document).mouseup(function (e) {
     var popup = $('.js-popup-campaign');
     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
         $('.js-overlay-campaign').fadeOut();

     }
 });