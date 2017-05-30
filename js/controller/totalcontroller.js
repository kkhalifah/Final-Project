
var app = angular.module('swearApp');

app.controller('totalController', function ($scope, $location, totalFactory){
//  console.log("total controller is connected");

      $scope.parents = totalFactory.getInput();
      // console.log($scope.facts);
    //  var total = parents.dad + parents.mom;
      var total = "";
      $scope.total = function (){
        total = parents.mom + parents.dad
        if (total===0){
          $scope.jar= 'images/jar/empty.png';
        } else if (total <= 1) {
            $scope.jar= 'images/jar/fillupjar1.png';
        } else if (total <= 2) {
            $scope.jar= 'images/jar/fillupjar2.png';
        } else if (total <= 3) {
            $scope.jar= 'images/jar/fillupjar3.png';
        } else {
          $scope.jar= 'images/jar/fillupjar4.png';
        }
      }

  //it works!
  $scope.backButton = function (){
    $location.path('/index')
  }
//dymanic image stuff here
//display image to change depending on value-stretch
// psuedo code

});
