import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // Handle loaded particles
    console.log(container)
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
            onHover: {
              enable: true,
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              size: 40
            }
          }
        },
        particles: {
          color: {
            value: [
              "#3998D0",
              "#2EB6AF",
              "#A9BD33",
              "#FEC73B",
              "#F89930",
              "#F45623",
              "#D62E32",
              "#EB586E",
              "#9952CF"
            ]
          },
          move: {
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200
              },
              distance: 250
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "out"
            },
            random: false,
            speed: 15,
            size: true,
            straight: false,
            trail: {
              fillColor: "#fff",
              enable: true,
              length: 3
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 100
          },
          opacity: {
            value: 1
          },
          shape: {
            type: ["circle", "square"]
          },
          rotate: {
            value: 0,
            direction: "random",
            animation: {
              enable: true,
              speed: 10
            }
          },
          size: {
            random: {
              enable: true,
              minimumValue: 5
            },
            animation: {
              enable: true,
              speed: 6,
              minimumValue: 5
            },
            value: 15
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default Particle;