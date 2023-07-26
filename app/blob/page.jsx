'use client'

import dynamic from 'next/dynamic'
const Blob = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Blob), { ssr: false })

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
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
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-4/5 md:text-left'>
          <p className='w-full uppercase'>Next + React Three Fiber</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Meet Kirik: Author, Admin. 
          </h1>
          <p className='leading-normal text-2xl mb-8'>CS grad and gamer!<br></br>
          Zero industry experience!<br></br>
          Maverick, formidable, handyman, bricoleur. <br></br><br></br>
          Main endeavor: Pause || Effect - a multiplayer fantasy-reality manager app. 
Like D&D and Pokemon Go. 
to have fun quests in the real world. 
Explore landmarks, fetch items, get rewards. 
          <br></br>
          
          </p>
          <p className='mb-8 text-2xl leading-normal'>An underfunded, but motivated endeavor. This shall be the means that gets me out of my moms house and into a space for creation.<br></br>
          Seeking $$ and/or employment. </p>
          <h2 className='my-4 text-3xl font-bold leading-tight'>Seek with advantage. instance.select.</h2>
          
        </div>
      </div>

      <View className='absolute top-0 flex h-screen w-full flex-col items-center justify-center' style={{ width: '30%', right: '5%', maxWidth: '800px' }}>
        <Logo scale={1/3} position={[0, 0, -1]} rotation={[0.0, 0, 0]}/>
        <Blob />
        <Common />
      </View>
    </>
  )
}
