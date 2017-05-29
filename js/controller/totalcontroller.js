
var app = angular.module('swearApp');
//probably don't need http for this Ctlr
app.controller('totalController', function ($scope, $location, totalFactory){
  console.log("total controller is connected");
  //how to target radio button elements

  var parents =""
  $scope.parents = {
    name: 'mom'
  }
    $scope.parent = {
      name : "dad"
    };
//no idea
    $scope.targetParents = function(parent) {
    totalFactory.setParent($scope.parent).then(function() {
      $scope.parents = totalFactory.getParents();
      // console.log($scope.facts);
    })
  }
  //it works!nto anymore, bring into service?
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


//psuedo code
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
