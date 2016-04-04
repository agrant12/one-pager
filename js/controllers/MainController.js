var tincanrvControllers = angular.module('tincanrvControllers', []);

tincanrvControllers.controller('login', function($scope, $http) {
	$scope.title = 'Login to Tincan';
	$scope.submitForm = function() {
		$http({
			method: 'POST',
			url: 'http://localhost:8000/auth/login',
			data: $scope.user,
			headers: {'Content-Type': 'application/json'}
		}).success(function(data) {
			if (data.user) {
				var user = data.user
				var firstname = user[0]['firstname'];
			} else {
				console.log(data);
			}
		});
	}
});

tincanrvControllers.controller('register', function($scope, $http) {
	$scope.title = 'Register for Tincan';
	$scope.submitForm = function() {
		$http({
			method: 'POST',
			url: 'http://localhost:8000/auth/register',
			data: $scope.user,
			headers: {'Content-Type': 'application/json'}
		}).success(function(data) {
			console.log(data);
		});
	}
})