// Controllers/Directives

(function(){
	var app = angular.module('fetchingData', []);

	app.controller('MyData', ['$http', function($http){
		// The funky array injector with the service, '$http', and the argument, $http
		var whole = this;
		// Create a value for this, since this is bound within scope, to use in our promise callback
		
		whole.part = ['nothing'];
		// Create a default, usually an empty array, that loads immediately before the ajax call
		
		$http({method: 'GET', url: 'http://localhost:1989/data'})
		.then(function(pieces){
			console.log(pieces.data, "blue")
			whole.part = pieces.data;
		});
	}]);

	// var pieces = ["blue", "black", "green"];

	
})();
// Don't forget to wrap and call!