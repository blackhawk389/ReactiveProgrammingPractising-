System.register(['rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1;
    var first_stream, second_stream;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            first_stream = Rx_1.Observable.interval(100).map(function (i) {
                console.log('Stream A' + i);
            });
            second_stream = Rx_1.Observable.interval(200).map(function (i) {
                console.log('Stream B' + i);
            });
            Rx_1.Observable.merge(first_stream, second_stream).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            }, function () {
                console.log('completed');
            });
        }
    }
});
//Returns an observable sequence that produces a value after each period.
//its another method of creating observables/data streams 
//# sourceMappingURL=app5.js.map