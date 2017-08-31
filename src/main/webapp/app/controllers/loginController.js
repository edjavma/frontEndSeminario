angular.module('umgApp').controller('loginController', function($scope, $resource, $filter, $http, $httpParamSerializer){	

	
		$scope.message = "";
	    $scope.encoded = btoa("umgapp:umgapp2017");
	    $scope.data = {
    	        grant_type:"password", 
    	        username: "", 
    	        password: ""
    	};
	     
	    $scope.login = function() { 
	    	
	    	
	        var req = {
	            method: 'POST',
	            url: "http://localhost:8083/SeminarioUmg/oauth/token",
	            headers: {
	                "Authorization": "Basic " + $scope.encoded,
	                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
	            },
	            data: $httpParamSerializer($scope.data)
	        }
	        $http(req).then(function(data){
	        	console.log(data);
	            $http.defaults.headers.common.Authorization = 
	              'Bearer ' + data.data.access_token;
	           // $cookies.put("access_token", data.data.access_token);
	            window.location.href="/SeminarioFrontEnd/home.jsp";
	        },function(error){
	        	$scope.username = null;
	        	$scope.password = null;
	        	$scope.message = "error en credenciales";
	        	console.log(error);
	        });   
	    }   
	
});