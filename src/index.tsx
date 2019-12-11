import * as React from "react";
import styled from "styled-components";

// eslint-disable-next-line prettier/prettier
const COLLAPSE_ICON =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYGBgOADE%2F3Hgw0DM4IRHgSsDFOzFInmMAQnY49ONzZRjDFiADT7dMLALiE8y4AGW6LoBAgwAuIkf%2F%2FB7O9sAAAAASUVORK5CYII%3D";

interface CollapseIconProperties {
  expanded?: boolean;
}

// https://github.com/styled-components/styled-components/issues/630#issuecomment-445495957
const CollapseIcon = styled.span<CollapseIconProperties>`
  width: 20px;
  height: 18px;
  position: absolute;
  left: -2px;
  top: 1px;
  z-index: 5;
  background-image: url(${COLLAPSE_ICON});
  background-repeat: no-repeat;
  background-position: center center;
  display: block;
  opacity: 0.15;
  cursor: pointer;
  &:hover {
    opacity: 0.35;
  }

  ${props => !props.expanded && "transform: rotate(-90deg); height:16px;"}
`;

interface CollapsibleProperties {
  name?: string;
  startChar: string;
  endChar: string;
  collapsedChar?: string;
  children: React.ReactNodeArray;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  size: number;
}

const Collapsible: React.FC<CollapsibleProperties> = ({
  name,
  startChar,
  endChar,
  // collapsedChar = "&#8230;",
  children,
  expanded,
  setExpanded,
  size
}) => (
  // children =
  //   children &&
  //   children.map((c, idx) => (
  //     <React.Fragment>
  //       {c}
  //       {idx + 1 < size && <span>,</span>}
  //     </React.Fragment>
  //   ));
  <span className="json_value json_object">
    <CollapseIcon expanded={expanded} onClick={() => setExpanded(!expanded)} />
    {name && (
      <span style={{ cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
        &quot;{name}&quot;:&nbsp;
      </span>
    )}
    <span>{startChar}</span>
    <span
      style={{
        display: expanded ? "block" : "none",
        paddingLeft: 24,
        borderLeft: "1px dotted #bbb",
        marginLeft: 2
      }}
    >
      {children}
    </span>
    <span
      onClick={() => setExpanded(!expanded)}
      style={{ display: expanded ? "none" : "inline-block", cursor: "pointer", color: "gray" }}
    >
      &nbsp;&#8230;&nbsp;
    </span>
    <span>{endChar}</span>
    <span style={{ color: "gray", display: expanded ? "none" : "inline-block" }}>&nbsp;// {size} items</span>
  </span>
);

const renderObject = (name: string | undefined, value: any, options: JSONValueOptions) => {
  const objectKeys = Object.keys(value);
  const size = objectKeys.length;
  return (
    <Collapsible
      name={name}
      startChar="&#123;"
      endChar="&#125;"
      expanded={options.expanded || false}
      setExpanded={options.setExpanded && options.setExpanded}
      size={size}
    >
      {objectKeys.map((key, idx) => {
        const suffix = idx + 1 < size ? "," : undefined;
        return <JSONValue key={idx} name={key} value={value[key]} suffix={suffix} />;
      })}
    </Collapsible>
  );
};

const renderArray = (name: string | undefined, value: any, options: JSONValueOptions) => (
  <Collapsible
    name={name}
    startChar="["
    endChar="]"
    expanded={options.expanded || false}
    setExpanded={options.setExpanded && options.setExpanded}
    size={value.length}
  >
    {value.map((v: any, idx: number) => {
      const suffix = idx + 1 < value.length ? "," : undefined;
      return <JSONValue value={v} key={idx} suffix={suffix} />;
    })}
  </Collapsible>
);

// const renderName = name => <span>{name}</span>;

const renderBasic = (name: string | undefined, value: any) => {
  const nameCmp = name && <span style={{ cursor: "pointer" }}>&quot;{name}&quot;:&nbsp;</span>;

  let cmp = null;
  if (typeof value === "number") {
    cmp = <span style={{ color: "#1A01CC", fontWeight: "bold" }}>{value}</span>;
  } else if (typeof value === "string") {
    cmp = <span style={{ color: "#0B7500", wordWrap: "break-word" }}>&quot;{value}&quot;</span>;
  } else if (typeof value === "boolean") {
    cmp = <span style={{ color: "#1A01CC", fontWeight: "bold" }}>{value ? "true" : "false"}</span>;
  } else if (value === null) {
    cmp = <span style={{ color: "#1A01CC", fontWeight: "bold" }}>null</span>;
  }
  return (
    <React.Fragment>
      {nameCmp}
      {cmp}
    </React.Fragment>
  );
};

interface JSONValueOptions {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface JSONValueProperties {
  name?: string;
  value: any;
  options?: JSONValueOptions;
  suffix?: string;
}
interface JSONValueState {
  expanded: boolean;
}

// const defaultOptions = {
//   font: ""
// };

class JSONValue extends React.PureComponent<JSONValueProperties, JSONValueState> {
  constructor(props: any) {
    super(props);
    this.state = { expanded: true };
  }

  setExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { name, value, suffix } = this.props;
    const { expanded } = this.state;

    let cmp = null;
    if (value === null) {
      cmp = renderBasic(name, value);
    } else if (Array.isArray(value)) {
      cmp = renderArray(name, value, {
        expanded,
        setExpanded: this.setExpanded
      });
    } else if (typeof value === "object") {
      cmp = renderObject(name, value, {
        expanded,
        setExpanded: this.setExpanded
      });
    }
    if (cmp === null) {
      cmp = renderBasic(name, value);
    }

    return (
      <span className="JSONValue" style={{ display: "block", paddingLeft: 20, marginLeft: -20, position: "relative" }}>
        {cmp}
        {suffix}
      </span>
    );
  }
}

interface JsonViewerProperties {
  value: any;
  options?: any;
}

// eslint-disable-next-line no-unused-vars
const JsonViewer: React.FC<JsonViewerProperties> = ({ value, options }) => (
  <div
    className={"JsonViewer"}
    style={{ font: "13px/18px monospace", display: "block", paddingLeft: 28, position: "relative" }}
  >
    <JSONValue value={value} />
  </div>
);

export default JsonViewer;
