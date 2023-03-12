import React, { useState } from 'react'
import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import PropTypes from 'prop-types'
import './Section.scss'
import { useNavigate } from 'react-router-dom'
// import { Button3 } from './FixedButton'

const Section = (props) => {
  const sectionClasses = `section-opacity ${props.right ? 'section-right' : 'section-left'}`
  const cardClasses = props.isFirstSection ? '' : 'card'
  return (
    <section className={sectionClasses} style={{ opacity: props.opacity }}>
      <div className="section-flex">
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

const Button3 = ({ onClick, buttonColor }) => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: buttonColor, // Use buttonColor prop to set background color
    color: 'black'
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      butoont3
    </button>
  )
}

const Button2 = ({ onClick, isButtonToggled }) => {
  return <button onClick={onClick}>{isButtonToggled ? 'Click me again!' : 'Click me!'}</button>
}

const SectionLast = ({ opacity }) => {
  const [buttonColor, setButtonColor] = useState('white')
  const [isButtonToggled, setIsButtonToggled] = useState(false)
  const handleButtonClick = () => {
    console.log('Button3 clicked!')
  }

  const handleToggleButtonClick = () => {
    setIsButtonToggled(!isButtonToggled) // toggle the state of isButtonToggled
    setButtonColor(isButtonToggled ? 'white' : 'red') // update the button color based on the current state of isButtonToggled
  }

  return (
    <div style={{ opacity }}>
      <h1 className="mid">Guitar</h1>
       <Button3 onClick={handleButtonClick} buttonColor={buttonColor} />
      <div className='down'>
        <Button2 onClick={handleToggleButtonClick} isButtonToggled={isButtonToggled}/>
        <p>scroll down</p>
        <p className="animate-bounce">↓</p>
      </div>
    </div>
  )
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
    setOpacity2Section(scroll.curve(0, 1 / 3))
    setOpacity3Section(scroll.curve(0, 1 / 2))
    setOpacity4Section(scroll.curve(1.5 / 7, 1 / 3))
    setOpacity5Section(scroll.curve(2.9 / 7, 1 / 3))
    setOpacity6Section(scroll.curve(3.9 / 7, 1 / 4))
    setOpacity7Section(scroll.curve(5 / 7, 1 / 3))
    setOpacity8Section(scroll.curve(6 / 7, 1 / 3))
  })

  const navigate = useNavigate()

  function handleClick () {
    navigate('/path/to/push')
  }

  return (
    <Scroll html>
      <div className="w-screen">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Section opacity={opacity1tSection} isFirstSection>
          <h1 className="mid">
            Guitar
          </h1>
          {/* <Link to="/Home">Go to Destination</Link> */}
          <div className='down'>
          <p>scroll down</p>
          <p className="animate-bounce">↓</p>
          </div>
        </Section>
        </div>
        <div className="s-screen">
        <Section opacity={opacity2Section}>
          <h1 className="heading">
            Tuners
          </h1>
          <p>The tuners on a guitar are the key to staying in tune, and our high-quality tuners are designed to provide rock-solid stability and precision. Whether you &apos;re playing in a stadium or a bedroom, our tuners will ensure that your guitar stays perfectly in tune.
          </p>
        </Section>
        <Section html opacity={opacity3Section}>
<h1 className="heading">
            Frets
          </h1>
          <p>The frets on a guitar are the key to precise intonation and easy playability. Our high-quality frets are precisely placed and polished to ensure that every note rings true and clear, so you can focus on your music.</p>

        </Section>
        <Section opacity={opacity4Section}>
          <h1 className="heading">
            Knobs
          </h1>
          <p>The knobs on a guitar are the controls that allow you to shape your tone and adjust your volume and tone settings. Our high-quality knobs are designed to provide smooth and precise control, so you can fine-tune your sound to perfection. With our reliable and responsive knobs, you can dial in your perfect sound and take your playing to new heights.</p>
        </Section>
        <Section opacity={opacity5Section}>
          <h1 className="heading">
            Pickups
          </h1>
          <p>The pickups on a guitar are responsible for capturing the sound of the strings and converting it into an electrical signal. Our premium pickups are designed to capture every nuance of your playing, from the softest whisper to the loudest roar, so you can express yourself fully and confidently.</p>
        </Section>
        <Section opacity={opacity6Section}>
          <h1 className="heading">
            Bridge
          </h1>
          <p>
            The bridge of a guitar is the anchor point for the strings, and it plays a crucial role in determining the guitar &apos;s tone and sustain. Our expertly crafted bridges are designed to provide maximum resonance and sustain, giving you a rich and dynamic sound.
          </p>
        </Section>
        <Section right opacity={opacity7Section}>
          <>
          <h1 className="heading">
            Neck </h1>
           <p>The neck of a guitar is the backbone of the instrument, providing the support and stability you need to play with precision and accuracy. Our necks are crafted from the finest materials and designed to feel comfortable in your hand, so you can play for hours without fatigue.</p>
             </>
        </Section>
        <Section opacity={opacity8Section}>
        {/* <div style={{ display: 'block', flexDirection: 'initial', justifyContent: 'center' }}> */}
<button onClick={handleClick}>Go to /path/to/push</button>
         <SectionLast html >
        </SectionLast>
        </Section>
        {/* </div> */}
</div>
</div>
    </Scroll>
  )
}
