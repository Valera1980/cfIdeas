import { Observable, of, Subject } from 'rxjs';
import { ICustomFieldComponent } from './interfaces/cf-component.intreface';
import { Component, OnInit, ViewChild, ElementRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { customFields } from '../decorators/custom-fileld.decorator';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, ICustomFieldComponent {
  asyncPending = true;
  title = 'ssr10';
  form: FormGroup;
  @ViewChild('cfPlace', { static: true }) cfPlace: ElementRef<any>;
  formReady$ = new Subject();
  constructor(
    private _fb: FormBuilder,
    private _http: HttpClient,
    private _resolver: ComponentFactoryResolver
    ) {

  }
  ngOnInit(): void {
    console.log('>>>>>>>>>>>>>>>>>>>');
    console.log(this.cfPlace);
    this.buildForm().subscribe(f => {
      this.form = f;
      this.asyncPending = false;
      this.formReady$.next();
    });

    this.formReady$
      .pipe(
        mergeMap(() => {
          return this.form.valueChanges;
        })
      ).subscribe(d => {
        console.log(d);
      });

  }
  @customFields()
  buildForm(): Observable<FormGroup> {
    return of(this._fb.group({
      name: ''
    }));
  }

}
