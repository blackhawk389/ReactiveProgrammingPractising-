System.register(['rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            Rx_1.Observable.fromArray(['Adrià', 'Jen', 'Sergi']).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            }, function () {
                console.log('completed');
            });
        }
    }
});
//# sourceMappingURL=app4.js.map