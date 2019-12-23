export const stringValue = "HelloWorld";
export const numberValue = 42;
export const arrayValue = [
  numberValue,
  true,
  stringValue,
  null,
  false,
  {
    string: stringValue,
    number: numberValue,
    "boolean:true": true,
    "boolean:false": false,
    null: null
  }
];
export const objectValue = {
  string: stringValue,
  number: numberValue,
  "boolean:true": true,
  "boolean:false": false,
  null: null,
  array: arrayValue
};
