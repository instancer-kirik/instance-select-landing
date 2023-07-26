'use client'

import dynamic from 'next/dynamic'
import { Suspense,  useRef } from 'react'
import Scene from '@/components/canvas/Scene';
import { Canvas, useFrame } from '@react-three/fiber';
import {  OrbitControls,useGLTF } from '@react-three/drei';
//import { CustomModel } from '@/components/canvas/Examples';
const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Mirror = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Mirror), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })

const CustomModel = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.CustomModel), { ssr: false })
const OilBarrel = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.OilBarrel), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(( ) => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

  

  // Auto-rotate function using useFrame
  
export default function Page() {//Next + React Three Fiber
  
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Welcome, human. <br></br>if otherwise & offended, please contact admin </p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>instance.select.landing</h1>
          <p className='mb-8 text-2xl leading-normal'>A container, brand and company for IP and physical products. Such that would enable experiences and enhance life.</p>
        </div>

        <div className='w-full text-center md:w-3/5'>
          <View className='flex h-96 w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Logo route='/logo' scale={0.6} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
          <p className='mb-8 text-2xl leading-normal'>^clickable^</p>
        </div>
      </div>

      <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
        {/* first row */}
        <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>An new 3d-printable item; a portable mirror</h2>
          <p className='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D model.<br></br>
          The result of my effort learning hard surface modelling.<br></br>
          There is a lip overhang around the frame to hold and protect the glass; inserted by pausing mid-print. <br></br>
          Now with a lanyard hole at the bottom corner!</p>
        </div>
        <div className='relative my-48 h-64 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full  sm:h-80 sm:w-full'>
            <Suspense fallback={null}>
              <Mirror scale={1/36} position={[1, 1.5, -1]} rotation={[0.0, 0, 0]} />

              <Common color={'lightpink'} />
            </Suspense>
          </View>
        </div>
        {/* second row */}
        <div className='relative my-12 h-64 w-full py-6 sm:w-1/2 md:mb-40' >
          <View orbit className='relative h-full sm:h-64 sm:w-full' rotation={[0, Math.PI / 2, 0]}  >
            <Suspense fallback={null}>
              <pointLight position={[1, 0, 2]} intensity={2} /> 
              <OilBarrel url="OilBarrel.glb" scale={1/40} position={[-0.5,0,0]} rotation={[0.0, -0.5, 0]} />
              <Common color={'#aec2f9'} />
            </Suspense>
            <OrbitControls
        enablePan={false} // Disable panning (optional, you can adjust this as needed)-5, -0.5, -25]
        enableZoom={true} // Enable zoom (optional, you can adjust this as needed)
        rotateSpeed={0.1} // Adjust the rotate speed to make it less sensitive (0.3 is just an example, adjust to your preference)
        zoomSpeed={0.5} // Adjust the zoom speed to make it less sensitive (0.5 is just an example, adjust to your preference)
        dampingFactor={0.05} // Adjust the damping factor to make the rotation less sensitive
        zoomDampingFactor={0.2} // Adjust the zoom damping factor to make the zoom less sensitive
      />
          </View>
          
        </div>
        <div className='w-full p-6 sm:w-1/2'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>About the people involved:</h2>
          <p className='mb-8 text-gray-600'>
            Currently, this is a solo project. <br></br>
            I am a broke and unemployed software engineer <br></br>
            I am learning 3d modelling and printing, app and website development, and a lot of other things. <br></br>
            My current living situation is stifling; unable to blossom -- unable to buy necessary materials. <br></br>
            This will change. <br></br>
            Follow my progress, connect, or fund on <a href="https://linktr.ee/instance.select">Linktree</a> <br></br>
            Or contact me directly at <a href="mailto:instance.select@gmail.com" style={{ color: 'blue', textDecoration: 'none' }}>instance.select@gmail.com</a> <br></br>
            Might set up an email list soon.<br></br>
            </p>
        </div>
        {/* third row */}
        
        <div className='w-full p-6 sm:w-1/2'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>A:</h2>
          <p className='mb-8 text-gray-600'>
            Placeholder for email intake form. <br></br> 
            </p>
        </div>
      </div>
    </>
  )
}
// I am a software engineer, and I am learning 3d modelling and printing. <br></br>
//             I am also learning to build a business. <br></br>
//             I am also learning to build a brand. <br></br>
//             I am also learning to build a community. <br></br>
//             I am also learning to build a life. <br></br>
//             I am also learning to build a future. <br></br>
//             I am also learning to build a world. <br></br>
//             I am also learning to build a universe. <br></br>
//             I am also learning to build a multiverse. <br></br>
//             I am also learning to build a metaverse. <br></br>
//             I am also learning to build a megaverse. <br></br>
//             I am also learning to build a hyperverse. <br></br>
//             I am also learning to build a omniverse. <br></br>
//             I am also learning to build a panverse. <br></br>
//             I am also learning to build a omniverse. <br></br>
//             I am also learning to build a omniverse. <br></br>
//             I am also learning to build a omniverse. <br></br>
//             I am also learning to build a omniverse. <br></br>
//             I am also learning to build a omniverse. <br></br>
//             I am also learning to build a omniverse. <br></br>