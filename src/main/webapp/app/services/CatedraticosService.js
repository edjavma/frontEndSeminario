//Service to get data from service..
appIngresos.service('CatedraticosService', function ($q,$http) {
    var wsUrl = "http://34.233.183.228:8080"

    this.getallCatedraticos = function () {
        return $http.get(wsUrl+"/seminario/catedratico/allcatedraticos");
    };

    this.getCursosCatedratico = function () {
        return $http.get(wsUrl+"/seminario/curso/listcursos");
    };
    this.getCursoSeccionCatedratico = function(IdCatedratico){
         return $http.get(wsUrl+"/seminario/catedratico/getCursosCatedratico/"+IdCatedratico+"");
     };


    this.getAllSection = function (curso) {
        return $http.get(wsUrl+"/seminario/curso/secciones/"+curso+"");
    };


    this.getIdCurso = function (curso,seccion) {
        return $http.get(wsUrl+"/seminario/curso/secciones/"+curso+"/"+seccion+"");
    };

   this.pagar = function(Catedratico) {
	   console.log(Catedratico);
	   var deferred = $q.defer();
	   var url = wsUrl + '/seminario/catedratico/addusercatedratico?id_catedratico='+Catedratico.idCatedratico+'&correo='+Catedratico.correo+'&idUsuario='+Catedratico.idUsuario;
	   //var url = wsUrl + '/seminario/catedratico/addusercatedratico';
	   	$http.post(url)
	   	.then(function(response){
	   		deferred.resolve(response.data);    		
	   	},function(error){
	   		deferred.reject(error);
	   	});
	   	return deferred.promise;
   }


    //save
    this.save = function (Estudiante) {
        /*var request = $http({
            method: 'post',
            url: wsUrl+"/seminario/alumno/adduseralumno",
            data:Estudiante
        });
        return request;*///
    //return $http.post("http://34.233.183.228:8080/seminario/alumno/adduseralumno?nocarnet=1990-14-10076&correo=juan_cunquero%40hotmail.com");
       return $http.post(wsUrl+"/seminario/alumno/adduseralumno?nocarnet="+Estudiante.nocarnet+"&correo="+Estudiante.correo);

    }


    this.asignacion = function(data){
        return $http.post(wsUrl+"/seminario/alumno/asignarcurso?nocarnet="+data.carnet+"&idCurso="+data.idcurso);
    };

    //get single record by Id
    this.get = function (Estudiante) {
        //debugger;
        return $http.get(wsUrl+Estudiante.nocarnet);
    }

    
    this.update = function (Estudiante) {
        //debugger;
        var updaterequest = $http({
            method: 'put',
            url: wsUrl,
            data:Estudiante
        });
        return updaterequest;
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