// import { Scroll, useScroll } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import React, { useState } from 'react'

// const Section = (props) => {
//   const sectionStyle = {
//     height: '90vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: '2.5rem',
//     textAlign: props.right ? 'right' : 'left',
//     opacity: props.opacity
//   }

//   const innerStyle = {
//     width: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }

//   const cardStyle = {
//     backgroundColor: 'white',
//     borderRadius: '0.5rem',
//     padding: '2rem',
//     maxWidth: '20rem',
//     width: '100%'
//   }

//   return (
//     <section style={sectionStyle}>
//       <div style={innerStyle}>
//         <div style={cardStyle}>
//           {props.children}
//         </div>
//       </div>
//     </section>
//   )
// }

// export const Overlay = () => {
//   const scroll = useScroll()
//   const [opacityFirstSection, setOpacityFirstSection] = useState(1)
//   const [opacitySecondSection, setOpacitySecondSection] = useState(1)
//   const [opacityLastSection, setOpacityLastSection] = useState(1)

//   useFrame(() => {
//     setOpacityFirstSection(1 - scroll.range(0, 1 / 3))
//     setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3))
//     setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
//   })

//   return (
//     <Scroll html>
//       <div style={{ width: '100vw' }}>
//         <Section className="my-custom-classname" cla opacity={opacityFirstSection}>
//           <h1 style={{ fontWeight: 'bold', fontFamily: 'second', fontSize: '1.5rem', color: 'first' }}>
//            guitar
//           </h1>
//         </Section>
//         <Section height="80vh" right opacity={opacitySecondSection}>
//           <h1 style={{ fontWeight: 'bold', fontFamily: 'second', fontSize: '1.5rem' }}>
//             Here are my skillsets 🔥
//           </h1>
//         </Section>
//         <Section height="80vh" opacity={opacityLastSection}>
//           <h1 className="font-semibold font-second text-2third">
//             🤙 Call me maybe?
//           </h1>
//         </Section>
//       </div>
//     </Scroll>
//   )
// }
// import { Scroll, useScroll } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import './Section.scss'

// const Section = (props) => {
//   const sectionClass = `section ${props.right ? 'section--right' : ''}`
//   const innerClass = 'section__inner'
//   const cardClass = 'card'
//   const titleClass = `section__title${props.first ? '--first' : props.second ? '--second' : props.third ? '--third' : ''}`

//   return (
//     <section className={sectionClass}>
//       <div className={innerClass}>
//         <div className={cardClass}>
//           <h1 className={titleClass}>{props.children}</h1>
//         </div>
//       </div>
//     </section>
//   )
// }
// Section.propTypes = {
//   children: PropTypes.node.isRequired
// }
// export const Overlay = () => {
//   const scroll = useScroll()
//   const [opacityFirstSection, setOpacityFirstSection] = useState(1)
//   const [opacitySecondSection, setOpacitySecondSection] = useState(1)
//   const [opacityLastSection, setOpacityLastSection] = useState(1)

//   useFrame(() => {
//     setOpacityFirstSection(1 - scroll.range(0, 1 / 3))
//     setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3))
//     setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
//   })

//   return (
//     <Scroll html>
//       <div style={{ width: '100vw' }}>
//         <Section className="my-custom-classname" opacity={opacityFirstSection}>
//           <h1 className="section__title--first">guitar</h1>
//         </Section>
//         <Section className="my-custom-classname" height="80vh" right opacity={opacitySecondSection}>
//           <h1 className="section__title--second">Here are my skillsets 🔥</h1>
//         </Section>
//         <Section className="my-custom-classname" height="80vh" opacity={opacityLastSection}>
//           <h1 className="section__title--third">🤙 Call me maybe?</h1>
//         </Section>
//       </div>
//     </Scroll>
//   )
// }
import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Section.scss'

// const Section = ({ first, second, third, fourth, height, children }) => {
//   const titleClass = `section__title${first ? '--first' : second ? '--second' : third ? '--third' : fourth ? '--third' : ''}`
//   const sectionClass = 'section'
//   return (
//     <section className={sectionClass}>
//       <div className="section__inner" style={{ height }}>
//         <div className="card">
//           <h1 className={titleClass}>{children}</h1>
//         </div>
//       </div>
//     </section>
//   )
// }

// Section.propTypes = {
//   first: PropTypes.bool,
//   second: PropTypes.bool,
//   third: PropTypes.bool,
//   fourth: PropTypes.bool,
//   height: PropTypes.string,
//   children: PropTypes.node.isRequired
// }

// const Overlay = () => {
//   const scroll = useScroll()
//   const [opacity, setOpacity] = useState([1, 1, 1])

//   useFrame(() => {
//     setOpacity([
//       1 - scroll.range(0, 1 / 3),
//       scroll.curve(1 / 3, 1 / 3),
//       scroll.range(2 / 3, 1 / 3)
//     ])
//   })

//   return (
//     <Scroll html>
//       <div style={{ width: '100vw' }}>
//         {[{ first: true, children: 'guitar' },
//           { second: true, children: 'Here are my skillsets 🔥', height: '20vh' },
//           { third: true, children: '🤙 Call me maybe?', height: '90vh' },
//           { fourth: true, children: '🤙 Call me maybe?', height: '90vh' }]
//           .map((props, i) => (
//           <Section key={i} {...props} opacity={opacity[i]} />
//           ))}
//       </div>
//     </Scroll>
//   )
// }

// export { Section, Overlay }
const Section = ({ opacity = 1, scrollPower = 0, height = '100vh', children, ...rest }) => {
  const opacityStyle = { opacity }
  const scrollStyle = { transform: `translateY(${scrollPower}px)` }
  return (
    <section className={`section ${rest.sectionClass}`} style={opacityStyle}>
      <div className={`section__inner ${rest.innerClass}`} style={{ height, ...scrollStyle }}>
        <div className={`card ${rest.cardClass}`}>
          <h1 className={`section__title ${rest.titleClass}`}>{children}</h1>
        </div>
      </div>
    </section>
  )
}
Section.propTypes = {
  opacity: PropTypes.number.isRequired,
  scrollPower: PropTypes.number.isRequired,
  height: PropTypes.string,
  children: PropTypes.node.isRequired
}
const Overlay = () => {
  const scroll = useScroll()
  const [opacity, setOpacity] = useState([1, 1, 1])
  const [scrollPower, setScrollPower] = useState([0, 0, 0])
  useFrame(() => {
    setOpacity(
      [1 - scroll.range(0, 1 / 3), scroll.curve(1 / 3, 1 / 3), scroll.range(2 / 3, 1 / 3)
      ]
    )
    setScrollPower(
      [scroll.range(0, 100), scroll.range(0, 500), scroll.range(0, -100)
      ]
    )
  })
  return (
    <Scroll html>
      <div style={{ width: '100vw' }}>
        {[{ children: 'guitar' }, { height: '20vh', children: 'Here are my skillsets 🔥' }, { height: '90vh', children: '🤙 Call me maybe?' }, { height: '90vh', children: '🤙 Call me maybe?' }].map((props, i) => (
          <Section key={i} opacity={opacity[i]} scrollPower={scrollPower[i]} {...props} />
        ))}
      </div>
    </Scroll>
  )
}

export { Section, Overlay }
