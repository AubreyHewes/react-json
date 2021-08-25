import * as React from "react";

import JsonView from "../../index";

// import "./Example.scss";

interface ExampleProps {
  description: string;
  valueFromString?: string;
  value?: any;
}

export const JSONViewFromStringWorkspace: React.FC<ExampleProps> = ({ description, value }) => {
  const [stringValue, setStringValue] = React.useState(value);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div>{description}</div>
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div>Input</div>
          <textarea
            style={{ flex: 1, fontFamily: "monospace" }}
            onChange={e => {
              console.log("newvalue", e.target.value);
              setStringValue(e.target.value);
            }}
            defaultValue={stringValue}
          />
        </div>
        <div style={{ width: 10, backgroundColor: "red" }} />
        <div style={{ flex: 1 }}>
          <div>Output</div>
          <JsonView value={stringValue} />
        </div>
      </div>
    </div>
  );
};

export default JSONViewFromStringWorkspace;
