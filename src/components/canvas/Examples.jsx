'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial, useTexture } from '@react-three/drei'
import { useRouter } from 'next/navigation'


export const CustomModel = ({ url, color, scale, position, rotation }) => {
  const model = useRef();

  const { scene } = useGLTF(url);

  scene.traverse((node) => {
    if (node.isMesh) {
      node.material = new THREE.MeshBasicMaterial({ color });
    }
  });

  return  (
  <group ref={model} scale={scale} position={position} rotation={rotation}>
    <primitive object={scene} />
  </group>
  );
};

export const Model = ({ url, color }) => {
  const gltf = useGLTF(url);

  // Traverse through the mesh to apply the desired color
  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.material.color.set(color);
    }
  });

  return <primitive object={gltf.scene} />;
};
export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  )
}

export const Logo = ({ route = '/blob', ...props }) => {
  const mesh = useRef(null)
  const router = useRouter()

  const [hovered, hover] = useState(false)
  const texture = useTexture('/logo.png'); // Replace 'path/to/logo.png' with the actual path to your logo image
  //texture.encoding = THREE.sRGBEncoding; // Set the texture encoding for correct color representation
  texture.anisotropy = 16; // Adjust anisotropy value for texture quality
  //texture.encoding = THREE.sRGBEncoding;
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), []); // Add this line to define 'points'
  //const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    //mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    //mesh.current.rotation.z -= delta / 4
  })

  return (
    <group ref={mesh} {...props}>  
      <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        
        <planeGeometry args={[10, 5]} />
        <meshPhysicalMaterial roughness={0} map={texture} transparent={true} alphaTest={0.5} color={hovered ? 'red' : '#FFFFFF'}/> 
      </mesh>
    </group>
  )
}
//\\color={hovered ? 'hotpink' : '#1fb2f5'} />
export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}
export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}
export function Mirror(props) {
  const { scene } = useGLTF('/v6.glb')

  return <primitive object={scene} {...props} />
}

export function OilBarrel(props, color) {
  const { scene } = useGLTF('/OilBarrel.glb')
  const viewRef = useRef();
  useFrame((state, delta) => (scene.rotation.y -= delta/2))
  // useFrame(() => {
  //   if (viewRef.current) {
  //     viewRef.current.rotation.y += 0.002; // Adjust the rotation speed as needed
  //   }
  // });
  // scene.traverse((node) => {
  //   // if (node.isMesh) {
  //   //   node.material = new THREE.MeshBasicMaterial({ color: 0x077820 });
  //   // }
  // });
  return <primitive object={scene} {...props} />
}