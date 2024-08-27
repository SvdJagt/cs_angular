import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators, MinValidator} from '@angular/forms';
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
  @Input() formName!: string;
  @Output() newItemEvent = new EventEmitter<Object>();
    


  dynamicForm: FormGroup = this.formBuilder.group({});
  formStructure!: IFormStructure;
  
  constructor(private formBuilder: FormBuilder, private dataService: DataService ) {}
  
  ngOnInit(): void {
    this.dataService.getForm(this.formName).subscribe(response => {
      this.formStructure = response;
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
            if (validator.validator === 'pattern') {
              const passwordregex: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
              controlValidators.push(Validators.pattern(passwordregex));
              console.log(validator.value);}
          }
          formGroup[field.name] = [field.value || '', controlValidators];
        }
        let numField =  field.numField;
        if (numField) {
          if (numField.required)
            controlValidators.push(Validators.required);
          let validator = numField.numValidation;
          if (validator) {
            if (validator.validator === 'min')
              controlValidators.push(Validators.min(validator.minvalue));
            if (validator.validator === 'max')
              controlValidators.push(Validators.max(validator.maxvalue));
            if (validator.name === "minmax")
              controlValidators.push(Validators.min(validator.minvalue));
              controlValidators.push(Validators.max(validator.maxvalue));

          }
          formGroup[field.name] = [field.value || '', controlValidators];
        }

        let selectField = field.selectField;
        if (selectField){
          formGroup[field.name] = [field.value || ''];
        }
        let lookupSelectField = field.lookupSelectField;
        if (lookupSelectField){
          formGroup[field.name] = [field.value || ''];
        }

      });

      this.dynamicForm = this.formBuilder.group(formGroup);
      console.log(this.dynamicForm);
    });
  }

  getErrorMessage(control: any) {
    console.log("fetching errror message");
    const formControl = this.dynamicForm.get(control.name);
    if (!formControl) {
      return '';
    }

    if ((control.numField?.required || control.textField?.required) && formControl.hasError("required")) {
      return "This field is required";
    }

    let validation = control.numField?.numValidation || control.textField?.textValidation;
    if (validation.name === "minmax") {
      if (formControl.hasError("min") || formControl.hasError("max")) {
        return validation.message;
      }
    }
    if (formControl.hasError(validation.validator)) {
      return validation.message;
    }
    

    return '';
  }

  // selectedTeam = '';
	// onSelected(controlname:string, value:string): void {
	// 	this.dynamicForm[controlname].setValue(value);
	// }

  onSubmit() {
    console.log("submitted");
    // if (!this.dynamicForm.valid) {
    //   this.dynamicForm.markAllAsTouched();
    //   return;
    // }
    
    let formValues = this.dynamicForm.value;
    //let formValues = selectedOption.value;
    //let formValues = data;
    console.log(formValues);
    this.newItemEvent.emit(formValues);
    
  }
}
