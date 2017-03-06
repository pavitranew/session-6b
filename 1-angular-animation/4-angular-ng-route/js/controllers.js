var pageControllers = angular.module('pageControllers', []);

pageControllers.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {
    	$scope.pageClass = 'page-home';
        $scope.message = "Hello World";
    }]);

pageControllers.controller('ShowCtrl', ['$scope',
    function ShowCtrl($scope) {
    	$scope.pageClass = 'page-about';
        $scope.message = "Show The World";
    }]);

pageControllers.controller('FourCtrl', ['$scope',
    function FourCtrl($scope) {
    	$scope.pageClass = 'page-404';
        $scope.message = "404 - you are lost!";
    }]);