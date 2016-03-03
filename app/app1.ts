import { Observable } from 'rxjs/Rx';
//the alternative for importing whole module instead we are just importing useful classes 
//from module

//now wew ill get here the event to make it observable 
var button = document.getElementById('button');
//making observable

//the event and which event? its click
var event = Observable.fromEvent(button, 'click');

//now this variable has type of observable, we can subscrible to it

event.subscribe(function(data){
    alert(data + "clicked");
    console.log(data)// the data consist of points of coordinates
},
function(err){
    alert(err + "Error")
},
function(){
    console.log('completion')
})
