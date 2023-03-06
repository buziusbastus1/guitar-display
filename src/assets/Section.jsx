// import { Scroll, useScroll } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import './Section.scss'

// const Section = ({ opacity = 1, scrollPower = 0, height = '100vh', children, ...rest }) => {
//   const opacityStyle = { opacity }
//   const scrollStyle = { transform: `translateY(${scrollPower}px)` }
//   return (
//     <section className={`section ${rest.sectionClass}`} style={opacityStyle}>
//       <div className={`section__inner ${rest.innerClass}`} style={{ height, ...scrollStyle }}>
//         <div className={`card ${rest.cardClass}`}>
//           <h1 className={`section__title ${rest.titleClass}`}>{children}</h1>
//         </div>
//       </div>
//     </section>
//   )
// }
// Section.propTypes = {
//   opacity: PropTypes.number.isRequired,
//   scrollPower: PropTypes.number.isRequired,
//   height: PropTypes.string,
//   children: PropTypes.node.isRequired
// }
// const Overlay = () => {
//   const scroll = useScroll()
//   const [opacity, setOpacity] = useState([1, 1, 1])
//   const [scrollPower, setScrollPower] = useState([0, 0, 0])
//   useFrame(() => {
//     setOpacity(
//       [1 - scroll.range(0, 1 / 3), scroll.curve(1 / 3, 1 / 3), scroll.range(2 / 3, 1 / 3)
//       ]
//     )
//     setScrollPower(
//       [scroll.range(0, 100), scroll.range(0, 100), scroll.range(0, -100)
//       ]
//     )
//   })
//   const handleButtonClick = () => {
//     // Do something when the button is clicked
//     console.log('Button clicked!')
//   }
//   return (
//     <>
//     <Scroll html>
//       <div style={{ width: '100vw' }}>
//         {[{ children: 'guitar' },
//           { height: '90vh', children: '2' },
//           { height: '90vh', children: '3' },
//           { height: '90vh', children: '4' },
//           { height: '90vh', children: '5' },
//           { height: '90vh', children: '6?' },
//           { height: '90vh', children: (<>7<button onClick={handleButtonClick}>Click me!</button></>) }
//         ].map((props, i) => (
//           <Section key={i} opacity={opacity[i]} scrollPower={scrollPower[i]} {...props} />
//         ))}
//       </div>
//     </Scroll>
//   </>
//   )
// }

// export { Section, Overlay }
import React, { useState } from 'react'
import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import PropTypes from 'prop-types'
import './Section.scss'

const Section = (props) => {
  const sectionClasses = `section-opacity ${props.right ? 'section-right' : 'section-left'}`
  const cardClasses = props.isFirstSection ? '' : 'card'
  return (
    <section className={sectionClasses} style={{ opacity: props.opacity }}>
      <div className=" flex items-center justify-center">
        <div className="whole">
          <div className={cardClasses} style={{}}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

Section.propTypes = {
  opacity: PropTypes.number.isRequired,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
  isFirstSection: PropTypes.bool
}

export const Overlay = () => {
  const scroll = useScroll()
  const [opacity1tSection, setOpacity1tSection] = useState(1)
  const [opacity2Section, setOpacity2Section] = useState(1)
  const [opacity3Section, setOpacity3Section] = useState(1)
  const [opacity4Section, setOpacity4Section] = useState(1)
  const [opacity5Section, setOpacity5Section] = useState(1)
  const [opacity6Section, setOpacity6Section] = useState(1)
  const [opacity7Section, setOpacity7Section] = useState(1)
  const [opacity8Section, setOpacity8Section] = useState(1)

  useFrame(() => {
    setOpacity1tSection(1 - scroll.curve(0, 1 / 3))
    setOpacity2Section(scroll.curve(0, 1 / 5))
    setOpacity3Section(scroll.curve(0, 1 / 3))
    setOpacity4Section(scroll.curve(1.5 / 7, 1 / 3))
    setOpacity5Section(scroll.curve(3 / 7, 1 / 3))
    setOpacity6Section(scroll.curve(3.8 / 7, 1 / 3))
    setOpacity7Section(scroll.curve(4.5 / 7, 1 / 3))
    setOpacity8Section(scroll.curve(6 / 7, 1 / 3))
  })

  return (
    <Scroll html>
      <div className="w-screen">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Section opacity={opacity1tSection} isFirstSection>
          <h1 className="mid">
            Guitar
          </h1>
          <div className='down'>
          <p >scroll down</p>
          <p className="animate-bounce">↓</p>
          </div>
        </Section>
        </div>
        <div className="s-screen">
        <Section opacity={opacity2Section}>
          <h1 className="font-semibold font-serif text-2xl">
            Tuners
          </h1>
          <p className="text-gray-500">The tuners on a guitar are the key to staying in tune, and our high-quality tuners are designed to provide rock-solid stability and precision. Whether you &apos;re playing in a stadium or a bedroom, our tuners will ensure that your guitar stays perfectly in tune.
          </p>

          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section html opacity={opacity3Section}>
<h1 className="font-semibold font-serif text-2xl">
            Frets
          </h1>
          <p>The frets on a guitar are the key to precise intonation and easy playability. Our high-quality frets are precisely placed and polished to ensure that every note rings true and clear, so you can focus on your music.</p>

        </Section>
        <Section opacity={opacity4Section}>
          <h1 className="font-semibold font-serif text-2xl">
            Knobs
          </h1>
          <p>The knobs on a guitar are the controls that allow you to shape your tone and adjust your volume and tone settings. Our high-quality knobs are designed to provide smooth and precise control, so you can fine-tune your sound to perfection. With our reliable and responsive knobs, you can dial in your perfect sound and take your playing to new heights.</p>
        </Section>
        <Section opacity={opacity5Section}>
          <h1 className="font-semibold font-serif text-2xl">
            Pickups
          </h1>
          <p>The pickups on a guitar are responsible for capturing the sound of the strings and converting it into an electrical signal. Our premium pickups are designed to capture every nuance of your playing, from the softest whisper to the loudest roar, so you can express yourself fully and confidently.</p>
        </Section>
        <Section opacity={opacity6Section}>
          <h1 className="font-semibold font-serif text-2xl">
            Bridge
          </h1>
          <p>
            The bridge of a guitar is the anchor point for the strings, and it plays a crucial role in determining the guitar &apos;s tone and sustain. Our expertly crafted bridges are designed to provide maximum resonance and sustain, giving you a rich and dynamic sound.
          </p>
        </Section>
        <Section right opacity={opacity7Section}>
          <>
          <h1 className="font-semibold font-serif text-2xl">
            Neck </h1>
           <p>The neck of a guitar is the backbone of the instrument, providing the support and stability you need to play with precision and accuracy. Our necks are crafted from the finest materials and designed to feel comfortable in your hand, so you can play for hours without fatigue.</p>
             <button >Click me!</button>
             </>
        </Section>
        <div style={{ display: 'block', flexDirection: 'initial', justifyContent: 'center' }}>
         <Section html opacity={opacity8Section}>
          <p>
            8
          </p>
        </Section>
        </div>
</div>
</div>
    </Scroll>
  )
}
