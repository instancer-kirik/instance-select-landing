'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'

export default function Scene({viewRef, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  //const viewRef = useRef();
  
  
  return (
    <Canvas antialias {...props}>
     {/* @ts-ignore */}
     <ambientLight intensity={0.5} />
     <pointLight position={[-30, -30, 0]} />
     <r3f.Out />
     <Preload all />
   </Canvas>
  );
}


// Path: my-app\src\components\canvas\Examples.jsx
//<Canvas antialias {...props}>
  //    {/* @ts-ignore */}
//      <ambientLight intensity={0.5} />
  //    <pointLight position={[-30, -30, 0]} />
  //    <r3f.Out />
  //    <Preload all />
  //  </Canvas>