(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
angular.module('public', ['ui.router', 'common']);


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]').popover({ html : true })
        .click(function(ev) {
         //this is workaround needed in order to make ng-click work inside of popover
         $compile($('.popover.in').contents())($scope);
    });
});



var conteudodinamico="<div ng-controller=\"ShowCtrl as sctrl\" ><h4>Not Signed Up Yet. <a href=\"#\" ng-click=\"sctrl.open()\">Sign up Now!</a></h4><my-signup></my-signup></div>";

$("#popover1").popover({
    html: true,
    placement: "bottom",
    trigger: "click",
    content: function () {
        return $(conteudodinamico).html();
    }});


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
