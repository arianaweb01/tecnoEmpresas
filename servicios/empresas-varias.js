angular.module('app')
	.factory('empresasVarias', empresasVarias)
function empresasVarias($http) {

	var obtenerEmpresa = function () {
		var respuesta = $http.get('http://localhost:3040/dataJson/companies.json').then(function (response) {
			return response.data.result;
		});
		return respuesta;
	};


	return {
		obtenerEmpresa: obtenerEmpresa,
	};
}