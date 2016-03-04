import { Observable } from 'rxjs/Rx';

Observable.range(1,10).filter(function(data){
    return data % 2 == 0; 
}).subscribe(function(data){
    console.log(data)
}, function(err){
    console.log(err)
}, function(){
    console.log('completed')
})