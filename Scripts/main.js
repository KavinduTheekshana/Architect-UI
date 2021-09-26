// ----------- Gallery Show and Hide ---------------
function myGallery() {
    var val = 0;
    var x = document.getElementById('second-menu-gallery');
    if ($( "#second-menu-gallery" ).hasClass( "d-none" )) {
        $("#second-menu-gallery").removeClass("d-none");
        $("#second-menu-about").addClass("d-none");
        $("#second-menu-gallery-content").addClass("d-none");
        $("#second-menu-awards").addClass("d-none");
        $("#gallery-menu").addClass("active");
        $("#awards-menu").removeClass("active");
      } else{
        $("#second-menu-gallery").addClass("d-none");
        $("#second-menu-about").removeClass("d-none");
        $("#second-menu-gallery-content").removeClass("d-none");
        // $("#second-menu-awards").removeClass("d-none");
        $("#gallery-menu").removeClass("active");
      }
  }

  

  // ----------- Awards Show and Hide ---------------
function myAwards() {
  var val = 0;
  var x = document.getElementById('second-menu-awards');
  if ($( "#second-menu-awards" ).hasClass( "d-none" )) {
      $("#second-menu-awards").removeClass("d-none");
      $("#second-menu-about").addClass("d-none");
      $("#second-menu-gallery-content").addClass("d-none");
      $("#awards-menu").addClass("active");
    } else{
      $("#second-menu-awards").addClass("d-none");
      $("#second-menu-about").removeClass("d-none");
      $("#second-menu-gallery-content").removeClass("d-none");
      $("#awards-menu").removeClass("active");
    }
    if(!$( "#second-menu-gallery" ).hasClass( "d-none" )){
      $("#second-menu-gallery").addClass("d-none");
      $("#gallery-menu").removeClass("active");
    }
}
