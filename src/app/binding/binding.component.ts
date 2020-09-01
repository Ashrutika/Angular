import { Component, OnInit, Input, Output,  EventEmitter, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit,OnDestroy,OnChanges,AfterContentInit,AfterContentChecked {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit() called")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() called");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy() called");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit() called");
  }
  ngOnChanges(){
    console.log("ngOnChanges() called");
  }

@Input() subtitle;
@Output() onHello = new EventEmitter();

  fireEvent(e){
    this.onHello.emit(e);
    console.log(e);
  }
}
