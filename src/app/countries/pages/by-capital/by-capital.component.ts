import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  anyError: boolean = false;
  countries: Country[] = [];

  constructor(private CountriesService: CountriesService) {}

  search(query: string) {
    this.anyError = false;
    this.CountriesService.searchCapitalCity(query).subscribe(
      (resp) => {
        this.countries = resp;
      },
      (error) => {
        this.anyError = true;
        this.countries = [];
      }
    );
  }

  suggestions(query: string) {
    this.anyError = false;
    // TODO: implement suggestions
  }
}
