$(function(){
  setTimeout(matrix,1100);
  $("h2#type1").typed({
    strings: ["SciFiReads"],
    typeSpeed: 10,
    callback: blinkCursor
  });
});

var blinkCursor = function () {
  setTimeout( function() {$("h2#type2").addClass("blinkNow")}, 3000);
  $("h2#type2").typed({
    strings: ["^3000Follow the white rabbit"],
    typeSpeed: 25,
  });
}

var matrix = function () {
  var q=document.getElementById("q");
  var ctx=q.getContext("2d");
  var yPositions = Array(300).join(0).split('');

  var draw=function(){
    ctx.fillStyle='rgba(0,0,0,.15)';
    ctx.fillRect(0,0,1000,1000);
    ctx.fillStyle="#0f0";
    ctx.font = '16px Georgia';
    yPositions.map(function(y,index){
      text = String.fromCharCode((127-33)*Math.random()+33);
      // text = "!MHei!r!e"[ y % 9 ]
      x = (index * 20 ) + 10;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random()*1e4) {
        yPositions[index] = 0;
      } else {
        yPositions[index] = y + 20;
      }
    })
  };
  setInterval(draw,66);
};
