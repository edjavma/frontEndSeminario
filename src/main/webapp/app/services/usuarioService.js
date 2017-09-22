appIngresos
	.factory('usuarioService', function($q,$http,$filter){
	var fac = {};

	fac.obtenerRoles = function(){
			var deferred = $q.defer();
			$http.get('http://34.233.183.228:8080/seminario/admin/roles')
			.then(function(response){
				console.log(response);
				deferred.resolve(response.data);
			},function(error){
				deferred.reject(error);
			});
			
			return deferred.promise;
		}

	fac.guardarUsuario = function(data){
		console.log(data);
		var deferred = $q.defer();
		$http.get('http://34.233.183.228:8080/seminario/admin/createuser', { params: data})
		.then(function(response){
			console.log(response);
			deferred.resolve("creado");
		},function(error){
			deferred.reject(error);
		});
		return deferred.promise
	}

	return fac;
	});