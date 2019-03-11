angular.module('app')
    .directive('empresaComponente',
        function () {
            return {
                restrict: 'E',


                templateUrl: 'componentes/empresas-componente/empresa-plantilla.html',

                controller: function ($scope, empresasVarias) {
                    $scope.ocultar = [];

                    empresasVarias.obtenerEmpresa().then(function (response) {

                        $scope.companies = response.companies;
                    });


                    $scope.setOcultar = function (item) {
                        console.log($scope.ocultar);
                        $scope.ocultar[item] = !$scope.ocultar[item];
                    }



                }
            };
        });
