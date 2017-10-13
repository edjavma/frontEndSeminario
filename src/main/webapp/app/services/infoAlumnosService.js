//Service to get data from service..
appIngresos.service('infoAlumnosService', function ($q,$http) {
    var wsUrl = "http://34.233.183.228:8080/seminario"
    	
    	
    this.getInfoAlumno = function(userId){
    	var data = {nocarnet:userId};
    	var deferred = $q.defer();
    	$http.get(wsUrl+'/alumno/infoalumno', {params: data})
    	.then(function(response){
    		deferred.resolve(response.data);    		
    	},function(error){
    		deferred.reject(error);
    	});
    	return deferred.promise;
    }
    
    
    this.getCodigoQr = function(userId){
    	var data = {nocarnet:userId};
    	var deferred = $q.defer();
    	$http.get(wsUrl+'/alumno/getqr', {params: data})
    	.then(function(response){
    		deferred.resolve(response.data);    		
    	},function(error){
    		deferred.reject(error);
    	});
    	return deferred.promise;
    }
    
    this.usuarioSession = function(){
    	var deferred = $q.defer();
    	$http.get('/SeminarioFrontEnd/user')
    	.then(function(response){
    		deferred.resolve(response.data);    		
    	},function(error){
    		deferred.reject(error);
    	});
    	return deferred.promise;
    }
});