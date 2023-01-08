import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private API_URL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(query: string): Observable<Country[]> {
    const endpoint = `${this.API_URL}/name/${query}`;

    return this.http.get<Country[]>(endpoint);
  }

  searchCapitalCity(query: string): Observable<Country[]> {
    const endpoint = `${this.API_URL}/capital/${query}`;

    return this.http.get<Country[]>(endpoint);
  }

  searchCountryByCode(id: string): Observable<Country> {
    const endpoint = `${this.API_URL}/alpha/${id}`;

    return this.http.get<Country>(endpoint);
  }
}
