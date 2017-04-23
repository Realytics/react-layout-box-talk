// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  twitter: require("../assets/twitter.png"),
  gobelins: require("../assets/gobelins.svg"),
  realytics: require("../assets/realytics.svg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Layout Box
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Connaitre la taille d'un élément
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
             avant même le premier render
          </Text>
          <Text margin="10px 0 0" textColor="quartenary" size={2}>
            Meetup React &amp; React Naive
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" margin={50} caps>About Me</Heading>
          <Text size={3} textColor="secondary">Etienne Deladonchamps</Text>
          <Text size={3} textColor="secondary">
            <Image src={images.twitter} height={50} margin={10} style={{ verticalAlign: "middle" }} />
            <span style={{ verticalAlign: "middle" }}>@EtienneDldc</span>
          </Text>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                <Image src={images.gobelins} width="100%" />
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                <Image src={images.realytics} width="100%" />
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" margin={50} caps>Problematique</Heading>
          
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
