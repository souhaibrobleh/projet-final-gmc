// function checkScroll(){
//     var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

//     if($(window).scrollTop() > startY){
//         $('.navbar').addClass("scrolled");
//     }else{
//         $('.navbar').removeClass("scrolled");
//     }
// }

// if($('.navbar').length > 0){
//     $(window).on("scroll load resize", function(){
//         checkScroll();
//     });
// }



$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })