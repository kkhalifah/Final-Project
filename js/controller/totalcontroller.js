//GET MVC=controller  view2.html
var app = angular.module('swearApp');

app.controller('totalController', function ($scope, $location, totalFactory){
//  console.log("total controller is connected");
// $scope MODEL of MVC (one instance)
//  getInput  info from service
      $scope.parents = totalFactory.getInput();
      // console.log($scope.facts);
      var total = $scope.parents.dad + $scope.parents.mom;
      console.log(total);
      $scope.pickJarImage = function (){

        console.log(total);
        if (total===0){
        //  $scope.jar MODEL of MVC
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
      $scope.pickJarImage();

  //it works!
  $scope.backButton = function (){
    $location.path('/index')
  }

});
