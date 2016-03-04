import { Observable } from 'rxjs/Rx';

//DOM click
//filter only emit specific events
//filter returns true only if condition is true
//take is furthur filtering events
Observable.fromEvent(document, "click").filter(function(mouseEvent : MouseEvent){
    return mouseEvent.clientX < window.innerWidth/2;
}).take(10).subscribe(function( mouseEvents : MouseEvent){
    console.log(mouseEvents.clientX, mouseEvents.clientY)
})
//console print certain click event