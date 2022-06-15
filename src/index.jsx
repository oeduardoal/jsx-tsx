export const App = (props) => {
  return <h1>My name is: {props.name}</h1>;
};

export const Layout = () => {
  return <App name="Eduardo" />;
};
