import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { DataService } from '../data.service';
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
  formStructure!: IFormStructure;
  
  constructor(private formBuilder: FormBuilder, private dataService: DataService ) {}
  
  ngOnInit(): void {
    this.dataService.getForm("contact").subscribe(response => {
      this.formStructure = response[0];
      console.log(this.formStructure);
    

    let formGroup: Record<string, any> = {};
    this.formStructure.fields.forEach((field) => {
      let controlValidators: Validators[] = [];

      let textField =  field.textField;
      if (textField) {
        if (textField.required)
          controlValidators.push(Validators.required);
        let validator = textField.textValidation;
        if (validator) {
          if (validator.validator === 'email')
            controlValidators.push(Validators.email);
          if (validator.validator === 'minLength')
            controlValidators.push(Validators.minLength);
          if (validator.validator === 'maxLength')
              controlValidators.push(Validators.maxLength);
        }
        formGroup[field.name] = [textField.value || '', controlValidators];
      }
      let numField =  field.numField;
      if (numField) {
        if (numField.required)
          controlValidators.push(Validators.required);
        let validator = numField.numValidation;
        if (validator) {
          if (validator.validator === 'minvalue')
            controlValidators.push(Validators.min(validator.minvalue));
          if (validator.validator === 'max')
            controlValidators.push(Validators.max(validator.maxvalue));
        }
        formGroup[field.name] = [numField.value || '', controlValidators];
      }

    });

    this.dynamicForm = this.formBuilder.group(formGroup);
  });
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);

    if (!formControl) {
      return '';
    }


    if (control.numField) {
      if (control.numField.required) {
        if (formControl.hasError("required")) {
          return "this field is required";
        }
      }

      let validation = control.numField.numValidation;
      if (formControl.hasError(validation.validator)) {
        return validation.message;
      }
    }

    if (control.textField){
      if (control.textField.required) {
        if (formControl.hasError("required")) {
          return "this field is required";
        }
      }
      let validation = control.textField.textValidation;
      if (formControl.hasError(validation.validator)) {
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
