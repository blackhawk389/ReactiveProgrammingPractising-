//maping thats i was looking for few days ago exact example wow!!

import { Observable } from 'rxjs/Rx';


var createing = Observable.range(1, 5);

//here data willl come into argum,ents
createing.map(function(data){
    return data * 2; //modifying
}).subscribe(function(data){
    console.log(data)
}, function(err){
    console.log(err)
}, function(){
    console.log('complete')
})
