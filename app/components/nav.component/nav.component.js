(function() {
    'use strict'

    var devNav = {
        templateUrl: './app/components/nav.component/nav.component.html',
        controller: navCtrl
    }

    angular
        .module('devApp')
        .component('devNav', devNav)

    function navCtrl() {
        var vm = this;
    }
})();