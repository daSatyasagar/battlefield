$(window).scroll(function(){
  if($(window).scrollTop()){
    $("nav").addClass("toggle");
  }
  else{
    $("nav").removeClass("toggle");
  }
});

console.log("hello");
