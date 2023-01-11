import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [' button { margin-right: 5px; border: 2px solid #2480FD }'],
})
export class ByRegionComponent {
  regions = ['asia', 'europe', 'americas', 'africa', 'oceania'];
  selectedRegion = '';
  anyError: boolean = false;
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  search(query: string) {
    this.anyError = false;
    this.countriesService.searchCountryByRegion(query).subscribe(
      (resp) => {
        this.countries = resp;
        console.log(
          '🚀 ~ file: by-region.component.ts:23 ~ ByRegionComponent ~ search ~ countries',
          this.countries
        );
      },
      (error) => {
        this.anyError = true;
        this.countries = [];
      }
    );
  }

  selectRegion(region: string) {
    if (region === this.selectedRegion) return;

    this.selectedRegion = region;
    this.countries = [];
    this.search(region);
  }

  getStyles(region: string): string {
    return region === this.selectedRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
