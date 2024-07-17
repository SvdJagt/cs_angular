import { Injectable } from '@angular/core';
import { IFormStructure } from './form-structure';

 @Injectable({
   providedIn: 'root'
 })
 export class FormService {

   constructor() { }

  //  getFormStructure(): IFormStructure[] {
  //    // Return the JSON structure defined earlier
  //    return;
  //     // {
  //     //   "type": "text",
  //     //   "label": "Name",
  //     //   "name": "name",
  //     //   "value": "",
  //     //   "validations": [
  //     //     {
  //     //       "name": "required",
  //     //       "validator": "required",
  //     //       "message": "Name is required"
  //     //     }
  //     //   ]
  //     // },
  //     // {
  //     //   "type": "email",
  //     //   "label": "Email",
  //     //   "name": "email",
  //     //   "value": "",
  //     //   "validations": [
  //     //     {
  //     //       "name": "required",
  //     //       "validator": "required",
  //     //       "message": "Email is required"
  //     //     },
  //     //     {
  //     //       "name": "pattern",
  //     //       "validator": "email",
  //     //       "message": "Invalid email format"
  //     //     }
  //     //   ]
  //     // },
  //     // {
  //     //   "type": "checkbox",
  //     //   "label": "Check this box",
  //     //   "name": "check",
  //     //   "value": ""
  //     // }


  //   //   {
  //   //     type: 'select',
  //   //     label: 'Country',
  //   //     name: 'country',
  //   //     value: 1,
  //   //     options: [
  //   //       { label: 'India', value: 1 },
  //   //       { label: 'USA', value: 2 },
  //   //       { label: 'Canada', value: 3 },
  //   //     ],
  //   //     validations: [
  //   //       {
  //   //         name: 'required',
  //   //         validator: 'required',
  //   //         message: 'Address is required',
  //   //       },
  //   //     ],
  //   //   },          
  //   //   {
  //   //     type: 'text',
  //   //     label: 'Name',
  //   //     name: 'name',
  //   //     value: '',
  //   //     validations: [
  //   //       {
  //   //         name: 'required',
  //   //         validator: 'required',
  //   //         message: 'Name is required',
  //   //       },
  //   //     ],
  //   //   },
  //   //   {
  //   //     type: 'number',
  //   //     label: 'Age',
  //   //     name: 'age',
  //   //     value: '',
  //   //     validations: [],
  //   //   },
  //   //   {
  //   //     type: 'textarea',
  //   //     label: 'Description',
  //   //     name: 'description',
  //   //     value: '',
  //   //     validations: [
  //   //       {
  //   //         name: 'required',
  //   //         validator: 'required',
  //   //         message: 'Description is required',
  //   //       },
  //   //     ],
  //   //   },
      
  //   //   {
  //   //     type: 'radio',
  //   //     label: 'Gender',
  //   //     name: 'gender',
  //   //     value: true,
  //   //     options: [
  //   //       { label: 'Male', value: true },
  //   //       { label: 'Female', value: false },
  //   //     ],
  //   //     validations: [],
  //   //   },
      
  //   // ];
  //  }

   
 }