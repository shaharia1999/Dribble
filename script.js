
$(document).ready(function(){ 
  $(window).scroll(function(){
    $(".navber").toggleClass('sticky',$(this).scrollTop()>0);
  });


  
  



 $(".iconimg").click(function(){
   $(".large-sceen-overlay").show();
 });
 $(" .mediai1 i").click(function(){
   $(".large-sceen-overlay").slideUp();
 })
 $(".iconimg1").click(function(){
  $(".search-menu").hide();
  $(".nav-item-media").slideDown(2000);
});
$("i.fas.fa-times").click(function(){
  $(".nav-item-media").hide();
  $(".search-menu").show();
});




$(".dropdown-container-HOME").hover(function(){
  $(".dropdown-contant-HOME").slideDown();
  $(".dropdown-contant-PAGE").hide();
  $(".dropdown-contant-SERVICE").hide();

   
});
$(".dropdown-contant-HOME").mouseleave(function(){
 $(".dropdown-contant-HOME").slideUp();
});
$(".dropdown-container-PAGE").hover(function(){
  $(".dropdown-contant-PAGE").slideDown();
  $(".dropdown-contant-HOME").hide();
  $(".dropdown-contant-SERVICE").hide();
  $(".dropdown-container-PROFILE .portfios-l").slideUp();


})
$(".dropdown-contant-PAGE").slideUp(3000);
;

$(".page-about").hover(function(){
  $(".dropdown-contant-PAGE1").slideDown();
  $(".dropdown-contant-PAGE2").slideUp();


});
$(".dropdown-contant-PAGE1").mouseleave(function(){
  $(".dropdown-contant-PAGE1").slideUp();
 });
 $(".page-shop").hover(function(){
  $(".dropdown-contant-PAGE2").slideDown();
  $(".dropdown-contant-PAGE1").hide();
 });
 $(".dropdown-contant-PAGE2").mouseleave(function(){
  $(".dropdown-contant-PAGE2").hide();
 });
;

$(".dropdown-container-SERVICE").hover(function(){
  $(".dropdown-contant-SERVICE").slideDown();
  $(".dropdown-contant-HOME").hide();
  $(".dropdown-container-PROFILE .portfios-l").hide();
  $(".dropdown-contant-PAGE").hide();

});
$(".dropdown-container-PROFILE").hover(function(){
  $(".dropdown-container-PROFILE .portfios-l").slideDown();
  $(".dropdown-contant-SERVICE").hide();
  $(".dropdown-contant-contract").hide();
  $(".dropdown-contant-PAGE").slideUp();

})
$(".dropdown-container-CONTRACT").hover(function(){
 $(".dropdown-contant-contract").slideDown();
 $(".dropdown-container-PROFILE .portfios-l").hide();



});
$("span.home-pluse").click(function(){
  $("span.home-minas").show();
  $("span.home-pluse").hide();
  $(".home-extra-div").show();
});
$("span.home-minas").click(function(){
  $(".home-extra-div").hide();
  $("span.home-pluse").show();
  $("span.home-minas").hide();

});

$(".page-pluse").click(function(){
  $("span.page-minas").show();
  $("span.page-pluse").hide();
  $(".page-extra-div").show();
});
$("span.page-minas").click(function(){
  $(".page-extra-div").hide();
  $("span.page-pluse").show();
  $("span.page-minas").hide();

});
$(".service-pluse").click(function(){
  $("span.service-minas").show();
  $("span.service-pluse").hide();
  $(".service-extra-div").show();
});
$("span.service-minas").click(function(){
  $(".service-extra-div").hide();
  $("span.service-pluse").show();
  $("span.service-minas").hide();

});
$(".portfoli-pluse").click(function(){
  $("span.portfoli-minas").show();
  $("span.portfoli-pluse").hide();
  $(".portfoli-extra-div").show();
});
$("span.portfoli-minas").click(function(){
  $(".portfoli-extra-div").hide();
  $("span.portfoli-pluse").show();
  $("span.portfoli-minas").hide();

});
$(".contract-pluse").click(function(){
  $("span.contract-minas").show();
  $("span.contract-pluse").hide();
  $(".contract-extra-div").show();
});
$("span.contract-minas").click(function(){
  $(".contract-extra-div").hide();
  $("span.contract-pluse").show();
  $("span.contract-minas").hide();

});



$("section").hover(function(){
  $(".dropdown-contant-PAGE").slideUp()
  $(".dropdown-contant-PAGE1").slideUp();
  $(".dropdown-contant-PAGE2").slideUp();
  $(".dropdown-contant-SERVICE").slideUp();
  $(".dropdown-container-PROFILE .portfios-l").slideUp();
  $(".dropdown-contant-HOME").slideUp();
  $(".dropdown-contant-contract").slideUp();
  $(".nav-item-media").hide();
  $(".search-menu").show();


});




});

$(".theam-container").owlCarousel({
  items:1,
  loop:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true
  
});


  $(".blog-row-2-1").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
   
  });
  
  

