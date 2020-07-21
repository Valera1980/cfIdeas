import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComponentFactoryResolver, ElementRef } from '@angular/core';
type Tparams = [ElementRef<any>, HttpClient, ComponentFactoryResolver];
export interface ICustomFieldComponent {
    form: FormGroup;
    buildForm(p: Tparams): Observable<FormGroup>;
}
