import * as React from "react";

import Loader from "../components/Loader";

export default {
  title: "Misc Components|Loader"
};

export const MessageAtRight = () => <Loader message="Loading..." messagePosition="right" />;
export const MessageAtLeft = () => <Loader message="Loading..." messagePosition="left" />;
export const MessageAtTop = () => <Loader message="Loading..." messagePosition="top" />;
export const MessageAtBottom = () => <Loader message="Loading..." messagePosition="bottom" />;
export const WithoutMessage = () => <Loader />;
export const Larger = () => (
  <Loader spinnerSize={60} message="Well this is a long message as something is loading..." messagePosition="bottom" />
);
