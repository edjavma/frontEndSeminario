
appIngresos.controller('infoAlumnosController', function ($scope, infoAlumnosService,NgTableParams,$filter,toastr, $locale,DTOptionsBuilder, DTColumnBuilder) {    

		$scope.info = {};
		$scope.img = "";
 
		$scope.getInfo = function(){
				infoAlumnosService.usuarioSession()
				.then(function(data){
					infoAlumnosService.getInfoAlumno(data.username)
					.then(function(data){
						console.log(data);
						$scope.info = data[0];						
					},function(error){
						console.log(error);
					});
					
					
					$scope.getQr(data.username);
				},function(error){
					console.log(error);
				});
		}
		
		$scope.getQr = function(userId){
			console.log(userId);
			infoAlumnosService.getCodigoQr(userId)
			.then(function(data){
				console.log(data);
				$scope.img = data[0].url;						
			},function(error){
				console.log(error);
			});
		}

});