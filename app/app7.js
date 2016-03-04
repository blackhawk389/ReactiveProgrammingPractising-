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
            Rx_1.Observable.range(1, 10).filter(function (data) {
                return data % 2 == 0;
            }).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            }, function () {
                console.log('completed');
            });
        }
    }
});
//# sourceMappingURL=app7.js.map