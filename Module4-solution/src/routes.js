(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/categories/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/categories/templates/categorieslista.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/categories/templates/itenslist.template.html',
    controller: 'ItemsListController as itemDetail',
    resolve: {
      foundItems: [
        '$stateParams','MenuDataService', function ($stateParams,MenuDataService) {

          return MenuDataService.getItemsForCategory($stateParams.itemId);

            }]
    }
  });
}

})();
