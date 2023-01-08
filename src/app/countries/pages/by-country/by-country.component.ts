import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  anyError: boolean = false;
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  search(query: string) {
    this.anyError = false;
    this.countriesService.searchCountry(query).subscribe(
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
