import React from "react";

type AppProps = {
  name?: string;
};

export const App = (props: AppProps) => {
  return <h1>My name is: {props.name}</h1>;
};

export const Layout = () => {
  return <App name="Eduardo" />;
};
