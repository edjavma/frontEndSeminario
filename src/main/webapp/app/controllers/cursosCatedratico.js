appIngresos
	.controller('cursosCatController', function($scope,cursosCatService,NgTableParams,$filter,toastr, $locale) {

		$scope.data = {};
		$scope.cursos = [];		
		$scope.secciones = [];
		$scope.alumnos = [];

		$scope.getCursos = function(){
			cursosCatService.usuarioSession()
			.then(function(data){
				cursosService.obtenerCursos(data.username)
				//cursosCatService.obtenerCursos(1873)
				.then(function(data){
					$scope.cursos = data;							
				},function(error){
					console.log(error);
				});							
			},function(error){
				console.log(error);
			});			
		}
		
		/*$scope.getSecciones = function(){
			cursosService.obtenerSecciones($scope.data.curso)
			.then(function(data){
				$scope.secciones = data;
			},function(error){
				alert('Ocurrio un error getSecciones');
			});
		}*/
		
		$scope.getAlumnos = function(){
			/*cursosService.obtenerCodigo($scope.data)
			.then(function(data){
				*/
			cursosCatService.obtenerAlumnos($scope.data.idCurso)
				.then(function(data){
					$scope.alumnos = data;
					console.log(data);
					$scope.userTable = new NgTableParams({count:10}, {counts: [] ,dataset: $scope.alumnos});	
				},function(error){
					console.log(error);
				});
			/*	
			},function(error){
				alert('Ocurrio un error getAlumnos');
			});*/
		}

		
			

});