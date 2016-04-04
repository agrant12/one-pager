var tincanrv = angular.module('tincanrvApp', [
	'ngRoute',
	'tincanrvControllers'
]);

tincanrv.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'login'
		}).
		when('/sign-up', {
			templateUrl: 'partials/register.html',
			controller: 'register'
		}).
		when('/home', {
			templateUrl: 'partials/home.html',
		}).
		when('/', {
			templateUrl: 'partials/home.html',
		});
	}]);