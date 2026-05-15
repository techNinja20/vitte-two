import { useState } from "react"

const Count = () => {


    const [count,setCount] = useState(0)

    function next() {
    //    setCount(count+1)
        setCount(prev=> prev+1)
        
   }
    function previous() {
          setCount(prev=> prev-1)
   }

  return (

      <div className="flex justify-center items-center h-screen w-full gap-4" >
          
          <button onClick={previous}   className="bg-red-500 rounded-md py-2 px-4 text-white" >-</button>
          <p className="text-6xl">
          {count}
          </p>

          <button onClick={next}   className="bg-blue-500 rounded-md py-2 px-4 text-white" >+</button>
      
      </div>
  )
}

export default Count