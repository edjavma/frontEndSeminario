appIngresos
  .controller('registroController', ['$scope','$http', function($scope,$http) {

  $scope.ordenarPor = function(orden) {
    $scope.ordenSeleccionado = orden;
  };

  $scope.registrar = function () {
    var data = {};
        data.apellidos    =  $scope.Apellidos;
        data.asignaciones =  [];  
        data.correo       =  $scope.Email;
        data.noCarnet     =  $scope.Carnet;
        data.nombres      =  $scope.Nombres;    
    $http({
        url: 'http://34.233.183.228:8080/seminario/alumno/addalumno',
        method: "POST",
        data: data
    })
    .then(function(response) {
      console.info(response);            
      if(response.data.correo){
        alert('fue registrado correctamente!');
      }
            // success
    }, 
    function(response) { // optional
        // failed
            console.info(response);            
    });
  };

}]);