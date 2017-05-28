var app = angular.module('swearApp');
app.controller('initialController', function($scope, $http, $location) {
console.log("controller is connected");
  // var words = "";
  var result = "";
    $scope.testWord = function(words) {
        $http({
        method: 'GET',
        url: 'https://community-purgomalum.p.mashape.com/containsprofanity?text=' + words,
        headers: {
          "X-Mashape-Key": "NKrB1NxfZlmshD01BlFxbkA1DRpBp1Os8zejsnCfZ0RWp7w1l0",
          "Accept": "text/plain"
        }
      }).then(function(response){
        result = response.data;
        console.log(result);
      }).then(function (result) {
      if (result === true) {
          // if true change view
        $location.path('/index2');
        //else clear screen
      } else {      }



    //   $scope.words = response.data
    //  console.log($scope.words);
    // }
});
}
});
