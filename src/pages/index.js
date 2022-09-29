import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Content/index.scss";
import PortfolioNavbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Experience from "../Components/Experience";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const IndexPage = () => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <>
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          fullScreen: { enable: true },
          background: {
            size: "cover",
          },
          interactivity: {
            detectsOn: "window",
            // events: {
            //   onClick: {
            //     enable: false,
            //     mode: "push",
            //   },
            //   onHover: {
            //     enable: false,
            //     mode: "repulse",
            //   },
            //   resize: true,
            // },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 1,
              },
            },
          },

          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 30,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "polygon",
            },
            size: {
              value: { min: 1, max: 10 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="parent-container">
        <div id="navigation">
          <PortfolioNavbar />
        </div>

        <div id="child-container">
          <section id="introduction">
            <Intro></Intro>
          </section>
          <section id="about">
            <AboutMe></AboutMe>
          </section>
          <section id="experience">
            <Experience></Experience>
          </section>
          <section id="project">
            <Projects></Projects>
          </section>
          <section id="contact">
            <ContactMe></ContactMe>
          </section>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
