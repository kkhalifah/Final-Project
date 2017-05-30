//to be set up at some point
var app = angular.module("swearApp");
//needs to be connected
app.factory('totalFactory', function(){
//take info from view 1 and display on page two from submit button
//store which radio button is chosen
//log count of times true is used
// psuedo code gets rid of errors
var inputs = "aword";
return {
  setInput:  function (input){
    if (word === true) {
// not logging
      console.log('increment by 1');}
    }
  }

//not logging, but logs if i remove return statement and has error
//var logTheConsole = function logTheConsole () {
     console.log("hi from factory")
// }

});

//display image to change depending on value-stretch
// psuedo code
// $scope.filledJar = function (){
//   if (numtotal >= 2){
//     return image src='empty.png';
//   } else if (numtotal >= 4) {
//     return image  src='fillupjar1.png';
//   } else if (numtotal >= 6) {
//     return image  src='fillupjar2.png';
//   } else if (numtotal >= 8) {
//       return image  src='fillupjar3.png';
//   } else {
//     return image  src='fillupjar4.png';
//   }
// }
