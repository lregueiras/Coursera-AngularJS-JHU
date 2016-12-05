(function () {
'use strict';

angular.module('Data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http'];

function MenuDataService($http) {

  var service = this;

  service.getAllCategories = function() {

      return $http({method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")}).then(function (result) {

      var totItems= result.data;

      return totItems;
    });
};

  service.getItemsForCategory = function(icategory) {

      return $http({method: "GET",
                    url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
                    params:  {category: icategory}}).then(function (result) {
      var foundItems= [];
      var totItems= result.data.menu_items;

        for (var x = 0; x < totItems.length; x++) {
                if ((totItems[x].short_name).indexOf(icategory)>=0) {
                  foundItems.push(totItems[x]);
                }
        };
      // return processed items

      return foundItems;
    });
  };

}
})();
