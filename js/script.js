$(document).ready(function(e){
  $(".hamburger").on("click",function(e){
    $(".menu").toggleClass('active');
    $(".menu").on("click",function(){
      if($(".menu").hasClass("active")){
        $(".menu").toggleClass('active');
      }
    })
  });
  stickyElements(".hamburger",{
    stickiness: 5,
    duration:1000
  });
});
