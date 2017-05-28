(function() {
    'use strict'

    var devLanding = {
        templateUrl: "./app/components/landing.component/landing.component.html",
        controller: homeCtrl
    };

    angular
        .module('devApp')
        .component('devLanding', devLanding);

    function homeCtrl() {
        var vm = this;

        $('.parallax').parallax();
    }
})();