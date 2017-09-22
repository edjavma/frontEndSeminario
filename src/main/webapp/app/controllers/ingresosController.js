appIngresos
	.controller('ingresosController', function($scope,ingresosService,NgTableParams,$filter,toastr, $locale) {

		$scope.data = {};
		$scope.ingresos = {};		
		$scope.originalData = {};

		$scope.getIngresos = function(){
			ingresosService.obtenerIngresos()
			.then(function(data){
				console.log(data);
				$scope.ingresos = data;
				$scope.originalData = angular.copy($scope.ingresos);
				$scope.userTable = new NgTableParams({count:5}, {counts: [] ,dataset: $scope.ingresos});					
			},function(error){
				console.log(error);
			});
		}

		$scope.guardar = function(){
			$scope.data.tipo = 1;
			$scope.data.fecha = moment().format().toString(); 
			ingresosService.guardarIngreso($scope.data)
			.then(function(data){
				alert("creado exitosamente");
				$scope.data = {};
				$scope.getIngresos();
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