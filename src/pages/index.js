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
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="parent-container">
            <div className="landing">
                <Particles
                    className="particles"
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 144,
                        fullScreen: { enable: false },
                        background: {
                            size: "cover",
                        },
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
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
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
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
                                    area: 800,
                                },
                                value: 90,
                            },
                            opacity: {
                                value: 0.8,
                            },
                            shape: {
                                type: "polygon",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div id="navigation">
                    <PortfolioNavbar />
                </div>

                <section id="introduction">
                    <Intro></Intro>
                </section>
            </div>

            <div className="child-container">
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
    );
};

export default IndexPage;
