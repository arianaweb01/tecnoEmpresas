angular.module('app')
    .directive('infoEmpresa',
        function () {
            return {
                restrict: 'E',

                scope: {
                    "compani": '=compani',
                },

                templateUrl: 'componentes/informacion-empresa/template-info.html',
                controller: function ($scope, empresasVarias) {
                    $scope.dataEmpresa = $scope.compani;

                }
            };
        });
