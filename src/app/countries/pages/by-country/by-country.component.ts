import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      ul {
        position: absolute;
        width: 20rem;
        z-index: 999;
      }
      li {
        cursor: pointer;
      }
      .suggestions-flag {
        width: 30px;
        display: inline-block;
        margin-right: 20px;
      }
    `,
  ],
})
export class ByCountryComponent {
  anyError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

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

  getSuggestions(query: string) {
    this.anyError = false;
    if (!query) {
      this.suggestedCountries = [];
      return;
    }

    this.countriesService
      .searchCountry(query)
      .subscribe(
        (countries) => (this.suggestedCountries = countries.splice(0, 4))
      );
  }
}
