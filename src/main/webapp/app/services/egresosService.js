angular.module('appIngre')
	.factory('egresosService', function($q,$filter){
	var fac = {};

	fac.obtenerEgresos = function(){
			var deferred = $q.defer();
			var data = new Array();
			for(var i = 0; i < 6; i++){
				data.push({
					fecha: '0'+i+'/08/2017',
					carnet: '0910-13-295'+i,
					tipo: 'Apellido Persona '+i,
					total: '8'+i,
					descripcion: 'Pago ' + i,
					isEditing: false
				});
			}
			deferred.resolve(data);
			return deferred.promise;
		}

	fac.guardarEgreso = function(data){
		var deferred = $q.defer();
		console.log(data);
		deferred.resolve("creado");
		return deferred.promise
	}

	return fac;
	});