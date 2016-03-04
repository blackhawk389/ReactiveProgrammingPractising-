import { Observable } from 'rxjs/Rx';

Observable.fromArray(['Adrià', 'Jen', 'Sergi']).subscribe(function(data){
    console.log(data);
},
function(err){
    console.log(err)
}, function(){
    console.log('completed')
})