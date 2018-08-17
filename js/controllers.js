var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController', //search controller
  function MyController($scope, $http) {
    $http.get('js/data.json').then(function(response) {
      $scope.artists = response.data;
      $scope.artistOrder = 'name';
  });
});

myControllers.controller('DetailsController',  // Controller for Details page
function MyController($scope, $http, $routeParams) {
  $http.get('js/data.json').then(function(response) {
    $scope.artists = response.data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {     //previous and next button
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.artists.length - 1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }

});
});