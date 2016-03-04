//maping thats i was looking for few days ago exact example wow!!
System.register(['rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1;
    var createing;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            createing = Rx_1.Observable.range(1, 5);
            //here data willl come into argum,ents
            createing.map(function (data) {
                return data * 2; //modifying
            }).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            }, function () {
                console.log('complete');
            });
        }
    }
});
//# sourceMappingURL=app6.js.map