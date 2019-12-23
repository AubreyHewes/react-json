import * as React from "react";

import JsonView from "../index";

import { stringValue, numberValue, arrayValue, objectValue } from "./fixtures";

export default {
  title: "JSON Viewer|Basic"
};

const stringValue = "HelloWorld";
const numberValue = 42;
const arrayValue = [
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
const objectValue = {
  string: stringValue,
  number: numberValue,
  "boolean:true": true,
  "boolean:false": false,
  null: null,
  array: arrayValue
};

export const ANull = () => <JsonView value={null} />;
export const AString = () => <JsonView value={stringValue} />;
export const ANumber = () => <JsonView value={numberValue} />;
export const ABoolean = () => <JsonView value={true} />;
export const AnArray = () => <JsonView value={arrayValue} />;
export const AnObject = () => (
  <JsonView
    value={{
      ...objectValue,
      object: objectValue
    }}
  />
);
