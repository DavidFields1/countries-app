import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private API_URL: string = 'https://restcountries.com/v3.1';
  params = new HttpParams().set('fields', 'name,capital,population,ccn3,flags');

  constructor(private http: HttpClient) {}

  searchCountry(query: string): Observable<Country[]> {
    const endpoint = `${this.API_URL}/name/${query}`;

    return this.http.get<Country[]>(endpoint, { params: this.params });
  }

  searchCapitalCity(query: string): Observable<Country[]> {
    const endpoint = `${this.API_URL}/capital/${query}`;

    return this.http.get<Country[]>(endpoint, { params: this.params });
  }

  searchCountryByCode(id: string): Observable<Country> {
    const endpoint = `${this.API_URL}/alpha/${id}`;

    return this.http.get<Country>(endpoint);
  }

  searchCountryByRegion(query: string): Observable<Country[]> {
    const endpoint = `${this.API_URL}/region/${query}`;

    return this.http.get<Country[]>(endpoint, { params: this.params });
  }
}
