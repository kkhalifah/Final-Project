
var app = angular.module('swearApp');

app.controller('totalController', function ($scope, $location, totalFactory){
//  console.log("total controller is connected");

      $scope.parents = totalFactory.getInput();
      // console.log($scope.facts);


  //it works!
  $scope.backButton = function (){
    $location.path('/index')
  }
//dymanic image stuff here
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
});
