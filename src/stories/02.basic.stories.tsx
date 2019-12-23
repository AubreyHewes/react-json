import * as React from "react";

import JSONViewFromStringWorkspace from "./components/JSONViewFromStringWorkspace";

import { objectValue } from "./fixtures";

export default {
  title: "JSON Viewer|Render from String"
};

export const ValidJSONString = () => (
  <JSONViewFromStringWorkspace
    description="Try an render a string that is valid JSON"
    value={JSON.stringify(objectValue, null, 2)}
  />
);

export const InvalidJSONString = () => (
  <JSONViewFromStringWorkspace description="Try an render a string that is invalid JSON" value="{test: 1}" />
);
