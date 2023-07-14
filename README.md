# Guitar Display

This is a React app built with ViteJS. The app displays my 3D glb model created in Blender whitch uses <a href="https://github.com/pmndrs/drei#scrollcontrols" target="_blank" rel="noreferrer">ScrollControls</a> and GSAP timeline to animate model and user interface. It also includes a subpage route where you can interact with the same model. You can move around with <a href="https://threejs.org/docs/#examples/en/controls/OrbitControls" target="_blank" rel="noreferrer">OrbitControls</a>, click on different parts with camera foucus with <a href="https://github.com/pmndrs/drei#bounds" target="_blank" rel="noreferrer">Bounds</a>, display mesh name on hover near the cursor and change mesh material color.<p>


## Tech Stack

- @react-three/drei": ^9.56.25
- @react-three/fiber": ^8.11.2
- gsap": ^3.11.4
- react": ^18.2.0
- react-dom": ^18.2.0
- react-router-dom": ^6.9.0
- sass": ^1.58
    
## Run Locally

Clone the project

```bash
git clone https://github.com/buziusbastus1/guitar-display
```

Go to the project directory

```bash
  cd guitar-display
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Demo
[guitar-display.vercel.app](https://guitar-display.vercel.app/)


