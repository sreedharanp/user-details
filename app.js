var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/basic', {
      templateUrl: "basic.html",
      controller: 'BasicController'
    })
    .when('/premium', {
      templateUrl: "premium.html",
      controller: 'PremiumController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('MainCtrl', function($scope, $location) {
  $scope.go = function(path) {
    $location.path(path);
  }
});

app.controller('BasicController', function($scope, $location) {
  $scope.go = function(path) {
    $location.path(path);
  }

  $scope.visible = false;
  $scope.basics = [];
  $scope.newBasics = function() {

    $scope.basics.push({
      name: $scope.basicname
    });

    $scope.basicname = '';
  };


  $scope.remove = function(item) {
    var index = $scope.basics.indexOf(item)
    $scope.basics.splice(index, 1);
  }

});
app.controller('PremiumController', function($scope, $location) {
  $scope.go = function(path) {
    $location.path(path);
  }

  $scope.visible = false;
  $scope.premiums = [];
  $scope.newPremium = function() {

    $scope.premiums.push({
      name: $scope.premiumname
    });

    $scope.premiumname = '';
  };


  $scope.remove = function(item) {
    var index = $scope.premiums.indexOf(item)
    $scope.premiums.splice(index, 1);
  }
});