(function () {
    var app = angular.module('MyApp');
    app.directive("formula", formula);

    function formula() {
        return {
            restrict: "E",
            templateUrl: "./directive_formula/my_formula.html"

        }
    }
})();


(function () {
    var app = angular.module('MyApp');
    app.directive("maciej", formula);

    function formula() {
        return {
            restrict: "E",
            templateUrl: "./directive_formula/maciej.html"
            // link: function (scope) {
            //
            // }
        }
    }
})();