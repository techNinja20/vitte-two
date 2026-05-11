import { useEffect, useState } from "react"

const Page = () => {
  const [count, setCount] = useState(1)
  const [multiply, setMultiply] = useState(2)

  useEffect(() => {
    function update() {
      setMultiply(count * 2)
    }
    update()
  }, [count])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p onClick={() => setCount((prev) => prev + 1)} className="text-5xl">
        count: {count}
      </p>
      <p className="text-5xl">multiply:{multiply}</p>
    </div>
  )
}

export default Page
