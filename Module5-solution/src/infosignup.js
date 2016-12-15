(function() {
"use strict";

/**
 * Modal View for showing registered INFO
 */
angular.module('public')
.controller("InfoCtrl",InfoCtrl)
.directive('myInfosignup',MyInfosignup);


InfoCtrl.$inject = ['$scope','DataService','ApiPath'];
 function InfoCtrl($scope,DataService,ApiPath) {
   var ictrl = this;
  //  if(ictrl.user.foundespecifico !== undefined && ictrl.user.foundespecifico != null) {$scope.showModal = false;}
  //  else {$scope.showModal = true;};
  //  ictrl.showModal = true;

  ictrl.basePath = ApiPath;

  //ng-hide="ictrl.user.foundespecifico !== undefined && ictrl.user.foundespecifico != null"

  ictrl.open = function() {

    ictrl.user = DataService.getFavoriteDish();
    console.log("Resultado");
    console.log(angular.isUndefined(ictrl.user) || ictrl.user.foundespecifico  === null);
    //if(ictrl.user.foundespecifico !== undefined && ictrl.user.foundespecifico != null)
    if (angular.isUndefined(ictrl.user) || ictrl.user.foundespecifico  === null)
                              {$scope.showModal = false;
                              ictrl.mensagemAlerta=DataService.updateMessage(33);
                              }
    else {
          ictrl.mensagemAlerta=DataService.updateMessage(44);
          $scope.showModal = true;
         };
  };

  // ictrl.open = function() {
  //   //ictrl.myVar = true;
  //
  //   ictrl.user = DataService.getFavoriteDish();
  //
  //   $scope.showModal = true;
  // };

  ictrl.ok = function() {
    $scope.showModal = false;
  };

  ictrl.cancel = function() {
    $scope.showModal = false;
  };

}


function MyInfosignup() {

  return {
    restrict: 'AE',
    scope : true,
    templateUrl: 'my-Infosignup.html',
    bindToController: true

    };

  };


})();
