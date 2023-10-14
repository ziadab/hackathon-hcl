import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Admin from "./pages/Admin.tsx";
import AdminBooks from "./pages/AdminBooks.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "books",
            element: <AdminBooks />,
          },
        ],
      },
      // {
      //   path: "books",
      //   element: <Books />,
      // },
      // {
      //   path: "borrowed-books",
      //   element: <BorrowedBooks />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
