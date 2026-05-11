import {  useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { BiLoaderCircle } from "react-icons/bi"
import { toastify } from "../shared/Toastify"
import { useNavigate } from "react-router"
import { useContextName } from "../context/GlobalContext"

const Signup = () => {

  const {formData,handleOnChange} = useContextName()





    const [isLoading, setIsLoading] = useState(false)
    const redirect = useNavigate()

  

  function handleSubmit(e) {
    e.preventDefault()
    // api call

    setIsLoading(true)
    setTimeout(() => {
        redirect("/dashboard")
        toastify("success", "Welcome onboard")
        setIsLoading(false)
    }, 3000)

    console.log("form:", formData)
  }

  console.log(isLoading)

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-blue-400 ">
        <div className="bg-white shadow-lg rounded-[0.5rem] p-4 w-1/2 ">
          <h1 className="text-center font-bold text-4xl ">SIGN UP</h1>

          <form onSubmit={handleSubmit} className="w-full mt-5 space-y-5">
            <Input
              label="Firstname"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
            />
            <Input
              label="Lastname"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
            />
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
            />
            <Input
              label="Phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleOnChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
            />
            <Button
              text={
                !isLoading ? (
                  "Submit"
                ) : (
                  <BiLoaderCircle className="animate-spin" />
                )
              }
              type="submit"
              disabled={
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.phoneNumber ||
                !formData.password
              }
            />
          </form>
        </div>
      </div>
     
    </>
  )
}

export default Signup
