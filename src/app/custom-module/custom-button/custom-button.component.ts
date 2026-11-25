import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() text!: string;
  @Input() style!: string;
  @Input() value!: number;
  @Output() returnValue = new EventEmitter<number>();
  
  onClick(){
    this.returnValue.emit(this.value);
  }
}
