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


  function myFunction() {
    <a href="image/10636286_737783919627212_3286028981064425882_n.jpg" class="highslide" onclick="return hs.expand(this)">
                                    <img src="image/10636286_737783919627212_3286028981064425882_n.jpg"  class="bd-placeholder-img card-img-top " width="100%" height="225"    alt="Highslide JS"
                                        title="Click to enlarge" height="120" width="10" />
                                      </a>   
  }