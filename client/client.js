var app = angular.module('userApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
	$http.get('/user').then(function(response){
		console.log(response);
		$scope.users = response.data;
	});

	$scope.thing = 'thing';

	$scope.removeUser = function(user){
		$http.delete('/user/deleteUserById/' + user._id).then(function(response){
			$scope.users = response.data;
		});

		//new comment
	}
}]);





