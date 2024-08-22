import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ChatPage from "./routes/ChatPage/ChatPage";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
// import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <ChatPage /> }],
    },
  ]
  // { basename: "/test-task-n/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
