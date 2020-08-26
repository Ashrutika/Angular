import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() subtitle;
@Output() onHello = new EventEmitter();

  fireEvent(e){
    this.onHello.emit(e);
    console.log(e);
  }
}
