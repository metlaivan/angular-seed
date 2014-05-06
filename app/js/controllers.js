'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

        .controller('HomeCtrl', ['$scope', function($scope) {

    }]).controller('EditorCtrl', ['$scope', function($scope) {
        var iFrame = document.getElementById("graph");
        $scope.create = function() {



        }
        $scope.open = function() {
            alert("open");
        }
        $scope.addNode = function() {
            iFrame.contentWindow.addNode();
        }
        $scope.addLink = function() {
            iFrame.contentWindow.addLink();
        }
        $scope.dell = function() {
            iFrame.contentWindow.delete_node_link();
        }

    }])
        .controller('NavBarCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
    }]);

