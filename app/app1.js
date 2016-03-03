System.register(['rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1;
    var button, event;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            //the alternative for importing whole module instead we are just importing useful classes 
            //from module
            //now wew ill get here the event to make it observable 
            button = document.getElementById('button');
            //making observable
            //the event and which event? its click
            event = Rx_1.Observable.fromEvent(button, 'click');
            //now this variable has type of observable, we can subscrible to it
            event.subscribe(function (data) {
                alert(data + "clicked");
                console.log(data); // the data consist of points of coordinates
            }, function (err) {
                alert(err + "Error");
            }, function () {
                console.log('completion');
            });
        }
    }
});
//# sourceMappingURL=app1.js.map