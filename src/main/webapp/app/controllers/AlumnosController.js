appIngresos.controller('AlumnosController', function ($scope, AlumnosService,NgTableParams,$filter,toastr, $locale,$http) {

    //Loads all Employee records when page loads
        $scope.data = {};
        $scope.ingresos = {};       
        $scope.originalData = {};
       
    //loadAlumnos();
    var alumnos;
    $scope.loadAlumnos = function(){
    	    	
        var EmployeeRecords = AlumnosService.getAllStudents();
        EmployeeRecords.then(function (d) {     //success
            $scope.Estudiantes = d.data;

                $scope.originalData = angular.copy($scope.Estudiantes);
                $scope.userTable = new NgTableParams({count:5}, {counts: [] ,dataset: $scope.Estudiantes});    
                toastr.info('Se cargo la Lista Correctamente','Informacion: ',{
                    iconClass: 'toast-info'
                });
            alumnos = d.data;
            
        },
        function(error){
            alert("Ocurrio un error al cargar la informacion" + error); //fail
        });


        var CourseRecords = AlumnosService.getAllCourses();
        CourseRecords.then(function (d) {     //success
            $scope.cursos = d.data;
        },
        function(){
            alert("Ocurrio un error al cargar la informacion"); //fail
        }); 




    }

  /*  $scope.$watch('Estudiantes', function() {
        if($scope.Index != ""){
            $scope.asignaciones = $scope.Estudiantes[$scope.Index].asignaciones;
        }
    });
*/
  
    
    $scope.IdCurso = ""    ;
    //$scope.Index ="";

    $scope.asignarCurso = function(carnet){
        var data = {};
        data.carnet = carnet
        data.idcurso = $scope.IdCurso;

        var saveasignacion = AlumnosService.asignacion(data);
        saveasignacion.then(function (response) {
            $scope.EmpNo = response.status;
            alert('Datos almacenados correctamente');
         //   loadAlumnos();                        
        },
        function(response){
         alert('ha ocurrido un error al guardar la informacion' + response.status);
     });



    }
    


    $scope.fnSeleccionaCursoSeccion = function(curso, seccion){
        var SeccionCursoRecords = AlumnosService.getIdCurso(curso,seccion);
        SeccionCursoRecords.then(function (d) {     //success
             $scope.IdCurso = d.data;
        },
        function(){
            alert("Ocurrio un error al cargar la informacion"); //fail
        }); 

    };

    $scope.fnSeleccionaCurso = function(curso){        
        var SeccionRecords = AlumnosService.getAllSection(curso);
        SeccionRecords.then(function (d) {     //success
            $scope.secciones = d.data;
        },
        function(){
            alert("Ocurrio un error al cargar la informacion"); //fail
        }); 

      };
    //save form data
    $scope.save = function () {
    	
    	
    	AlumnosService.usuarioSession()
    	.then(function(data){
    		 var usuario = data;
    		
    			var Estudiante = {
    	            nocarnet:$scope.noCarnetAct,
    	            correo: $scope.correoAct,
    	            idUsuario: usuario.userId
    	        };
    	        var saverecords = AlumnosService.save(Estudiante);
    	        saverecords.then(function (response) {
    	            $scope.EmpNo = response.status;
    	            alert('Datos almacenados correctamente');
    	            $scope.loadAlumnos();
    	            //loadEmployees();
    	            
    	        },
    	        function(response){
    	         alert('ha ocurrido un error al guardar la informacion' + response.status);
    	        });
    	},function(error){
    		alert(error);
    	});
        //debugger;    	
    	
        
    }


    //get single record by ID

    $scope.getData = function (Student) {
       // $scope.Index = Index;
        $scope.curso = "";
        $scope.seccion = "";

        /*$scope.noCarnetAct  = $scope.Estudiantes[Index].noCarnet;
        $scope.correoAct    = $scope.Estudiantes[Index].correo;
        $scope.asignaciones = $scope.Estudiantes[Index].asignaciones;
        $scope.nombreAct    = $scope.Estudiantes[Index].nombres + " " + $scope.Estudiantes[Index].apellidos*/
        
        $scope.noCarnetAct = Student.noCarnet;
        $scope.correoAct = Student.correo;
        $scope.asignaciones = Student.asignaciones;
        $scope.nombreAct = Student.nombres + " " + Student.apellidos;
    }

    $scope.get = function (Student) {
        //debugger;
           // debugger;
           // 
           $scope.noCarnetAct = Student.noCarnet;
           $scope.correoAct = Student.correo;
           $scope.asignaciones = Student.asignaciones;
           $scope.nombreAct = Student.nombres;
           $scope.apellidoAct = Student.apellidos;
           $scope.pagadoAct = Student.pagado;
 
   }

    //update Employee data
    $scope.update = function () {
        //debugger;
    	$scope.estudiante = {};
    	
    	$scope.estudiante.nombres = $scope.nombreAct;
    	$scope.estudiante.apellido = $scope.apellidoAct;
    	$scope.estudiante.correo = $scope.correoAct;
    	
    	
    	
    	console.log($scope.noCarnetAct);
    	console.log($scope.estudiante);

        AlumnosService.update($scope.noCarnetAct,$scope.estudiante)
        .then(function (d) {
            //loadEmployees();
        	$scope.loadAlumnos();
            alert("Record updated successfully");
        },
        function () {
            alert("Opps...","Error occured while updating","error");
        });
    }

    //delete Employee record
    $scope.delete = function (UpdateEmpNo) {
        debugger;
        var deleterecord = AlumnosService.delete($scope.noCarnet);
        deleterecord.then(function (d) {
            var Employee = {
                EmpNo: '',
                EmpName: '',
                Salary: '',
                DeptName: '',
                Designation: ''
            };
            loadAlumnos();
            alert("Record deleted succussfully");
        });
    }
});