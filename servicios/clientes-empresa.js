angular.module('app')
	.factory('clienteServicio', clienteServicio)
function clienteServicio($http) {

	var obtenerCliente = function (empresa) {
		var respuesta = $http.get('http://localhost:3040/dataJson/clients' + empresa + '.json').then(function (response) {
			return response.data.result;
		});
		return respuesta;
	}; 


	return {
		obtenerCliente: obtenerCliente,
	};
}