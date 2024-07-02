import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  HomePage,
  CategoryPage,
  ProfilePage,
  SignupPage,
  TasksPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
