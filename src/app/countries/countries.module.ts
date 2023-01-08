import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { AlertComponent } from './components/alert/alert.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDetailComponent,
    CountriesTableComponent,
    AlertComponent,
    CountriesInputComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ByCapitalComponent, ByCountryComponent, ByRegionComponent],
})
export class CountriesModule {}
