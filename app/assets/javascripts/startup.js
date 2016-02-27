$(function(){
    $("h2#type1").typed({
        strings: ["SciFiReads"],
        typeSpeed: 10,
        callback: function () {
          setTimeout( function() {$("h2#type2").addClass("blinkNow")}, 2000);
          $("h2#type2").typed({
              strings: ["^2500 Find your next SciFi journey"],
              typeSpeed: 25,
              // callback: function () {
              //   $("h2#type2").addClass("blinkNow")
              // }
          });
        }
    });


});
