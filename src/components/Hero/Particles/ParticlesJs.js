import { ParticlesContainer } from "./particlesjs.elements";
import Particles from "react-particles-js";

const ParticlesJS = () => {
  return (
    <ParticlesContainer>
      <Particles
        params={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 860,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 30,
              random: true,
            },
            opacity: {
              value: 0.15,
              random: false,
              anim: {
                enable: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
            },
          },
        }}
      />
    </ParticlesContainer>
  );
};

export default ParticlesJS;
