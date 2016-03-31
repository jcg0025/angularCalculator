var controller = angular.module('myApp.controller', []);
controller.controller('homeController', ['$scope', '$rootScope', function($scope, $rootScope){
   
$scope.add = function(operand1, operand2) {    

    if (!isNaN(operand1 + operand2)) {
        $scope.result = 'The sum is '+ parseInt(operand1 + operand2, 10);
        $scope.operand1 = undefined;
        $scope.operand2 = undefined;
    } else {
        alert('Two Operands Required');
    }
}

$scope.subtract = function(operand1, operand2) {
    
    if (!isNaN(operand1 - operand2)) {
        $scope.result = 'The difference is '+ parseInt(operand1 - operand2, 10);
        $scope.operand1 = undefined;
        $scope.operand2 = undefined;
    } else {
        alert('Two Operands Required');
    }
}

$scope.multiply = function(operand1, operand2) {
    if (!isNaN(operand1 * operand2)) {
        $scope.result ='The product is '+ parseInt(operand1 * operand2, 10);
        $scope.operand1 = undefined;
        $scope.operand2 = undefined;
    } else {
        alert('Two Operands Required');
    }
}

$scope.divide = function(operand1, operand2) {
    
    if (!isNaN(operand1/operand2)) {
        if (operand1/operand2 === Infinity){
            alert('Skynet Loading...');
            $scope.operand1 = undefined;
            $scope.operand2 = undefined;
        } else{
            $scope.result = 'The quotient is '+ parseInt(operand1 / operand2, 10);
            $scope.operand1 = undefined;
            $scope.operand2 = undefined;
        }
    } else {
            alert('Two Operands Required');
        }
}


}]);