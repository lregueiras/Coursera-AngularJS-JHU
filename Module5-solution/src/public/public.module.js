(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
angular.module('public', ['ui.router', 'common']);


function FoundItems() {
  var ddo = {
  /*  templateUrl: 'resultados.html',*/
    scope: {
      itemespecifico:'=',
      myVar:'<',
      onRemove: '&'
    },
    controller: ShowCtrl,
    controllerAs: 'sctrl',
    bindToController: true

  }
  return ddo;
}

})();
