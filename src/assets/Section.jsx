import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useState } from 'react'

const Section = (props) => {
  const sectionStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2.5rem',
    textAlign: props.right ? 'right' : 'left',
    opacity: props.opacity
  }

  const innerStyle = {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '2rem',
    maxWidth: '20rem',
    width: '100%'
  }

  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <div style={cardStyle}>
          {props.children}
        </div>
      </div>
    </section>
  )
}

export const Overlay = () => {
  const scroll = useScroll()
  const [opacityFirstSection, setOpacityFirstSection] = useState(1)
  const [opacitySecondSection, setOpacitySecondSection] = useState(1)
  const [opacityLastSection, setOpacityLastSection] = useState(1)

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3))
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3))
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
  })

  return (
    <Scroll html>
      <div style={{ width: '100vw' }}>
        <Section opacity={opacityFirstSection}>
          <h1 style={{ fontWeight: 'bold', fontFamily: 'serif', fontSize: '1.5rem' }}>
            Hello, I'm Wawa Sensei
          </h1>
          <p style={{ color: 'gray' }}>Welcome to my beautiful portfolio</p>
          <p style={{ marginTop: '1rem' }}>I know:</p>
          <ul style={{ lineHeight: '1.5' }}>
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce" style={{ marginTop: '1.5rem' }}>↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 style={{ fontWeight: 'bold', fontFamily: 'serif', fontSize: '1.5rem' }}>
            Here are my skillsets 🔥
          </h1>
          <p style={{ color: 'gray' }}>PS: I never test</p>
          <p style={{ marginTop: '1rem' }}>
            <b>Frontend 🚀</b>
          </p>
          <ul style={{ lineHeight: '1.5' }}>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <b>Backend 🔬</b>
          </p>
          <ul style={{ lineHeight: '1.5' }}>
            <li>NodeJS</li>

            <li>tRPC</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
          </p>
        </Section>
      </div>
    </Scroll>
  )
}
