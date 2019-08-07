import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CounterComponent),
  multi: true
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  providers: [COUNTER_CONTROL_ACCESSOR],
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements ControlValueAccessor{
  private onTouch: Function;
  private onModelChange: Function;

  constructor() { } 

  registerOnTouched(fn) { this.onTouch = fn; }
  registerOnChange(fn) { this.onModelChange = fn; }
  writeValue(value) { this.value = value || 0; }
  
  @Input() max: number = 50;
  @Input() min: number = 0;
  @Input() step: number = 1;
  value: number = 0;

  increment(){
    if(this.value < this.max)  {
      this.value =+this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
  decrement(){
    if(this.value > this.min)  {
      this.value = +this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
