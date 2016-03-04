import rx = require('rxjs/Rx');


//observer subscribes to an Observable. Then that observer reacts to whatever item or 
//sequence of items the Observable emits. 
//multiple observers/handlers
//this is a cold observer
// A “cold” Observable, on the other hand, waits until an observer subscribes to it 
//before it begins to emit items,and so such an observer is guaranteed to see the whole sequence from the beginning.
var obser : rx.Observable<any> = rx.Observable.create(function(obs : rx.Observer<String>){
    //prints on every next event emission
    obs.next('sarah');
    obs.next('farah');
    obs.next('fiza');
    obs.complete(); //is it necessory?
})

//An Observable calls this method whenever the Observable emits an item. 
//This method takes as a parameter the item emitted by the Observable.

//the subscribales only showing whats coming from event
obser.subscribe(function(data){
    console.log("next" + data);
},function(err){
    console.log(err)
},function(){
    console.log('complete')
})

