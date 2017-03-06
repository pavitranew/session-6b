var pagesApp = angular.module('pagesApp', [
	'ngRoute', 
	'ngAnimate',
	'pageControllers' 
	]);

pagesApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'templates/main.html',
			controller: 'MainCtrl'
		})
		.when('/show', {
			templateUrl: 'templates/show.html',
			controller: 'ShowCtrl'
		})
		.otherwise({
			templateUrl: 'templates/404.html',
			controller: 'FourCtrl'
		});
	}]);