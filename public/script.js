var app = angular.module('kingdomApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/sora', {
    templateUrl: '/partials/sora.html',
    controller: 'KingdomController as kc'
  }).when('/riku', {
    templateUrl: '/partials/riku.html',
    controller: 'KingdomController as kc'
  }).when('/kairi', {
    templateUrl: '/partials/kairi.html',
    controller: 'KingdomController as kc'
  });
});

app.controller('KingdomController', KingdomController);

function KingdomController($location) {
  console.log('KingdomController is loaded');
  var vm = this;
  vm.go = function(path) {
    $location.path(path);
  };
}
