
var app = angular.module('swearApp');
//probably don't need http for this Ctlr
app.controller('totalController', function ($scope, $location, totalFactory){
//  console.log("total controller is connected");

      $scope.parents = totalFactory.getInput();
      // console.log($scope.facts);

  //it works!is factory connected
  $scope.backButton = function (){
    $location.path('/index')
  }
//log total true statements on this page
//scope values from view one here {{totals}}
//  var booleans = ['true', 'false'];
  //word count plus 1
//  var numtotal = ;
//  $scope.testForTrue = function (boolean){
  //  console.log($scope.boolean);
//  }
//psuedo code factory?
  // var results = "";
  // $scope.testForTrue = function(results){
  //   if (results === true) {
  //     add 1 to the total count
  //     console.log(num + "words are true");
  //   } else (results === false) {
  //       return no number added
  //     console.log("word is false");
  //
  //   }
  //
  // };

});
