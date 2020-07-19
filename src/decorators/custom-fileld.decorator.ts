import { delay } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { of, Observable } from 'rxjs';


export function customFields(): any {
     return (target: any, propKey: string, propDescriptor: PropertyDescriptor) => {
          // const decoratorValue  = Reflect.getOwnPropertyDescriptor(target, propKey);
          // console.log(decoratorValue);

          const origin = propDescriptor.value;
          console.log(target);
          console.log(propKey);
          console.log(propDescriptor);
          const http = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
          const url = 'http://localhost:7777';
          // http.get(url).subscribe();



          propDescriptor.value = function (...args: any[]) {
               console.log(args);
               const v: Observable<FormGroup> = origin.apply(this);
               return v
                    .pipe(
                         delay(2000)
                    )
               // console.log(form);
               // return of(form);

          }
          //     console.log(propDescriptor.value);

          // return propDescriptor;

     }

}
