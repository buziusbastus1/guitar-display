// import { useEffect } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// export const useGsapEffect = (elementRef, triggerRef) => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)
//     const element = elementRef.current
//     const trigger = triggerRef.current
//     const tl = gsap.timeline()
//     const animate = () => {
//       tl.to(
//         element,
//         {
//           x: 18,
//           z: -3,
//           y: 2,
//           rotationX: 45,
//           rotationY: 180,
//           // rotationZ: 90,
//           duration: 3,
//           scrollTrigger: {
//             trigger: trigger,
//             start: 'top 10%',
//             end: '+=500',
//             markers: true,
//             scrub: true
//           }
//         }
//       )
//     }

//     animate()
//   }, [elementRef, triggerRef])
// }
