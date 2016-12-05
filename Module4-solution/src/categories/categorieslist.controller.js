(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService','items'];
function CategoriesListController(MenuDataService,items) {
  var categoriesList = this;
  categoriesList.items = items;

//   narrowDown.logMenuItems = function () {
//
//     var promise = MenuSearchService.getMatchedMenuItems(narrowDown.sItem);
//
//     promise.then(function (response) {
//        narrowDown.found=response;
//        narrowDown.myVar = true;
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
// };

}

})();
