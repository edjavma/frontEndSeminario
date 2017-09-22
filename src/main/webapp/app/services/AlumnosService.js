//Service to get data from service..
appIngresos.service('AlumnosService', function ($q,$http) {
    var wsUrl = "http://34.233.183.228:8080"

    this.getAllStudents = function () {
        return $http.get(wsUrl+"/seminario/alumno/getallalumnos");
    };

    this.getAllCourses = function () {
        return $http.get(wsUrl+"/seminario/curso/listcursos");
    };


    this.getAllSection = function (curso) {
        return $http.get(wsUrl+"/seminario/curso/secciones/"+curso+"");
    };


    this.getIdCurso = function (curso,seccion) {
        return $http.get(wsUrl+"/seminario/curso/secciones/"+curso+"/"+seccion+"");
    };



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

    
    this.update = function (noCarnet,estudiante) {
        //debugger;
    	var deferred = $q.defer();
		$http.post('http://34.233.183.228:8080/seminario/alumno/updatealumno/'+noCarnet+'?nombres='+estudiante.nombres+'&apellido='+estudiante.apellido+'&correo='+estudiante.correo,{ params: estudiante } )
		.then(function(response){
			console.log(response);
			deferred.resolve(response.data);
		},function(error){
			deferred.reject(error);
		});
		return deferred.promise
    }

    this.delete = function (Estudiante) {
        debugger;
        var deleterecord= $http({
            method: 'delete',
            url: wsUrl + Estudiante.nocarnet
        });
        return deleterecord;
    }
});