import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormService } from '../form-service.service';
import { IFormStructure } from '../form-structure';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {

  dynamicForm: FormGroup = this.formBuilder.group({});
  formStructure: IFormStructure[] = this.formService.getFormStructure();

  constructor(private formBuilder: FormBuilder, private formService: FormService ) {}
  
  ngOnInit(): void {
    let formGroup: Record<string, any> = {};
    this.formStructure.forEach((control) => {
      let controlValidators: Validators[] = [];

      if (control.validations) {
        ``;
        control.validations.forEach(
          (validation: {
            name: string;
            validator: string;
            message: string;
          }) => {
            if (validation.validator === 'required')
              controlValidators.push(Validators.required);
            if (validation.validator === 'email')
              controlValidators.push(Validators.email);
            // Add more built-in validators as needed
          }
        );
      }

      formGroup[control.name] = [control.value || '', controlValidators];
    });

    this.dynamicForm = this.formBuilder.group(formGroup);
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);

    if (!formControl) {
      return '';
    }

    for (let validation of control.validations) {
      if (formControl.hasError(validation.name)) {
        return validation.message;
      }
    }

    return '';
  }

  onSubmit() {
    if (!this.dynamicForm.valid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }
    console.log(this.dynamicForm.value);
  }
}
