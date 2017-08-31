angular.module('appIngre')
	.controller('ingresosController', function($scope,ingresosService,NgTableParams,$filter,toastr, $locale) {

		$scope.data = {};
		$scope.ingresos = {};		
		$scope.originalData = {};

		$scope.getIngresos = function(){
			ingresosService.obtenerIngresos()
			.then(function(data){
				$scope.ingresos = data;
				$scope.originalData = angular.copy($scope.ingresos);
				$scope.userTable = new NgTableParams({count:5}, {counts: [] ,dataset: $scope.ingresos});	
				toastr.info('Se cargo la Lista Correctamente','Informacion: ',{
					iconClass: 'toast-info'
				});
			},function(error){
				console.log(error);
			});
		}

		$scope.guardar = function(){
			ingresosService.guardarIngreso($scope.data)
			.then(function(data){
				toastr.success('Se guardo correctamente','Informacion: ');
			},function(error){
				console.log(error);
			});
		}


		$scope.cancel = function(user, rowForm) {
	      var originalRow = resetRow(user, rowForm);
	      angular.extend(user, originalRow);
	    }

        

	    $scope.save = function(user, rowForm) {
	      var originalRow = resetRow(user, rowForm);
	      angular.extend(originalRow, user);
	    }
		
		function resetRow(user, rowForm){
	      user.isEditing = false;
	      rowForm.$setPristine();
	      var newTemp = $filter("filter")($scope.originalData, {code:user.code});
	      return newTemp[0];
	    }

});