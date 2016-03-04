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
            //DOM click
            //filter only emit specific events
            //filter returns true only if condition is true
            //take is furthur filtering events
            Rx_1.Observable.fromEvent(document, "click").filter(function (mouseEvent) {
                return mouseEvent.clientX < window.innerWidth / 2;
            }).take(10).subscribe(function (mouseEvents) {
                console.log(mouseEvents.clientX, mouseEvents.clientY);
            });
        }
    }
});
//console print certain click event 
//# sourceMappingURL=app2.js.map