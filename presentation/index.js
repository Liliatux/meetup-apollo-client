// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  Appear,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "black",
    secondary: "white",
    tertiary: "#d347a7",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        bgColor="primary"
      >
        <Slide transition={["zoom"]}>
          <Heading size={1} fit caps textColor="secondary">
            Introduction to Apollo Client
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            "best way to use GraphQL to build client application"
          </Text>
          <br />
          <BlockQuote>
            <Cite textColor="secondary">Zélia Geerts @liliatux</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="tertiary" caps>
            "What is this ?"
          </Heading>
          <List ordered>
            <Appear>
              <ListItem>GraphQL: a query language for API</ListItem>
            </Appear>
            <Appear>
              <ListItem>Apollo Client: a client GraphQL to fetch data</ListItem>
            </Appear>
            <Appear>
              <ListItem>React: a client app</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            1. GraphQL
          </Heading>
          <CodePane
            lang="graphql"
            source={require("../assets/poney.query.graphql")}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="tertiary" caps>
            "How it's work ?"
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="tertiary" caps>
            "And with React ?"
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
