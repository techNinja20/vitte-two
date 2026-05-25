import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6"

const Rating = ({ rate }) => {
  console.log("rate:", rate)
  return (
    <div className="flex justify-center items-center text-yellow-500 text-2xl">
      {rate >= 1 ? (
        <FaStar />
      ) : rate >= 0.5 && rate< 1 ? (
        <FaRegStarHalfStroke />
      ) : (
        <FaRegStar />
          )}
          
           {rate >= 2 ? (
        <FaStar />
      ) : rate >= 1.5 && rate< 2 ? (
        <FaRegStarHalfStroke />
      ) : (
        <FaRegStar />
          )}
          
           {rate >= 3 ? (
        <FaStar />
      ) : rate >= 2.5 && rate< 3 ? (
        <FaRegStarHalfStroke />
      ) : (
        <FaRegStar />
          )}
          
           {rate >= 4 ? (
        <FaStar />
      ) : rate >= 3.5 && rate< 4 ? (
        <FaRegStarHalfStroke />
      ) : (
        <FaRegStar />
          )}
          
           {rate >= 5 ? (
        <FaStar />
      ) : rate >= 4.5 && rate< 5 ? (
        <FaRegStarHalfStroke />
      ) : (
        <FaRegStar />
      )}
    </div>
  )
}

export default Rating
