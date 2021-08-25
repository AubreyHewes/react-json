import * as React from "react";
import { useTheme } from "../../theme";

interface RenderPropertyProps {
  name: string | undefined;
  value: any;
}

export const RenderProperty: React.FC<RenderPropertyProps> = ({ name, value }) => {
  const theme = useTheme();
  const nameCmp = name && <span style={{ cursor: "pointer" }}>&quot;{name}&quot;:&nbsp;</span>;

  let cmp = null;
  if (typeof value === "number") {
    cmp = <span style={{ color: theme.valueColor, fontWeight: "bold" }}>{value}</span>;
  } else if (typeof value === "string") {
    cmp = <span style={{ color: theme.stringValueColor, wordWrap: "break-word" }}>&quot;{value}&quot;</span>;
  } else if (typeof value === "boolean") {
    cmp = <span style={{ color: theme.valueColor, fontWeight: "bold" }}>{value ? "true" : "false"}</span>;
  } else if (value === null) {
    cmp = <span style={{ color: theme.valueColor, fontWeight: "bold" }}>null</span>;
  }
  return (
    <React.Fragment>
      {nameCmp}
      {cmp}
    </React.Fragment>
  );
};

export default React.memo(RenderProperty);
