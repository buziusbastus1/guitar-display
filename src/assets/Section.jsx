import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Section.scss'

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
  const handleButtonClick = () => {
    // Do something when the button is clicked
    console.log('Button clicked!')
  }
  return (
    <>
    <Scroll html>
      <div style={{ width: '100vw' }}>
        {[{ children: 'guitar' },
          { height: '90vh', children: 'Here are my skillsets 🔥' },
          { height: '90vh', children: '🤙 Call me maybe?' },
          { height: '90vh', children: '🤙 Call me maybe?' },
          { height: '90vh', children: '🤙 Call me maybe?' },
          { height: '90vh', children: (<>🤙 Call me maybe?<button onClick={handleButtonClick}>Click me!</button></>) }
        ].map((props, i) => (
          <Section key={i} opacity={opacity[i]} scrollPower={scrollPower[i]} {...props} />
        ))}
      </div>
    </Scroll>
  </>
  )
}

export { Section, Overlay }
