import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Layout } from "@/components/Layout";
import { DashboardPage, CustomersPage, ProductsPage, OrdersPage } from "@/pages";
import { AddCustomerPage } from "./pages/AddCustomerPage";
import { AddProductPage } from "./pages/AddProductPage";
import { AddOrderPage } from "./pages/AddOrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
      {
        path: "add-customer",
        element: <AddCustomerPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "add-product",
        element: <AddProductPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "add-order",
        element: <AddOrderPage />,
      },
 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
