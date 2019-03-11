angular.module('app')
    .directive('clienteEmpresa',
        function () {
            return {
                restrict: 'E',

                scope: {
                    "idempresa": '=idempresa'
                },

                templateUrl: 'componentes/clientes-empresa/clientes-empresa.html',

                controller: function ($scope, clienteServicio) {

                    clienteServicio.obtenerCliente($scope.idempresa).then(function (response) {

                        $scope.clientes = response.clients;


                    });





                }
            };
        });
