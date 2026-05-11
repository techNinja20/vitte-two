import { createContext, useContext, useState } from "react"

const ContextForAll = createContext()

export function useContextName() {
  return useContext(ContextForAll)
}

const GlobalContext = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  })

  function handleOnChange(event) {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <ContextForAll.Provider value={{ formData, handleOnChange }}>
      {children}
    </ContextForAll.Provider>
  )
}

export default GlobalContext
