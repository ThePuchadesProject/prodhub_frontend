import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {
  action as updateAvailabilityAction,
  loader as productsLoader,
} from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import EditProduct, {
  loader as editProductLoader,
  action as editProductAction,
} from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        hydrateFallbackElement: <p className="text-zinc-200">Loading...</p>,
        action: updateAvailabilityAction,
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "products/:id/edit", // ROA Pattern - Resource-oriented design
        element: <EditProduct />,
        loader: editProductLoader,
        hydrateFallbackElement: <p className="text-zinc-200">Loading...</p>,
        action: editProductAction,
      },
      {
        path: "products/:id/remove",
        action: deleteProductAction,
      },
    ],
  },
]);
