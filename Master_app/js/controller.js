var euroApp = angular.module('euroApp', []);

euroApp.controller('EuroController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.teams = data;
    $scope.teamOrder = 'rank';
  });
}]);

