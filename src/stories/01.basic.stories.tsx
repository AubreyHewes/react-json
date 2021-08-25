import * as React from "react";

import JsonView from "../index";

import { stringValue, numberValue, arrayValue, objectValue } from "./fixtures";

export default {
  title: "JSON Viewer/Types",
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
