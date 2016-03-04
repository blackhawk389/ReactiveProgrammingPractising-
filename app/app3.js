System.register(['rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var rx;
    var obser;
    return {
        setters:[
            function (rx_1) {
                rx = rx_1;
            }],
        execute: function() {
            //observer subscribes to an Observable. Then that observer reacts to whatever item or 
            //sequence of items the Observable emits. 
            //multiple observers/handlers
            //this is a cold observer
            // A “cold” Observable, on the other hand, waits until an observer subscribes to it 
            //before it begins to emit items,and so such an observer is guaranteed to see the whole sequence from the beginning.
            obser = rx.Observable.create(function (obs) {
                //prints on every next event emission
                obs.next('sarah');
                obs.next('farah');
                obs.next('fiza');
                obs.complete(); //is it necessory?
            });
            //An Observable calls this method whenever the Observable emits an item. 
            //This method takes as a parameter the item emitted by the Observable.
            //the subscribales only showing whats coming from event
            obser.subscribe(function (data) {
                console.log("next" + data);
            }, function (err) {
                console.log(err);
            }, function () {
                console.log('complete');
            });
        }
    }
});
//# sourceMappingURL=app3.js.map