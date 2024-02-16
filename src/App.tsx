import React from "react";
import logo from "./logo.svg";
import {
  Authenticator,
  Button,
  Card,
  Heading,
  Image,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";

export const App = () => {
  return (
    <Authenticator className="Authenticator-height">
      {({ signOut, user }) => (
        <View className="App">
          <Card>
            <Image src={logo} className="App-logo" alt="logo" />
            <Heading level={1}>We now have Auth!</Heading>
          </Card>
          <Button onClick={signOut}>Sign Out</Button>
        </View>
      )}
    </Authenticator>
  );
};

export default App;
