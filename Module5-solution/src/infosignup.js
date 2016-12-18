(function() {
"use strict";

/**
 * Modal View for showing registered INFO
 */
angular.module('public')
.controller("InfoCtrl",InfoCtrl)
.directive('myInfosignup',MyInfosignup);


InfoCtrl.$inject = ['$scope','DataService','mensagens','ApiPath'];
 function InfoCtrl($scope,DataService,mensagens,ApiPath) {
   var ictrl = this;

  ictrl.basePath = ApiPath;


  ictrl.open = function() {

    ictrl.user = DataService.getFavoriteDish();

    if (angular.isUndefined(ictrl.user) || ictrl.user.foundespecifico  === null)
                              {$scope.showModal = false;
                              // ictrl.mensagemAlerta=DataService.updateMessage(33);
                              mensagens=33;
                              $scope.mensagens = mensagens;
                              $scope.restctrl.mensagens = mensagens;
                              }
    else {
          // ictrl.mensagemAlerta=DataService.updateMessage(44);
          mensagens=44;
          $scope.mensagens = mensagens;
          $scope.restctrl.mensagens = mensagens;
          $scope.showModal = true;
         };
  };

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
