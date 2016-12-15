(function() {
"use strict";

angular.module('plunker', ['ui.bootstrap'])
.controller('DialogDemoCtrl',DialogDemoCtrl);

DialogDemoCtrl.$inject = ['$scope', '$timeout', '$dialog'];
function DialogDemoCtrl($scope, $timeout, $dialog){
  $timeout(function(){
    $dialog.dialog({}).open('modalContent.html');
  }, 3000);
}
})();
