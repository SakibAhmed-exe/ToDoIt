import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './components/form';
import Header from './components/header';
import TodoList from './components/list';
import Particles from 'react-tsparticles';

const useStyles = makeStyles({
  root: {
      textAlign: "center",
      height: "100%"
  }
});
function App() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Particles
          options={{
            background: {
              color: {
              value: "white"
              }
            },
            fullScreen: {
              enable: true,
              zIndex: -1
            },
            interactivity: {
              detectsOn: "canvas"
            },
        emitters: {
          position: {
            x: 50,
            y: 0
          },
          rate: {
            quantity: 5,
            delay: 1
          }
        },
        particles: {
          number: {
            value: 0
          },
          opacity: {
            value: 1
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 10
            }
          },
          tilt: {
            direction: "random",
            enable: false,
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 10
            }
          },
          wobble: {
            distance: 10,
            enable: true,
            speed: {
              min: -5,
              max: 15
            }
          },
          color: {
            value: ["#2194f3", "#13c552", "#ff6961"]
          },
          size: {
            value: 10
          },
          move: {
            decay: 0.05,
            direction: "top",
            enable: true,
            gravity: {
              enable: true,
              maxSpeed: 10
            },
            outModes: {
              top: "none",
              default: "destroy"
            },
            speed: { min: 25, max: 50 }
          },
          shape: {
            type: [
              "circle",
              "square",
              "triangle",
              "character",
              "character",
              "character",
              "character",
            ],
            options: {
              character: [
                {
                  fill: true,
                  value: ["📝", "✅", "🧠", "⏳", "🔋", "⭐️"],
                  style: "",
                  weight: 400
                }
              ]
            }
          }
        }
      }}
    />
          <Header />
          <Form />
          <TodoList />
      </div>
  )
}
export default App;
