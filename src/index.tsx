import * as React from "react";
import Loader from "./components/Loader";
import { useTheme } from "./theme";
import JSONValue from "./components/JSONValue";

interface JsonViewerProperties {
  value: any;
  options?: any;
}

// eslint-disable-next-line no-unused-vars
const JsonViewer: React.FC<JsonViewerProperties> = ({ value, options }) => {
  const theme = useTheme();
  const [cmp, setCmp] = React.useState(<Loader message="Rendering..." />);
  React.useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        if (typeof value === "string" && /.*?[[{]/.test(value)) {
          try {
            value = JSON.parse(value);
          } catch (err) {
            resolve(<div className="JsonViewer__Error">Invalid JSON: {err.message}</div>);
            return;
          }
        }
        const rCmp = <JSONValue value={value} />;
        resolve(rCmp);
      }, 1);
    }).then(setCmp);
  }, [value]);

  return (
    <div
      className={"JsonViewer"}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        font: "13px/18px monospace",
        display: "block",
        paddingLeft: 28,
        position: "relative",
      }}
    >
      {cmp}
    </div>
  );
};

export default JsonViewer;
