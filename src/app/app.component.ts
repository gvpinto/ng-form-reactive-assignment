import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projStatus = ['Stable', 'Critical', 'Finished'];

  forbiddenProjNames = ['Test'];

  projForm: FormGroup;

  ngOnInit(): void {
    this.projForm = new FormGroup({
      projName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
        // this.forbiddenNames.bind(this)
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projStatus: new FormControl('Critical', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.projForm);
  }

  //   forbiddenNames(control: FormControl): { [s: string]: boolean } {
  //     if (this.forbiddenProjNames.indexOf(control.value) !== -1) {
  //       return { forbiddenName: true };
  //     } else {
  //       return null;
  //     }
  //   }

  //   forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (this.forbiddenProjNames.indexOf(control.value) !== -1) {
  //           resolve({ invalidProjectName: true });
  //         } else {
  //           resolve(null);
  //         }
  //       }, 2000);
  //     });
  //     return promise;
  //   }
}
