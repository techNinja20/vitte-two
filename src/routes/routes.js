import Customers from "../pages/customers/Customers";
import Dashboard from "../pages/dashboard/Dashboard";
import Discounts from "../pages/discounts/Discounts";
import Login from "../pages/login/Login";
import Marketplace from "../pages/marketplace/Marketplace";
import Orders from "../pages/orders/Orders";
import Tracking from "../pages/tracking/Tracking";
import { allPaths } from "./paths";


export const allRoutes = [
    {
        path: allPaths.dashboard,
        Element: Dashboard,
        hasDashboardLayout:true
    },
    {
        path: allPaths.marketplace,
        Element: Marketplace,
        hasDashboardLayout:true
    },
    {
        path: allPaths.tracking,
        Element: Tracking,
        hasDashboardLayout:true
    },
    {
        path: allPaths.orders,
        Element: Orders,
        hasDashboardLayout:true
    },
    {
        path: allPaths.customers,
        Element: Customers,
        hasDashboardLayout:true
    },
    {
        path: allPaths.discounts,
        Element: Discounts,
        hasDashboardLayout:true
    },
    {
        path: allPaths.login,
        Element: Login,
        hasDashboardLayout:false
    },
]