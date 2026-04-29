import React, { useState } from "react"
import { allInfos, infos } from "../data/data"
import { Link } from "react-router"

const ZulfahExplore = () => {
  const [current, setCurrent] = useState(0)

  function handleUpdate(value) {
    setCurrent(value)
  }

  return (
    <div className="w-full py-8">
      <div className="max-w-[80%] mx-auto">
        <h1 className="text-[36px] text-center font-bold ">
          Explore Our{" "}
          <span className="text-[#EAB335] ">Cutting-Edge Courses</span>
        </h1>

        <ul className="mt-4 flex justify-center font-medium gap-4">
          {infos.map((data, i) => (
            <li
              onClick={() => handleUpdate(i)}
              className={`cursor-pointer ${current === i ? "bg-[#EAB335] text-white" : "bg-[#f8f5eed7] hover:bg-[#F5EEDC] text-black"}  p-4 rounded-md`}
            >
              {data}
            </li>
          ))}
        </ul>

        <div className="">
          <h1 className="">{allInfos[current].title}</h1>
          <p className="mt-4">{allInfos[current].details}</p>

          {/* <Link to={allInfos[current].link} >Learn More →</Link> */}
        </div>
      </div>
    </div>
  )
}

export default ZulfahExplore
