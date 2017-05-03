// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image,
  Layout,
  Appear,
  Code,
  // CodePane,
  Fill,
  Quote,
  BlockQuote,
  Cite,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  gobelins: require("../assets/gobelins.svg"),
  realytics: require("../assets/realytics.svg"),
  realyticsColor: require("../assets/realytics-color.svg"),
  magic: require("../assets/magic.gif"),
  illu0: require("../assets/0-Basic.svg"),
  illu1: require("../assets/1-Props.svg"),
  illu2: require("../assets/2-Context.svg"),
  illu3: require("../assets/3-Context-SCU.svg"),
  illu4: require("../assets/4-Store.svg"),
  illu5: require("../assets/5-LayoutBox.svg"),
  illu6: require("../assets/6-LayoutBox.svg"),
  illu7: require("../assets/7-LayoutBox.svg"),
  illu8: require("../assets/8-LayoutBox.svg")
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
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade", "slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Layout Box
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Connaitre la taille d'un élément
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
             avant le premier render
          </Text>
          <Text margin="10px 0 0" textColor="quartenary" size={2}>
            Meetup React &amp; React Naive
          </Text>
          <Heading size={4} caps textColor="secondary" margin="30px 0 0 0">
            <Image src={images.realyticsColor} width="50%" />
          </Heading>
          <Link textSize={20} href="http://layoutbox-talk.surge.sh/">
            http://layoutbox-talk.surge.sh/
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" margin={50} caps>About Me</Heading>
          <Text size={3} textColor="secondary">Etienne Deladonchamps</Text>
          <Text textSize={30} textColor="secondary" margin={[0, 0, 0, 30]}>
            <Link href="https://twitter.com/EtienneDldc">twitter/@EtienneDldc</Link> - <Link href="https://github.com/etienne-dldc">github/etienne-dldc</Link>
          </Text>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" margin={10}>
                <Image src={images.gobelins} width="100%" />
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" margin={10}>
                <Image src={images.realytics} width="100%" />
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Image src={images.realyticsColor} width="100%" />
          <Heading size={4} fit textColor="#1F8DBA">
            Leader de convergence TV-Digital
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} fit margin={50} textColor="primary">Transférer le controle du Layout</Heading>
          <Heading size={2} margin={50} textColor="secondary" caps>CSS ⇒ JS</Heading>
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="primary" textColor="primary">
          <Heading size={3} margin={50} textColor="tertiary" caps>Layout Box</Heading>
          <Appear>
            <Heading size={4} margin={50} textColor="secondary" caps>demo</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} margin={50} textColor="primary" fit>Comment ça marche ? 🤔</Heading>
          <Image src={images.magic} width={350} height={350} style={{ border: "5px solid white" }} />
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="primary" textColor="primary">
          <Heading size={3} margin={50} textColor="tertiary" fit>React Context API 💯</Heading>
          <Appear>
            <BlockQuote>
              <Quote>
                <Text textColor="secondary" textSize={30} lineHeight={1.4} style={{ fontWeight: 200 }}>
                  "In some cases, you want to pass data through the component tree without having to pass the props down manually at every level. You can do this directly in React with the powerful "context" API."
                </Text>
              </Quote>
              <Cite>
                React Doc
              </Cite>
            </BlockQuote>
          </Appear>
          <Appear>
            <Heading size={4} margin={50} textColor="secondary" caps>Very short demo ®</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu0} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu1} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu2} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} margin={50} textColor="primary">Warning ⚠️</Heading>
          <Appear>
            <Text margin={50} textColor="secondary" lineHeight={1.3}>
              Les mise à jour du context sont bloqués par <Code>ShouldComponentUpdate</Code>
              </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="primary" textColor="primary">
          <Heading size={3} margin={50} textColor="tertiary" fit>Context Update & SCU = 🚫</Heading>
          <Appear>
            <Heading size={5} margin={50} textColor="secondary" caps>Very short demo ®</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu3} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="primary" textColor="primary">
          <Heading size={3} margin={50} textColor="tertiary">Context + Store = 🎉</Heading>
          <Appear>
            <Heading size={5} margin={50} textColor="secondary" caps>Very short demo ®</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu4} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="primary" textColor="primary">
          <Heading size={3} margin={50} textColor="tertiary" fit>Layout Box</Heading>
          <Appear>
            <Text textSize={32} margin={20} textColor="secondary">LayoutStore (layout)</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu5} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu6} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu7} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={images.illu8} fit bgColor="white" style={{ borderRadius: 10 }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text textColor="primary" textSize={45} lineHeight={1.4} margin="20px 0 0 0" >Slides</Text>
          <Link textSize={20} href="http://layoutbox-talk.surge.sh/">
            http://layoutbox-talk.surge.sh/
          </Link>
          <Text textColor="primary" textSize={45} lineHeight={1.4} margin="20px 0 0 0" >LayoutBox demo</Text>
          <Link textSize={20} href="https://github.com/Realytics/react-layout-box-demo">
            https://github.com/Realytics/react-layout-box-demo
          </Link>
          <Text textColor="primary" textSize={45} lineHeight={1.4} margin="20px 0 0 0" >How to handle React context in a reliable way.</Text>
          <Link textSize={20} href="https://medium.com/react-ecosystem/how-to-handle-react-context-a7592dfdcbc">
            https://medium.com/react-ecosystem/how-to-handle-react-context-a7592dfdcbc
          </Link>
          <Text textColor="primary" textSize={45} lineHeight={1.4} margin="20px 0 0 0" >How to safely use React context</Text>
          <Link textSize={20} href="https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076">
            https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076
          </Link>
        </Slide>
        <Slide>
          <Image src={images.realyticsColor} width="80%" />
          <Heading size={4} textColor="#1F8DBA" margin={60}>
            We are hiring ! 🖥
          </Heading>
          <Text margin={30} textSize={30}>
            <Link href="https://www.realytics.io/jobs/">www.realytics.io/jobs</Link>
          </Text>
          <Text margin={30} textSize={30}>
            <Link href="mailto:jobs@realytics.io">jobs@realytics.io</Link>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps margin={30}>
            Merci !
          </Heading>
          <Heading size={4} textColor="secondary">
            Questions ?
          </Heading>
          <div style={{ marginTop: 50 }}>
            <Link textSize={20} href="http://layoutbox-talk.surge.sh/">
              http://layoutbox-talk.surge.sh/
            </Link>
          </div>
        </Slide>
      </Deck>
    );
  }
}
