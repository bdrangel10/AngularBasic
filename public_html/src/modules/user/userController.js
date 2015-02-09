(function () {
	var app = angular.module('userModule', []);
 
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                            //alert("Guardado: " + $scope.user.firstName + " " + $scope.user.lastName);
				$scope.mensaje="El usuario " + $scope.user.firstName + " " + $scope.user.lastName +" nació el "+$scope.user.fecha.getDay()+"/"+$scope.user.fecha.getMonth()+"/"+$scope.user.fecha.getYear() ;
			};
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();

