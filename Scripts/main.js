// ----------- Gallery Show and Hide ---------------
function myGallery() {
    var val = 0;
    var x = document.getElementById('second-menu-gallery');
    if ($( "#second-menu-gallery" ).hasClass( "d-none" )) {
        $("#second-menu-gallery").removeClass("d-none");
        $("#second-menu-about").addClass("d-none");
        $("#second-menu-gallery-content").addClass("d-none");
        $("#gallery-menu").addClass("active");
      } else{
        $("#second-menu-gallery").addClass("d-none");
        $("#second-menu-about").removeClass("d-none");
        $("#second-menu-gallery-content").removeClass("d-none");
        $("#gallery-menu").removeClass("active");
      }
  }

  // ----------- About --------------- 
  // function myAbout() {
  //   var val = 0;
  //   var x = document.getElementById('second-menu-about');
  //   if ($( "#second-menu-about" ).hasClass( "d-none" )) {
  //       $("#second-menu-about").removeClass("d-none");
  //     } else{
  //       $("#second-menu-about").addClass("d-none");
  //     }
  // }