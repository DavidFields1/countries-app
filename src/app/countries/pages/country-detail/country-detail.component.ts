import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styles: [],
})
export class CountryDetailComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.countriesService.searchCountryByCode(id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByCode(id)),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country[0];
      });
  }
}
