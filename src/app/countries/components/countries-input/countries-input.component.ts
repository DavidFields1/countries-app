import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
})
export class CountriesInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  query = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(400)).subscribe((query) => {
      this.onDebounce.emit(query);
    });
  }

  search() {
    this.onEnter.emit(this.query);
  }

  onKeyPressed() {
    this.debouncer.next(this.query);
  }
}
