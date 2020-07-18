import { Component, OnInit } from '@angular/core';

interface SelectOption {
  value: number;
  label: string;
}

type T1 = { [key: number]: SelectOption };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ssr10';
  ngOnInit(): void {
    const t: T1 = { 4: { value: 9, label: '0909' } };
  }

  // queryCountriesAndCodes(): Observable<{ regionsMap: { [key: number]: SelectOption[] }, countries: SelectOption[] } | never> {
  //   return this._http.get(`${this._configApp.apiRootV2}/dictionaries/codes`)
  //     .pipe(
  //       map((data: any[]) => {
  //         const countries = data.map(({ id, displayName }) => ({ value: id, label: displayName }));          
  //         const regionsMap = {};
  //         for (const country of data) {
  //           regionsMap[country.id] = country.codes.map(({id, text}) =>({ value: id, label: text}));
  //         }
  //       return { countries, regionsMap }
  //       }),
  //       catchError(e => {
  //         this._err
  //           .withToast({
  //             doTranslate: true,
  //             title: 'error'
  //           })
  //           .handleError(e);
  //         return EMPTY;
  //       })
  //     )
  // }
}
