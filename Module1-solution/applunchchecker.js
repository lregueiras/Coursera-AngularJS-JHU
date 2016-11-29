(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject=['$scope'];
function LunchCheckerController ($scope) {
  $scope.lunchtext = "";
  $scope.message = "";
  $scope.splitlunchtext = "";


  $scope.displayMessag = function () {
    $scope.splitlunchtext = splitMessage($scope.lunchtext, ",");
    var mensagem = calculatMessage($scope.splitlunchtext);
    $scope.message = mensagem;

  };


  function splitMessage(stringToSplit, separator) {
    var arrayOfStrings = "";
    if (stringToSplit.length===0) {  arrayOfStrings=stringToSplit;}
        else {
         arrayOfStrings=stringToSplit.split(separator);};

    return arrayOfStrings;
  };

  function calculatMessage(splitedString) {
    var noOfStrings = splitedString.length;
    var tempString = "";

    if (noOfStrings===0) {tempString = "Please enter data first.";}
    else if ((noOfStrings>0 && noOfStrings<4)) {tempString = "Enjoy!";}
    else {tempString = "Too much!";}

    return tempString;
  };
};

})();
