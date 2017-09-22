appIngresos
	.factory('ingresosService', function($q,$http,$filter){
	var fac = {};

	fac.obtenerIngresos = function(){
			var deferred = $q.defer();
			$http.get('http://34.233.183.228:8080/seminario/tesoreria/allRegistros')
			.then(function(response){
				console.log(response);
				deferred.resolve(response.data);
			},function(error){
				deferred.reject(error);
			});
			
			return deferred.promise;
		}

	fac.guardarIngreso = function(data){
		var deferred = $q.defer();
		$http.post('http://34.233.183.228:8080/seminario/tesoreria/addIngreso',data)
		.then(function(response){
			console.log(response);
			deferred.resolve(response.data);
		},function(error){
			deferred.reject(error);
		});
		return deferred.promise
	}

	return fac;
	});