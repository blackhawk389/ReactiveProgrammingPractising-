import { Observable } from 'rxjs/Rx';

Observable.range(1,10).reduce(function(accomulated : number, nextnumber : number){
    return accomulated + nextnumber
}).subscribe(function(data){
    console.log(data)
}, function(err){
    console.log(err)
}, function(){
    console.log('complete')
})