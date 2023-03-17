import { createContext, useContext, useState } from 'react'

const chairColors = [
  {
    color: '#683434',
    name: 'brown'
  }]
const CustomizationContext = createContext({})
export const CustomizationProvider = (props) => {
  const [chairColor, setChairColor] = useState(chairColors[0])

  return (
    <CustomizationContext.Provider
      value={{
        chairColors,
        chairColor,
        setChairColor
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  )
}

export const useCustomization = () => {
  const context = useContext(CustomizationContext)
  return context
}
