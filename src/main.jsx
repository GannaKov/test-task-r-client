import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import ChatPage, {
  loader as chatLoader,
  // action as chatAction,
} from "./routes/ChatPage/ChatPage";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import AuthProvider from "./context/AuthProvider";
// import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/:chatId",
          element: <ChatPage />,
          loader: chatLoader,
          // action: chatAction,
        },
      ], //index: true,
    },
  ]
  // { basename: "/test-task-n/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
