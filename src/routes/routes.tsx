import React from "react";
import { createBrowserRouter } from "react-router-dom";
const App = React.lazy(() => import('@/App'));
const DashBoardLayout = React.lazy(() => import('@/layout/DashBoardLayout'));
const RootLayout = React.lazy(() => import('@/layout/RootLayout'));
const ShoppingCart = React.lazy(() => import('@/pages/Cart/ShoppingCart'));
const Inventory = React.lazy(() => import('@/pages/dashboard/Inventory'));
const ProductDetails = React.lazy(() => import('@/pages/ProductDetails/ProductDetails'));
const Shop = React.lazy(() => import('@/pages/shop/Shop'));
const ShopLayout = React.lazy(() => import('@/pages/shop/ShopLayout'));
const LoginPage = React.lazy(() => import('@/pages/login/LoginPage'));
const Registration = React.lazy(() => import('@/pages/register/Registration'));
const ProtectedRoute = React.lazy(() => import('./ProtectedRoute'));
const Checkout = React.lazy(() => import('@/components/Checkout/Checkout'));
const PaymentSuccess = React.lazy(() => import('@/components/order/PaymentSuccess'));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true, // Use `index` instead of `path: ""` for the root route
        element: <App />,
      },
      {
        path: "auth/login",
        element: <LoginPage />,
      },
      {
        path: "auth/register",
        element: <Registration />,
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "protected",
        element: <div>this is protected route!</div>,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess/>
      },
      {
        path: "shop",
        element: <ShopLayout />,
        children: [
          {
            index: true, // Use `index` for the default route within `shop`
            element: <Shop />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "inventory",
        element: <Inventory />,
      },
    ],
  },
]);

export default router;
