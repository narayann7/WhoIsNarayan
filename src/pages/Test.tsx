import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function Test() {

  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

  useEffect(() => {
  }, [])
  return (
    <div
      style={
        {
          background: "black",
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',

        }
      }
    >




      <motion.div
        style={{
          borderRadius: '316px',
          background: 'rgba(134, 95, 198, 0.42)',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          filter: 'blur(188.5px)',
          height: '400px',
          width: '400px',
        }}

        animate={{
          // scale: [1, 1.5, 2, 1.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'linear',


        }}></motion.div>
      <motion.div
        style={{

          borderRadius: '316px',
          background: 'rgba(95, 191, 198, 0.47)',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          filter: 'blur(188.5px)',
          height: '400px',
          width: '400px',
        }}

        animate={{
          // scale: [1, 1.5, 2, 1.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'linear',


        }}></motion.div>

      <motion.div
        style={{
          borderRadius: '316px',
          background: 'rgba(134, 95, 198, 0.42)',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          filter: 'blur(188.5px)',
          position: 'relative',
          right: "400px",
          top: "400px",

          height: '400px',
          width: '400px',
        }}

        animate={{
          // scale: [1, 1.5, 2, 1.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'linear',


        }}></motion.div>
    </div >

  )
}

export default Test


// <div
// className='relative flex items-center justify-center w-full h-full'
// >
{/* <motion.div
  className='h-[400px] w-[400px] bg-red-300 rounded-full absolute right-1/3 mix-blend-multiply blur-2xl'
  animate={{
    scale: [1, 1.5, 2, 1.5, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 3,
    ease: 'linear',


  }}></motion.div> */}
// <motion.div
//   className='h-[400px] w-[400px] bg-purple-300 rounded-full absolute right-1/3 left-1/3 mix-blend-multiply blur-2xl'
//   animate={{
//     scale: [1, 1.5, 2, 1.5, 1],
//   }}
//   transition={{
//     repeat: Infinity,
//     duration: 3,
//     ease: 'linear',


//   }} ></motion.div>
// <motion.div
//   className='h-[400px] w-[400px] bg-blue-300 rounded-full absolute  top-96 mix-blend-multiply blur-2xl'
//   animate={{
//     scale: [1, 1.5, 2, 1.5, 1],
//   }}
//   transition={{
//     repeat: Infinity,
//     duration: 3,
//     ease: 'linear',


//   }} ></motion.div>
// </div>


{/* <div>
        {letters.map((letter, index) => {
          return (
            <motion.div

              key={index}
              className='h-[400px] w-[400px] bg-red-300 rounded-full absolute right-1/3 mix-blend-multiply blur-2xl'
              animate={{
                scale: [1, 1.5, 2, 1.5, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'linear',
                delay: index * 0.2,

              }}></motion.div>
          )
        }
        )}

      </div> */}

