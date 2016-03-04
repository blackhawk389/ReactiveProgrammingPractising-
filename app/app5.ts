import { Observable } from 'rxjs/Rx';

var first_stream : Observable<any>= Observable.interval(100).map(function(i : number){
    console.log('Stream A'+ i)
});
var second_stream  : Observable<any>=Observable.interval(200).map(function(i : number){
    console.log('Stream B' + i)
})
Observable.merge(first_stream, second_stream).subscribe(function(data){
    console.log(data)
}, function(err){
    console.log(err)
}, function(){
    console.log('completed')
})
//Returns an observable sequence that produces a value after each period.
//its another method of creating observables/data streams