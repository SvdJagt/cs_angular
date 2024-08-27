
export interface IFormStructure {
  formId: number;
  name: string;
  onSubmit: string;
  fields: {
    fieldId: number;
    type: string;
    label: string;
    name: string;
    value: string;
    textField?: {
      field: string;
      textValidation?: {
        name: string;
        validator: string;
        value: string;
        message: string;
      };
      required: boolean;
    };
    numField?: {
      field: string;
      numValidation?: {
        name: string;
        validator: string;
        message: string;
        minvalue: number;
        maxvalue: number;
      };
      required: boolean;
    };
    selectField?: {
      field: string;
      lookupTable: string;
      lookupWhere: string;
      options: { 
        displayValue: string;
        value: string;
      }[]    
    };
    lookupSelectField?: {
      field: string;
      lookupCode: string;
      options: { 
        displayValue: string;
        value: string;
      }[]    
    }
  }[];
}

// export interface IFormStructure {
//   type: string;
//   label: string;
//   name: string;
//   value: string | number | boolean;
//   options?: { label: string; value: number | string | boolean }[];
//   validations?: {
//     name: string;
//     validator: string;
//     message: string;
//   }[];
// }
