//Angular controller 

appIngresos.controller('homeController', ['$scope', '$location', '$http', function ($scope, $location,$http) {
    //Close dialog if any when clicking broswer navigation buttons.
    /*$scope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
        if (newUrl != oldUrl ) {
            
            // /event.preventDefault(); //Keep exiting page instead of leaving.
        }
    });*/
    
    $scope.username = "";
    
    $scope.getUsername = function(){
    	$http.get('/SeminarioFrontEnd/user')
    	.then(function(response){
    		$scope.username = response.data.username;
    	},function(error){
    		alert(error);
    	});
    }
}])

