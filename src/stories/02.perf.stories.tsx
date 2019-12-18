import * as React from "react";

import JsonView from "../index";

export default {
  title: "JSON Viewer|Perf"
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

const omgValue = {
  halo: 1024,
  arr: []
};

for (let i = 0; i < omgValue.halo; i++) {
  // @ts-ignore
  omgValue.arr.push(objectValue);
}

export const AnEmptyObject = () => <JsonView value={{}} />;
export const ARidiculousObject = () => <JsonView value={omgValue} />;
