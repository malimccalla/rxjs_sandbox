import $ from 'jquery';
import Rx from 'rxjs/Rx';

const button = $('#btn');

const btnStream$ = Rx.Observable.fromEvent(button, 'click');

btnStream$.subscribe(
  (e) => console.log(e),
  (error) => console.log(error),
  () => console.log('complete')
);
