angular.module('app')
    .directive('productoEmpresa',
        function () {
            return {
                restrict: 'E',

                scope: {
                    "idempresa": '=idempresa'
                },

                templateUrl: 'componentes/empresas-componente/producto-empresa/productos-varios.html',

                controller: function ($scope, productoServicio) {

                    productoServicio.obtenerProducto($scope.idempresa).then(function (response) {

                        $scope.productos = response.productos;

                    });





                }
            };
        });
