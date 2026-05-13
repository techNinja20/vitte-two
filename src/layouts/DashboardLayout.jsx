import { IoMdCart } from "react-icons/io"
import { MdShoppingBasket, MdSpaceDashboard } from "react-icons/md"
import tesla from "../assets/images/tesla.svg"
import { RiMap2Fill } from "react-icons/ri"
import { BsPeopleFill } from "react-icons/bs"
import { FaTags } from "react-icons/fa"
import { NavLink } from "react-router"
import { allPaths } from "../routes/paths"

const menuListOne = [
  {
    name: "Dashboard",
    icon: MdSpaceDashboard,
    to: allPaths.dashboard,
  },
  {
    name: "Marketplace",
    icon: IoMdCart,
    to: allPaths.marketplace,
  },
  {
    name: "Orders",
    icon: MdShoppingBasket,
    to: allPaths.orders,
  },
  {
    name: "Tracking",
    icon: RiMap2Fill,
    to: allPaths.tracking,
  },
  {
    name: "Customers",
    icon: BsPeopleFill,
    to: allPaths.customers,
  },
  {
    name: "Discounts",
    icon: FaTags,
    to: allPaths.discounts,
  },
]

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex ">
      <div className=" p-4  ">
        <div className="flex items-center gap-2  ">
          <img src={tesla} alt="tesla" className="w-6" />
          <h1 className="font-semibold text-xl text-primary ">Tesla</h1>
        </div>

        <div className="mt-8">
          <h2 className="text-[#bfc3c4] text-[14px] ">MARKETING</h2>
          <div className="mt-4 space-y-2">
            {menuListOne.map((ele, i) => (
              <NavLink
                to={ele.to}
                key={i}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-md  ${isActive ? "bg-[#e2f0ed] text-[#02422c]" : "text-[#8b9a95]"}`
                }
              >
                {ele.icon && <ele.icon />}
                <p className="">{ele.name}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div className="">Header</div>
        <div className="">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
