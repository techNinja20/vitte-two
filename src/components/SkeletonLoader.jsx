import React from "react"

const SkeletonLoader = ({ length = 12 }) => {
  return (
    <div className="grid grid-cols-4 w-full gap-10 p-9">
      {Array.from({ length: length }, (_, key) => (
        <div
          className={`w-full border border-gray-300 animate-pulse rounded-lg p-4 space-y-6 ${length === 1 && "col-span-4"}`}
        >
          <div className="w-full flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
            <div className="w-full h-8 bg-gray-300"></div>
          </div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoader
