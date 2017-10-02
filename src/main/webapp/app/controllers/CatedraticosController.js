
appIngresos.controller('CatedraticosController', function ($scope, CatedraticosService,NgTableParams,$filter,toastr, $locale,DTOptionsBuilder, DTColumnBuilder) {    

    loadCatedraticos();

    function loadCatedraticos() {
        var EmployeeRecords = CatedraticosService.getallCatedraticos();
        EmployeeRecords.then(function (d) {     //success
            $scope.Catedraticos = d.data;
            console.log($scope.Catedraticos);
            $scope.userTable = new NgTableParams({count:5}, {counts: [] ,dataset: $scope.Catedraticos});    
        },
        function(){
            alert("Ocurrio un error al cargar la informacion"); //fail
        });        
        
    }
    
    $scope.pagar = function(idCatedratico,correo){
    	console.log(idCatedratico);
    	console.log(correo);
    	
    	CatedraticosService.usuarioSession()
    	.then(function(data){
    		var Catedratico = {
    				idCatedratico: idCatedratico,
        			correo: correo,
        			idUsuario: data.userId
        	}
    		
    		CatedraticosService.pagar(Catedratico)
    		.then(function(data){
    			alert('Se realizo el pago exitosamente');
    			 loadCatedraticos();
    		},function(error){
    			alert(error.statusText);
    		});
    	},function(error){
    		alert(error);
    	});
    	
    }

    $scope.$watch('Catedraticos', function() {
        if($scope.Index != ""){
            $scope.Catedraticos = $scope.Catedraticos[$scope.Index].Catedraticos;
        }
    });

    $scope.dataTableOpt = {
       //custom datatable options 
      // or load data through ajax call also
      "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
    
    $scope.IdCurso = ""    ;
    $scope.Index ="";

    $scope.asignarCurso = function(carnet){
        var data = {};
        data.carnet = carnet
        data.idcurso = $scope.IdCurso;

        var saveasignacion = AlumnosService.asignacion(data);
        saveasignacion.then(function (response) {
            $scope.EmpNo = response.status;
            alert('Datos almacenados correctamente');
            loadAlumnos();                        
        },
        function(response){
         alert('ha ocurrido un error al guardar la informacion' + response.status);
     });
    }
    


    $scope.fnSeleccionaCursoSeccion = function(curso, seccion){
        var SeccionCursoRecords = CatedraticosService.getIdCurso(curso,seccion);
        SeccionCursoRecords.then(function (d) {     //success
             $scope.IdCurso = d.data;
        },
        function(){
            alert("Ocurrio un error al cargar la informacion"); //fail
        }); 

    };

    $scope.fnSeleccionaCurso = function(curso){        
        var SeccionRecords = CatedraticosService.getAllSection(curso);
        SeccionRecords.then(function (d) {     //success
            $scope.secciones = d.data;
        },
        function(){
            alert("Ocurrio un error al cargar la informacion"); //fail
        }); 

      };


    //get single record by ID

    $scope.getData = function (Index) {
        $scope.Index = Index;
        $scope.curso = "";
        $scope.seccion = "";

        $scope.noCarnetAct  = $scope.Estudiantes[Index].noCarnet;
        $scope.correoAct    = $scope.Estudiantes[Index].correo;
        $scope.asignaciones = $scope.Estudiantes[Index].asignaciones;
        $scope.nombreAct    = $scope.Estudiantes[Index].nombres + " " + $scope.Estudiantes[Index].apellidos;
    }

    $scope.get = function (Student) {
        //debugger;
           // debugger;
           //
           $scope.asignacionesCurso = [];         
           $scope.noCarnetAct = Student.idCatedratico;
           $scope.correoAct = Student.correo;

           $scope.nombreAct = Student.nombres + " " + Student.apellidos

           var CourseRecords = CatedraticosService.getCursoSeccionCatedratico(Student.idCatedratico);
        CourseRecords.then(function (d) {     //success
                       $scope.asignacionesCurso = d.data;
        },
        function(){
            alert("Ocurrio un error al cargar la informacion"); //fail
        });
 
   }


});