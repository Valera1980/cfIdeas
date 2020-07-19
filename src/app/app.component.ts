import { Observable, of } from 'rxjs';
import { ICustomFieldCompoent } from './interfaces/cf-component.intreface';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { customFields } from '../decorators/custom-fileld.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, ICustomFieldCompoent {

  title = 'ssr10';
  form: FormGroup;
  @ViewChild('cfPlace', { static: true }) cfPlace: ElementRef<any>;
  constructor(private _fb: FormBuilder) {

  }
  ngOnInit(): void {
    console.log('>>>>>>>>>>>>>>>>>>>');
    console.log(this.cfPlace);
    this.buildForm(this.cfPlace).subscribe(f => {
      this.form = f;
    });
    this.form.valueChanges.subscribe(v => {
      console.log(v);
    })
  }
  @customFields()
  buildForm(dom?: any): Observable<FormGroup> {
    return of(this._fb.group({
      name: ''
    }));
  }

}
