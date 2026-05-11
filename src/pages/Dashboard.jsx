import { useContextName } from "../context/GlobalContext"

const Dashboard = () => {
  const { formData } = useContextName()

  console.log("something:", formData)

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-400 ">
      <div className="bg-white shadow-lg rounded-[0.5rem] p-4 w-1/2 ">
        <h1 className="text-center font-bold text-4xl ">
          firstName: {formData.firstName}{" "}
        </h1>

        <div className="flex justify-between items-center font-medium  mt-10">
          <p>lastName: {formData.lastName}</p>
          <p>email:{formData.email}</p>
        </div>

        <div className="flex justify-between items-center font-medium  mt-10">
          <p>phoneNumber:{formData.phoneNumber}</p>
          <p>password:{formData.password}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
