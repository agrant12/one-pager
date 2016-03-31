var tincanrv = angular.module('tincanrv', [
	'ngRoute',
	'tincanrvControllers'
]);

tincanrv.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
		}).
		when('/sign-up', {
			templateUrl: 'partials/register.html',
		});
	}]);