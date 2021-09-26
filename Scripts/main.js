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

// ----------- Header ----------------
$(document).ready(function () {
  $('#navbar-toggler-menu').click(function(event) {
    // $('.navbar-demo').toggleClass('open-nav');
    $('.navbar-demo').addClass('open-nav');
    $('#navbar-toggler-menu').addClass('d-none');
    $('#navbar-toggler-times').removeClass('d-none');
  });

  $('#navbar-toggler-times').click(function(event) {
    // $('.navbar-demo').toggleClass('open-nav');
    $('.navbar-demo').removeClass('open-nav');
    $('#navbar-toggler-menu').removeClass('d-none');
    $('#navbar-toggler-times').addClass('d-none');
  });


});








function SplitText(node) {
  var text = node.nodeValue.replace(/^\s*|\s(?=\s)|\s*$/g, "");

  for (var i = 0; i < text.length; i++) {
    var letter = document.createElement("span");
    letter.style.display = "inline-block";
    letter.style.position = "absolute";
    letter.appendChild(document.createTextNode(text.charAt(i)));
    node.parentNode.insertBefore(letter, node);

    var positionRatio = i / (text.length - 1);
    var textWidth = letter.clientWidth;

    var indent = 100 * positionRatio;
    var offset = -textWidth * positionRatio;
    letter.style.left = indent + "%";
    letter.style.marginLeft = offset + "px";
  }

  node.parentNode.removeChild(node);
}

function SplitText2(node) {
  var text = node.nodeValue.replace(/^\s*|\s(?=\s)|\s*$/g, "");

  for (var i = 0; i < text.length; i++) {
    var letter = document.createElement("span");
    letter.style.display = "inline-block";
    letter.style.position = "absolute";
    letter.appendChild(document.createTextNode(text.charAt(i)));
    node.parentNode.insertBefore(letter, node);

    var positionRatio = i / (text.length - 1);
    var textWidth = letter.clientWidth;

    var indent = 100 * positionRatio;
    var offset = -textWidth * positionRatio;
    letter.style.left = indent + "%";
    letter.style.marginLeft = offset + "px";
  }

  node.parentNode.removeChild(node);
}

function SplitText3(node) {
  var text = node.nodeValue.replace(/^\s*|\s(?=\s)|\s*$/g, "");

  for (var i = 0; i < text.length; i++) {
    var letter = document.createElement("span");
    letter.style.display = "inline-block";
    letter.style.position = "absolute";
    letter.appendChild(document.createTextNode(text.charAt(i)));
    node.parentNode.insertBefore(letter, node);

    var positionRatio = i / (text.length - 1);
    var textWidth = letter.clientWidth;

    var indent = 100 * positionRatio;
    var offset = -textWidth * positionRatio;
    letter.style.left = indent + "%";
    letter.style.marginLeft = offset + "px";
  }

  node.parentNode.removeChild(node);
}

function Justify() {
  var TEXT_NODE = 3;
  var elem = document.getElementById("character_justify");
  var elem2 = document.getElementById("character_justify2");
  var elem3 = document.getElementById("character_justify3");
  elem = elem.firstChild;
  elem2 = elem2.firstChild;
  elem3 = elem3.firstChild;

  while (elem) {
    var nextElem = elem.nextSibling;

    if (elem.nodeType == TEXT_NODE)
      SplitText(elem);
      SplitText2(elem2);
      SplitText3(elem3);

    elem = nextElem;
  }
}
