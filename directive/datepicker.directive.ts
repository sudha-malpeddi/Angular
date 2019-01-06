import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[datepicker]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,useExisting: 
    forwardRef(() => DatePickerDirective),
    multi: true
  }]
})
export class DatePickerDirective implements ControlValueAccessor {  
    value: string;
    private _startDate : Date = new Date();
    private _endDate : Date;
    private _difference : any = 0;

    @Input()
    set diff(diff: any){
      this._difference = diff;
    }
    
    @Input()
    set date(date: string) {
      let currentDate = new Date();

      if(date != null || date != undefined){
        this._startDate = new Date(date);
        if(currentDate >= this._startDate)
          this._startDate = currentDate;          
      } else {
        this._startDate = currentDate;
      }
         
      this._endDate = new Date();           

      this._endDate.setDate(this._startDate.getDate() + Number(this._difference));
    }
 
    constructor(protected el: ElementRef) {}

    ngAfterViewInit(){         
      $(this.el.nativeElement).datepicker({
        dateFormat: "dd/mm/yy",
        changeMonth: true,
        changeYear: true, 
        minDate: this._startDate,
        maxDate: this._endDate,
        showAnim : 'slideDown',
      }).on('change', e => this.onModelChange(e.target.value));
    } 

    onModelChange: Function = () => {};
    
    onModelTouched: Function = () => {};

    writeValue(val: string) : void {
        this.value = val;
    }
    
    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }
}