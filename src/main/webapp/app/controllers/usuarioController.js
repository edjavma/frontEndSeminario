appIngresos
	.controller('usuarioController', function($scope,usuarioService) {

		$scope.data = {};
		$scope.roles = {};		

		$scope.getRoles = function(){
			usuarioService.obtenerRoles()
			.then(function(data){
				console.log(data);
				$scope.roles = data;					
			},function(error){
				console.log(error);
			});
		}

		$scope.guardar = function(){
			usuarioService.guardarUsuario($scope.data)
			.then(function(data){
				$scope.data =  {};
				alert('Creado correctamente');
			},function(error){
				console.log(error);
			});
		}

});