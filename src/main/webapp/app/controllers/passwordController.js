appIngresos
	.controller('passwordController', function($scope,passwordService) {

		$scope.data = {};
		$scope.roles = {};		


		$scope.guardar = function(){
			passwordService.guardarUsuario($scope.data)
			.then(function(data){
				$scope.data =  {};
				alert('Creado correctamente');
			},function(error){
				console.log(error);
			});
		}

});