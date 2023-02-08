import { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const circleStroke = keyframes`
  100% {
    stroke-dashoffset: 0; /*450-450*0.65*/
  }
`;

export default {
  spin,
  circleStroke,
};
