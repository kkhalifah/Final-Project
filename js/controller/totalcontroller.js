
var app = angular.module('swearApp');

app.controller('totalController', function ($scope, $location, totalFactory){
//  console.log("total controller is connected");
// $scope.retrieveFacts = function(category) {
//   factsFactory.setFacts($scope.category).then(function() {
//     $scope.facts = factsFactory.getFacts();
//     // console.log($scope.facts);
//   })
// }
$scope.parents = totalFactory.getInput()
    // $scope.getPromise = function(){
    //   $scope.parents = totalFactory.getInput().then (function(){
    //     var total = '10';
    //     console.log(total);
    //     $scope.total = function (total){
    //       console.log(total);
    //       if (total===0){
    //         $scope.jar= 'images/jar/empty.png';
    //       } else if (total <= 1) {
    //           $scope.jar= 'images/jar/fillupjar1.png';
    //       } else if (total <= 2) {
    //           $scope.jar= 'images/jar/fillupjar2.png';
    //       } else if (total <= 3) {
    //           $scope.jar= 'images/jar/fillupjar3.png';
    //       } else {
    //         $scope.jar= 'images/jar/fillupjar4.png';
    //       }
    //     }
    //     $scope.total();
    //   })
    //   }
      // console.log($scope.facts);
    //  var total = parents.dad + parents.mom;
  //it works!
  $scope.backButton = function (){
    $location.path('/index')
  }
//dymanic image stuff here
//display image to change depending on value-stretch
// psuedo code

});
