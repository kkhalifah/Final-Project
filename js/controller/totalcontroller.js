
var app = angular.module('swearApp');
//probably don't need http for this Ctlr
app.controller('totalController', function ($scope, $location){
  console.log("total controller is connected");

  var booleans = ['true', 'false'];
  //word count plus 1
  var numtotal = 4;
  $scope.testForTrue = function (boolean){

    console.log($scope.boolean);
  }
  //it works!
  $scope.backButton = function (){
    $location.path('/index')
  }

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
  //   for (var i = 0, j = arr.length; i < j; i++) {
  //    if (obj[arr[i]]) {
  //       obj[arr[i]]++;
  //    }
  //    else {
  //       obj[arr[i]] = 1;
  //    }
  // }
  //
  // console.log(obj);
  //   }

});
