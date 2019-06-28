import React, { PureComponent } from "react";
import { Parallax } from "react-spring";
import MediaQuery from "react-responsive";
import AnimationGraph from "./components/AnimationChart";
import { colour } from "./utils";

// import MeetTheTeam from "@leviathan/molecules/parallaxes/meet-the-team";
// import Welcome from "@leviathan/molecules/parallaxes/welcome";
// import About from "@leviathan/molecules/parallaxes/about";
// import Logo from "@leviathan/molecules/parallaxes/logo";

class Homepage extends PureComponent {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4}>
        <Parallax.Layer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: `url(/images/pictures/box.svg)`,
            backgroundSize: "25px",
            backgroundColor: `${colour.blue}`,
            backgroundRepeat: "repeat",
            zIndex: "0",
            opacity: "0.15"
          }}
        />

        <MediaQuery minWidth={900}>
          {matches => {
            return matches ? (
              <Parallax.Layer
                offset={1}
                speed={0}
                factor={4}
                style={{
                  backgroundImage: 'url("/images/pictures/chicago-four.jpg")',
                  backgroundSize: "contain",
                  backgroundRepeat: "repeat",
                  backgroundColor: `${colour.blue}`,
                  zIndex: "1",
                  opacity: "0.6"
                }}
              />
            ) : (
              <Parallax.Layer
                offset={1}
                speed={0}
                factor={4}
                style={{
                  backgroundImage: 'url("/images/pictures/chicago-four.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "repeat",
                  backgroundColor: `${colour.blue}`,
                  zIndex: "1",
                  opacity: "0.6"
                }}
              />
            );
          }}
        </MediaQuery>

        <Parallax.Layer
          offset={0}
          factor={1}
          speed={0}
          style={{ zIndex: "80" }}
        >
          <AnimationGraph background="rgba(0,0,0,0.025)" />
        </Parallax.Layer>

        {/* <Welcome />
        <Logo />
        <About />
        <MeetTheTeam /> */}
      </Parallax>
    );
  }
}

export default Homepage;
