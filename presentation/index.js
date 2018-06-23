// Import React
import React from "react";
import styles from '../assets/styles.css'

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
  CodePane,
  Layout,
  Fill,
  Code,
  Image
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
            best way to use GraphQL to build client application
          </Text>
          <br />
          <BlockQuote>
            <Cite textColor="secondary">Zélia Geerts @liliatux</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={4} textColor="tertiary" caps>
            What is this ?
          </Heading>
          <List ordered>
            <Appear>
              <ListItem>GraphQL: a query language for API</ListItem>
            </Appear>
            <Appear>
              <ListItem>GraphQL Server: to expose data via the GraphQL schema</ListItem>
            </Appear>
            <Appear>
              <ListItem>Apollo Client: a GraphQL client to manage data</ListItem>
            </Appear>
            <Appear>
              <ListItem>React-Apollo: to fetch data to from your GraphQL API</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading textColor="secondary">1. GraphQL</Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            RESTful API
          </Heading>
          <Layout>
            <Fill style={{ marginRight: "10px", marginTop: "50px" }}>
              <Code textColor="secondary">GET /api/breeds</Code>
            </Fill>
            <Fill>
              <CodePane
                lang="json"
                source={require("raw-loader!../assets/responseRestBreed.example")}
                margin="20px auto"
                theme="external"
              />
            </Fill>
          </Layout>
          <Layout>
            <Fill style={{ marginRight: "10px", marginTop: "50px" }}>
              <Code textColor="secondary">GET /api/ponies/jer6566554</Code>
            </Fill>
            <Fill>
              <CodePane
                lang="json"
                source={require("raw-loader!../assets/responseRestPonies.example")}
                margin="20px auto"
                theme="external"
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            API GraphQL
          </Heading>
          <Layout>
            <Fill style={{ marginRight: "10px" }}>
              <CodePane
                textSize={20}
                lang="graphql"
                source={require("raw-loader!../assets/graphql.example")}
                margin="20px auto"
                theme="light"
              />
            </Fill>
            <Fill>
              <CodePane
                textSize={20}
                lang="json"
                source={require("raw-loader!../assets/responseGraphql.example")}
                margin="20px auto"
                theme="external"
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading textColor="secondary">2. Apollo Client</Heading>
        </Slide>
        <Slide>
          <Image src={require("../assets/apolloShema.png")} />
          <a href="https://dev-blog.apollodata.com/apollo-client-2-0-beyond-graphql-apis-888807b53afe">
            Apollo beyond GraphQL APIs
          </a>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={4} textColor="tertiary" caps>
            How does it work with React ?
          </Heading>
          <List ordered>
            <Appear>
              <ListItem>Connect the GraphQL API to Apollo Client</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Connect Apollo Client with API GraphQL to React
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Request Data in React</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading textColor="secondary">1. Connect GraphQL API</Heading>
        </Slide>
        <Slide>
          <CodePane
            textSize={20}
            lang="javascript"
            source={require("raw-loader!../assets/connectGraphql.example")}
            margin="20px auto"
            theme="external"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading textColor="secondary">2. Connect Apollo Client</Heading>
        </Slide>
        <Slide>
          <CodePane
            textSize={20}
            lang="javascript"
            source={require("raw-loader!../assets/connectApollo.example")}
            margin="20px auto"
            theme="external"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading textColor="secondary">3. Request data</Heading>
        </Slide>
        <Slide margin={0}>
          <Heading size={5} textColor="secondary">
            Ajax
          </Heading>
          <CodePane
            lang="jsx"
            textSize={20}
            source={require("raw-loader!../assets/ajax.example")}
            margin="20px auto"
            theme="external"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            React Apollo (Query)
          </Heading>
          <CodePane
            lang="jsx"
            textSize={20}
            source={require("raw-loader!../assets/query.example")}
            margin="20px auto"
            theme="light"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            React Apollo (Mutation)
          </Heading>
          <CodePane
            lang="jsx"
            textSize={20}
            source={require("raw-loader!../assets/mutation.example")}
            margin="20px auto"
            theme="light"
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={4} textColor="tertiary" caps>
            How I’m feeling ?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
