// @see https://codepen.io/mrrocks/pen/EiplA
import * as React from "react";
import styled, { keyframes } from "styled-components";

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

const $offset = 187;
const $duration = "1.4s";

const dash = keyframes`
  0% { stroke-dashoffset: ${$offset}; }
  50% {
    stroke-dashoffset: ${$offset / 4};
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${$offset};
    transform: rotate(450deg);
  }
`;

const SpinnerSvg = styled.svg`
  animation: ${rotator} ${$duration} linear infinite;
`;

const svgProps = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
};

// eslint-disable-next-line no-undef
const SpinnerCirclePath = styled.circle`
  stroke-dasharray: ${$offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} ${$duration} ease-in-out infinite;
`;

interface SpinnerPropTypes {
  color?: string;
  strokeWidth?: number;
  size?: number;
}

const Spinner: React.FC<SpinnerPropTypes> = ({ size = 24, color = "gray", strokeWidth = 6 }) => (
  <div style={{ display: "inline-block", width: size, height: size }}>
    <SpinnerSvg {...svgProps}>
      <SpinnerCirclePath
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        cx={33}
        cy={33}
        r={30}
      />
    </SpinnerSvg>
  </div>
);

export default Spinner;
