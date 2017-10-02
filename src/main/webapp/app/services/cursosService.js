appIngresos
	.factory('cursosService', function($q,$http,$filter){
	var fac = {};

	fac.obtenerCursos = function(){
			var deferred = $q.defer();
			$http.get('http://34.233.183.228:8080/seminario/curso/listcursos')
			.then(function(response){
				deferred.resolve(response.data);
			},function(error){
				deferred.reject(error);
			});
			
			return deferred.promise;
		}
	
	fac.obtenerSecciones = function(param){
		var deferred = $q.defer();
		$http.get('http://34.233.183.228:8080/seminario/curso/secciones/'+param)
		.then(function(response){
			deferred.resolve(response.data);
		},function(error){
			deferred.reject(error);
		});
		
		return deferred.promise;
	}

	fac.obtenerCodigo = function(data){
		var deferred = $q.defer();
		$http.get('http://34.233.183.228:8080/seminario/curso/secciones/'+data.curso+'/'+data.seccion)
		.then(function(response){
			deferred.resolve(response.data);
		},function(error){
			deferred.reject(error);
		});
		
		return deferred.promise;
	}

	fac.obtenerAlumnos = function(codigoCurso){
		var deferred = $q.defer();
		$http.get('http://34.233.183.228:8080/seminario/curso/getEstudiantes/'+codigoCurso)
		.then(function(response){
			deferred.resolve(response.data);
		},function(error){
			deferred.reject(error);
		});
		
		return deferred.promise;
	}


	return fac;
	});