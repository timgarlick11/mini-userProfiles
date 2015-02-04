var app = angular.module('userProfile');

app.controller('MainCtrl', function($scope, mainService){
$scope.getUsers = function(){
	}
$scope.users = mainService.getUsers();
});