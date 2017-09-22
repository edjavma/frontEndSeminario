appIngresos
	.factory('passwordService', function($q,$http,$filter){
	var fac = {};

	fac.guardarUsuario = function(data){
		console.log(data);
		var deferred = $q.defer();
		$http.post('http://34.233.183.228:8080/seminario/alumno/changepassword', data)
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