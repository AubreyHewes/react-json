import * as React from "react";
import styled from "styled-components";

import Spinner from "./Spinner";

interface LoaderProps {
  message?: string;
  messagePosition?: string;
  spinnerSize?: number;
  spinnerColor?: string;
}

interface LoaderDivProps {
  messagePosition?: string;
}

const LoaderDiv = styled.div<LoaderDivProps>`
  display: flex;
  flex-direction: ${props => {
    if (props.messagePosition === "top") {
      return "column-reverse";
    }
    if (props.messagePosition === "bottom") {
      return "column";
    }
    if (props.messagePosition === "left") {
      return "row-reverse";
    }
    return "row";
  }};
  align-items: center;
`;

const getMessageStyle = (messagePosition: any) => {
  const margin = "0.5em";
  if (messagePosition === "top") {
    return { marginBottom: margin };
  }
  if (messagePosition === "bottom") {
    return { marginTop: margin };
  }
  if (messagePosition === "left") {
    return { marginRight: margin };
  }
  return { marginLeft: margin };
};

const Loader: React.FC<LoaderProps> = ({
  message,
  messagePosition = "right",
  spinnerSize = 24,
  spinnerColor = "gray"
}) => (
  <div style={{ display: "inline-block" }}>
    <LoaderDiv messagePosition={messagePosition}>
      <Spinner size={spinnerSize} color={spinnerColor} />
      {message && <div style={getMessageStyle(messagePosition)}>{message}</div>}
    </LoaderDiv>
  </div>
);

export default Loader;
