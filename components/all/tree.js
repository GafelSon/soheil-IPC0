import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'

function Partic() {
  const particlesInit = engine => {
    loadFull(engine)
  }

  return (
    <Particles
      init={particlesInit}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.5
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 600
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }}
    />
  )
}
export default Partic
