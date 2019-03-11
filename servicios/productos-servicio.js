angular.module('app')
	.factory('productoServicio', productoServicio)
function productoServicio($http) {

	var obtenerProducto = function (empresa) {
		var respuesta = $http.get('http://localhost:3040/dataJson/products' + empresa + '.json').then(function (response) {
			return response.data.result;
		});
		return respuesta;
	};


	return {
		obtenerProducto: obtenerProducto,
	};
}