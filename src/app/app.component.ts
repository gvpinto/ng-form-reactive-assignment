import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projStatus = ['Stable', 'Critical', 'Finished'];

  forbiddenProjNames = ['test'];

  projForm: FormGroup;

  ngOnInit(): void {
    this.projForm = new FormGroup({
      projName: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projStatus: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.projForm);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjNames.indexOf(control.value) !== -1) {
      return { forbiddenName: true };
    } else {
      return null;
    }
  }
}
