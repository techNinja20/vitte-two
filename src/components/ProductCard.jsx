import { Link } from "react-router"
import Rating from "./Rating"

const ProductCard = ({
  to,
  image,
  title,
  price,
  category,
  description,
  rating,
}) => {
  return (
    <Link to={to} className="w-full  shadow-2xs rounded-lg bg-white  ">
      <div className="w-full ">
        <img
          src={image}
          alt=""
          className="w-1/2 h-1/2 mx-auto object-contain"
        />
      </div>
      <div className="p-8 space-y-4">
        <h2 className="text-center text-semibold text-2xl">{title}</h2>
        <div className="flex justify-between items-center ">
          <p className="">${price}</p>
          <p className="">{category}</p>
        </div>

        <p className="">
          {description?.length > 180
            ? `${description?.slice(0, 180)}...`
            : description}
        </p>
        <Rating rate={rating?.rate} />
      </div>
    </Link>
  )
}

export default ProductCard
