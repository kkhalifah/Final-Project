//to be set up at some point
var app = angular.module("swearApp");
//needs to be connected
app.factory('totalFactory', function(){
//take info from view 1 and display on page two from submit button

var parents = {
  mom: 0, dad:0
}
return {
  setInput:  function (name){
    if (name === 'mom') {
       parents.mom++
       console.log(parents);
       return parents
    }
    else {
        parents.dad++

         console.log(parents);
        return parents
      }
    },
    //store values send to second page
      getInput: function () {
      return parents
    }
  }


});
