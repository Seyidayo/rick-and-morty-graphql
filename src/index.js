import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import RootComponent from "./components/RootComponent";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const App = () => {
  return (
    <ApolloProvider {...{ client }}>
      <RootComponent />
    </ApolloProvider>
  );
};

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
