$(function(){
    $("h2#type1").typed({
        strings: ["SciFiReads"],
        typeSpeed: 10,
        callback: function () {
          setTimeout( function() {$("h2#type2").addClass("blinkNow")}, 3000);
          $("h2#type2").typed({
              strings: ["^3000 Find your next SciFi journey"],
              typeSpeed: 25,
              callback: setTimeout(Matrix, 5500)
          });
        }
    });
});

var draw = function () {
  var q=document.getElementById("q");
  var ctx=q.getContext('2d');
  var yPositions = Array(33).join(0).split('');
  var RunMatrix = function () {
    ctx.fillStyle='rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0,0,1000,618);
    ctx.fillStyle="#0f0";
    ctx.font = '16px Georgia';
    yPositions.map(function(y,index){
      text = String.fromCharCode((127-33)*Math.random()+33)
      x=(index*30)+10;
      q.getContext('2d').fillText(text, x, y);
      if (y>30*21 + Math.random()*1e4) {
        yPositions[index]=0;
      } else {
        yPositions[index]=y+30;
      }
    });
  }
  setInterval(RunMatrix,300);
};

function Matrix() {
  if(typeof Game_Interval != "undefined") {clearInterval(Game_Interval)};
  Game_Interval = setInterval(draw, 10000);
};
// var draw = function () {
//   ctx.fillStyle='rgba(0,0,0,.05)';
//   ctx.fillRect(0,0,width,height);
//   ctx.fillStyle='#0F0';
//   ctx.font = '10pt Georgia';
//   yPositions.map(function(y, index){
//     text = String.fromCharCode(1e2+Math.random()*33);
//     x = (index * 10)+10;
//     q.getContext('2d').fillText(text, x, y);
//  if(y > 100 + Math.random()*1e4)
//  {
//    yPositions[index]=0;
//  }
//  else
//  {
//       yPositions[index] = y + 10;
//  }
//   });
// };
// <canvas id="myCanvas" width="500" height="200" style="border:1px solid #c3c3c3;">
// Your browser does not support the HTML5 canvas tag.
// </canvas>
// var YPositions= Array(30).join(0).split('');
// var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");
// var draw=function(){
// ctx.fillStyle='rgba(0,0,0,.05)';
// ctx.fillRect(0,0,500,500);
// ctx.fillStyle="#0f0";
// YPositions.map(function(y,index){
// x=(index*10)+10;
// ctx.fillText('a', x, y);
// if(y>100)
// {
// YPositions[index]=0;
// }
// else
// {
// YPositions[index]=y+10;
// }
// });
// };
// setInterval(draw,30);

// var ctx=$("canvas#q");
// // var width = ctx.width;
// // var height = ctx.height;
// // var yPositions = Array(300).join(0).split('');
//
// var draw = function () {
//   var ctx=$("canvas#q");
//   var width = ctx.width;
//   var height = ctx.height;
//   var yPositions = Array(300).join(0).split('');
//   ctx.fillStyle='rgba(0,0,0,.05)';
//   // ctx.fillRect(0,0,width,height);
//   ctx.fillStyle='#0F0';
//   ctx.font = '10pt Georgia';
//   yPositions.map(function(y, index){
//     text = String.fromCharCode(1e2+Math.random()*33);
//     x = (index * 10)+10;
//     debugger;
//     ctx.getContext('2d').fillText(text, x, y);
//     if(y > 100 + Math.random()*1e4) {
//       yPositions[index]=0;
//     } else {
//       yPositions[index] = y + 10;
//     }
//   });
// };
