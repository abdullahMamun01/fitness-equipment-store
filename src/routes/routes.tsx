import App from "@/App";
import DashBoardLayout from "@/layout/DashBoardLayout";
import RootLayout from "@/layout/RootLayout";
import ShoppingCart from "@/pages/Cart/ShoppingCart";
import Dashboard from "@/pages/dashboard/Dashboard";
import Inventory from "@/pages/dashboard/Inventory";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import Shop from "@/pages/shop/Shop";
import ShopLayout from "@/pages/shop/ShopLayout";
import path from "path";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/shop",
        element: <ShopLayout />,
        children: [
          {
            path: "",
            element: <Shop />,
          },
        ]
      }
     
    ],
    
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout/>,
    children: [
        {
            path: "inventory",
            element: <Inventory/>,
          }
      ],
  },
]);

export default router;
