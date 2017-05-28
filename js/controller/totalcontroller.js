
var app = angular.module('swearApp');
//probably don't need http for this Ctlr
app.controller('totalController', function ($scope, $location){
  console.log("total controller is connected");

  var results = "";
  $scope.testForTrue = function(results){
    if (results === true) {
      add 1 to the total count
      console.log(num + "words are true");
    } else (results === false) {
        return no number added
      console.log("word is false");

    }

  };




});
